export const themes = [
  { id: "midnight", label: "Midnight", background: "#060a14", accent: "#63e7f3", secondary: "#a99aff" },
  { id: "black", label: "Black", background: "#080909", accent: "#a8f0cf", secondary: "#c3c7d4" },
  { id: "white", label: "White", background: "#f7fafc", accent: "#087e8b", secondary: "#7254b6" },
  { id: "violet", label: "Violet", background: "#100b20", accent: "#d0b1ff", secondary: "#7ee8e1" },
] as const;

export type ThemeId = typeof themes[number]["id"];
export const themeStorageKey = "portfolio-colour-theme";
export function isTheme(value: unknown): value is ThemeId { return themes.some((theme) => theme.id === value); }

export function sceneColors(theme: ThemeId): string[] {
  if (theme === "white") return ["#087e8b", "#7254b6", "#147d64", "#315bb5", "#ac3e77"];
  if (theme === "black") return ["#a8f0cf", "#c3c7d4", "#7bd4aa", "#a8c2e4", "#d5b0cb"];
  if (theme === "violet") return ["#d0b1ff", "#7ee8e1", "#e9b9ec", "#9caaff", "#c7e9a7"];
  return ["#67e8f9", "#b49aff", "#5eead4", "#93c5fd", "#f1b7ff"];
}

// Runs before hydration so a returning visitor does not see the wrong colour scheme.
export const themeBootstrap = `try{var t=localStorage.getItem('${themeStorageKey}');document.documentElement.dataset.theme=['midnight','black','white','violet'].includes(t)?t:'midnight'}catch(e){document.documentElement.dataset.theme='midnight'}`;
