// Smooth-scroll to a same-page section by id. Does nothing when the
// element is not on the current page.
export function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
