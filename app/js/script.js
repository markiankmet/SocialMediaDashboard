window.addEventListener("DOMContentLoaded", () => {
  const colorMode = localStorage.getItem("color-mode") || getComputedStyle(document.documentElement).getPropertyValue("--color-mode")
  const toggleLightButton = document.querySelector(".toggle #light")
  const toggleDarkButton = document.querySelector(".toggle #dark")
  const toggleInputs = document.querySelectorAll(`.toggle input[name="theme"]`)
  const setDarkMode = () => {
    document.documentElement.classList.add("dark")
    document.documentElement.classList.remove("light")
    toggleDarkButton.checked = true
    toggleLightButton.checked = false
    localStorage.setItem("color-mode", "dark")
  }
  const setLightMode = () => {
    document.documentElement.classList.add("light")
    document.documentElement.classList.remove("dark")
    toggleLightButton.checked = true
    toggleDarkButton.checked = false
    localStorage.setItem("color-mode", "light")
  }

  colorMode === "dark" ? setDarkMode() : setLightMode()

  toggleInputs.forEach(input => {
    input.addEventListener("change", () => {
      input.id === "dark" ? setDarkMode() : setLightMode()
    })
  })
})