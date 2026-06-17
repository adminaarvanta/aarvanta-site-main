import { COLOR_MODE_STORAGE_KEY } from "@/lib/theme-colors";

/** Runs before hydration to avoid theme flash. */
export default function PreferencesScript() {
  const script = `(function(){try{var pref=localStorage.getItem("${COLOR_MODE_STORAGE_KEY}")||"system";var prefersDark=window.matchMedia("(prefers-color-scheme: dark)").matches;var mode=pref==="dark"||(pref==="system"&&prefersDark)?"dark":"light";document.documentElement.dataset.theme=mode;document.documentElement.style.colorScheme=mode;}catch(e){}})();`;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
