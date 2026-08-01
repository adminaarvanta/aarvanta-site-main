/** Client-side form delivery for the static GitHub Pages export. */

const DEFAULT_TO = "admin@aarvanta.co";

export type LeadFormPayload = Record<string, string | undefined>;

export type SubmitLeadResult =
  | { ok: true }
  | { ok: false; error: string };

function resolveEndpoint(): { url: string; provider: "formspree" | "formsubmit" } {
  const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID?.trim();
  if (formspreeId) {
    return {
      url: `https://formspree.io/f/${formspreeId}`,
      provider: "formspree",
    };
  }

  const email = process.env.NEXT_PUBLIC_FORM_TO_EMAIL?.trim() || DEFAULT_TO;
  return {
    url: `https://formsubmit.co/ajax/${encodeURIComponent(email)}`,
    provider: "formsubmit",
  };
}

/**
 * Posts lead data to Formspree (if configured) or FormSubmit → admin inbox.
 * FormSubmit: confirm the activation email sent to the inbox on first use.
 */
export async function submitLeadForm(
  payload: LeadFormPayload,
  options?: { subject?: string },
): Promise<SubmitLeadResult> {
  // Honeypot — bots fill this; treat as success without sending
  if (payload._honey?.trim() || payload._gotcha?.trim()) {
    return { ok: true };
  }

  const { url, provider } = resolveEndpoint();
  const body: Record<string, string> = {
    _subject: options?.subject ?? "New enquiry from aarvanta.co",
  };

  for (const [key, value] of Object.entries(payload)) {
    if (key.startsWith("_")) continue;
    if (value != null && String(value).trim() !== "") {
      body[key] = String(value).trim();
    }
  }

  if (provider === "formsubmit") {
    body._template = "table";
    body._captcha = "false";
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (response.ok) {
      return { ok: true };
    }

    let message = "Something went wrong. Please email admin@aarvanta.co.";
    try {
      const data = (await response.json()) as {
        error?: string;
        errors?: { message?: string }[];
      };
      if (data.error) message = data.error;
      else if (data.errors?.[0]?.message) message = data.errors[0].message!;
    } catch {
      // keep default message
    }
    return { ok: false, error: message };
  } catch {
    return {
      ok: false,
      error: "Network error. Please try again or email admin@aarvanta.co.",
    };
  }
}
