
window.addEventListener("DOMContentLoaded", () => {
  const colorMode = localStorage.getItem("color-mode") || getComputedStyle(document.documentElement).getPropertyValue("--color-mode")
  const toggleLightButton = document.querySelector(".toggle #light")
  const toggleDarkButton = document.querySelector(".toggle #dark")
  const toggleInputs = document.querySelectorAll(`.toggle input[name="theme"]`)

  if (colorMode === "dark") {
    document.documentElement.classList.add("dark")
    toggleDarkButton.checked = true
  } else {
    document.documentElement.classList.add("light")
    toggleLightButton.checked = true
  }

  toggleInputs.forEach(input => {
    input.addEventListener("change", () => {
      if (input.id === "dark") {
        document.documentElement.classList.add("dark")
        document.documentElement.classList.remove("light")
        localStorage.setItem("color-mode", "dark")
      } else {
        document.documentElement.classList.add("light")
        document.documentElement.classList.remove("dark")
        localStorage.setItem("color-mode", "light")
      }
    })
  })

})