
const portfolioSectionEl = document.getElementById("portfolio")
const navbarEl = document.getElementById("navigation-bar")
window.addEventListener("scroll", () => {
    let distanceFromTop = portfolioSectionEl.offsetTop - window.scrollY
    console.log(distanceFromTop)
    if (distanceFromTop <= 20 && !navbarEl.classList.contains("fixed-top")) {
        navbarEl.classList.add("fixed-top")
    } else if (distanceFromTop > 20 && navbarEl.classList.contains("fixed-top")){
        navbarEl.classList.remove("fixed-top")
    } 
})