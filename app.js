const menuBtn = document.querySelector(".menuBtn")
const navbar = document.querySelector(".navbar")

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("open")
})
