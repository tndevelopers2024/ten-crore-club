/**
 * No-flash theme initializer. Runs before paint (strategy="beforeInteractive")
 * and applies the persisted choice from ThemeToggle to <html>.
 *
 * The server renders <html class="light">, so the only work here is stripping
 * that class when the visitor previously chose dark.
 */
(function () {
  try {
    var stored = localStorage.getItem("tc-theme");
    if (stored !== "dark" && stored !== "light") return;
    document.documentElement.classList.toggle("light", stored === "light");
  } catch (e) {
    /* private mode / storage disabled — keep the server-rendered default */
  }
})();
