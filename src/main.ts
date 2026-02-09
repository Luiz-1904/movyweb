import "./style.css";

const yearElement = document.querySelector<HTMLSpanElement>("[data-year]");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear().toString();
}
