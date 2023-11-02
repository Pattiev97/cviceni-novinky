const bodyElement = document.querySelector("body")
const news = document.querySelector(".news")
const nadpis = document.querySelector("h1")
const zprava1 = document.querySelector("#zprava1")
const obrazek3 = document.querySelector("#zprava3")

bodyElement.style.backgroundColor = "#e9e9e9"
news.style.backgroundColor = "white"
news.style.maxWidth = "60rem"
nadpis.classList.add("news__title")
nadpis.textContent = "Aktuální novinky"
zprava1.classList.add("post--main")
obrazek3.src = "images/zprava3-novy.jpg"