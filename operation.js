// Getting input fileds and buttons as variable
const carModelSelect = document.getElementById('Select')
const language = document.getElementById('Select2')
const form = document.getElementById('form')

// Getting values
let carVal = "Select"
let langVal = "Select"

carModelSelect.addEventListener('change', () => {
    carVal = carModelSelect.value
})

language.addEventListener('change', () => {
    langVal = language.value
})

// Handling form submission
form.addEventListener('submit', (event) => {
    event.preventDefault()

    myCommonFunction("VW Golf 8", "Deutsch", "https://www.google.com")

    myCommonFunction("VW Golf 8", "Italiano", "https://www.disney.com")

    myCommonFunction("Tesla Model 3 / Y", "Deutsch", "https://www.facebook.com")

    myCommonFunction("Tesla Model 3 / Y", "Italiano", "https://www.instagram.com")

    // write here more functions

})

// Writing a common function for common work
const myCommonFunction = (car, lang, url) => {
    if (carVal == car && langVal == lang) {
        form.reset()
        document.location.assign(url)
    }
}