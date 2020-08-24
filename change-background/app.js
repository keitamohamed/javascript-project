const colors = ['Green', 'Red', 'rgba(133, 122, 200)', '#F15025']

const btn = document.querySelector("#change-color")
const color = document.querySelector(".color")

btn.addEventListener('click', () => {
    const randNumber = getRandomNumber()
    document.body.style.backgroundColor = colors[randNumber]
    color.textContent = colors[randNumber]
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}
