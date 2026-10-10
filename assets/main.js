document.documentElement.classList.add("js");

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

const closeMenu = () => {
  if (!menuButton || !navigation) return;
  menuButton.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
};

menuButton?.addEventListener("click", () => {
  const expanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!expanded));
  navigation?.classList.toggle("is-open", !expanded);
});

navigation?.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton?.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menuButton.focus();
  }
});

const mobileLayout = window.matchMedia("(max-width: 760px)");
mobileLayout.addEventListener("change", closeMenu);

const sections = [...document.querySelectorAll("main > section[id]")];
const navigationLinks = [...document.querySelectorAll('.site-nav a[href^="#"]')];
const languageLinks = [...document.querySelectorAll("[data-language-link]")];

const currentSection = () => {
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
    return sections.at(-1);
  }
  const offset = document.querySelector(".site-header")?.getBoundingClientRect().height ?? 0;
  return [...sections].reverse().find((section) => section.getBoundingClientRect().top <= offset + 120);
};

const updateNavigation = () => {
  const section = currentSection();
  for (const link of navigationLinks) {
    if (link.hash === `#${section?.id}`) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  }
  for (const link of languageLinks) {
    const destination = new URL(link.href);
    destination.hash = section && section.id !== "home" ? section.id : "";
    link.href = destination.href;
  }
};

let updatePending = false;
window.addEventListener("scroll", () => {
  if (updatePending) return;
  updatePending = true;
  window.requestAnimationFrame(() => {
    updateNavigation();
    updatePending = false;
  });
}, { passive: true });

window.addEventListener("pageshow", updateNavigation);
window.addEventListener("resize", updateNavigation);
for (const link of languageLinks) link.addEventListener("click", updateNavigation);

for (const year of document.querySelectorAll("[data-year]")) {
  year.textContent = String(new Date().getFullYear());
}

updateNavigation();
