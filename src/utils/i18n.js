export function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in { en: "en", hu: "hu", de: "de" }) return lang;
  return "en";
}
