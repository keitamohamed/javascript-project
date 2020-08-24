"use strict"

const data = fetch('./Data.json')
    .then(result => result[0].json())
    .then(console.log)
    .catch(err => {
        console.log(err)
    })

// const endPoint = `https://disease.sh/v3/covid-19/countries`
// const getData = async () => {
//     const respond = await fetch(endPoint)
//     console.log(respond.json())
// }

const btn = document.querySelector('.btn')
// btn.addEventListener('click', function () {
//     console.log(jSONData)
// })

btn.addEventListener('click', () => {
    console.log(data)
})
