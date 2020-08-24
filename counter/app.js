const counter = document.querySelector(".counter")
const increase = document.querySelector("#increase")
const decrease = document.querySelector("#decrease")
const reset = document.querySelector("#reset")

increase.addEventListener('click', () => {
    count(counter, 1)
})

decrease.addEventListener('click', () => {
    count(counter, -1)
})

reset.addEventListener('click', () => {
    count(counter, 0)
})

function count(number, event) {
    console.log(number.textContent)
    let newValue = parseInt(number.textContent) + event

    if (event === 0 || newValue === 0) {
        counter.textContent = '0'
        counter.style.color = '#000'
        return
    }
    if (newValue > 0) {
        counter.textContent = newValue
        counter.style.color = '#008000'
        return
    }
    counter.textContent = newValue
    counter.style.color = '#FF0000'
}
