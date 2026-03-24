const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues(){
    const inputCurrencyValue = Number(document.querySelector(".input-currency").value) || 0
    const fromCurrency = document.querySelector(".select-money").value
    const toCurrency = currencySelect.value
    const inputResult = document.querySelector(".input-result")
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const rates = {
        real: 1,
        dolar: 5.32,
        euro: 6.08,
        "peso-argentino": 267.01,
        canada: 0.26,
        japones: 30.31,
        bitcoin: 0.0025
    }

    const formatMap = {
        real: {locale: "pt-BR", options: {style: "currency", currency: "BRL"}},
        dolar: {locale: "en-US", options: {style: "currency", currency: "USD"}},
        euro: {locale: "de-DE", options: {style: "currency", currency: "EUR"}},
        "peso-argentino": {locale: "es-AR", options: {style: "currency", currency: "ARS"}},
        canada: {locale: "en-CA", options: {style: "currency", currency: "CAD"}},
        japones: {locale: "ja-JP", options: {style: "currency", currency: "JPY"}},
        bitcoin: {locale: "en-US", options: {style: "decimal", minimumFractionDigits: 8, maximumFractionDigits: 8}}
    }

    const fromRate = rates[fromCurrency] || 1
    const toRate = rates[toCurrency] || 1

    const valueInBrl = inputCurrencyValue * fromRate
    const converted = valueInBrl / toRate

    const formatFrom = formatMap[fromCurrency] || formatMap.real
    const formatTo = formatMap[toCurrency] || formatMap.real

    const formatValue = (value, format) => new Intl.NumberFormat(format.locale, format.options).format(value)

    currencyValueToConvert.innerHTML = formatValue(inputCurrencyValue, formatFrom)
    currencyValueConverted.innerHTML = formatValue(converted, formatTo)

    inputResult.value = (toCurrency === "bitcoin") ? converted.toFixed(8) : converted.toFixed(2)
}



function changeCurrency(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".bandeira")
    
    if (currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dolar"
        currencyImage.src = "./img/USA.jfif"
    }

    if (currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./img/Euro.png"
    }
    
    if (currencySelect.value == "japones"){
        currencyName.innerHTML = "iene japonês"
        currencyImage.src = "./img/japones.webp"
    }

    if (currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./img/Bitcoin.png"
    }

    if (currencySelect.value == "peso-argentino"){
        currencyName.innerHTML = "Peso Argentino"
        currencyImage.src = "./img/argentina.webp"
    }

    if (currencySelect.value == "canada"){
        currencyName.innerHTML = "Canadense"
        currencyImage.src = "./img/canada.png"
    }

    if (currencySelect.value == "real"){
        currencyName.innerHTML = "Real"
        currencyImage.src = "./img/Brasil.jfif"
    }

    convertValues()

}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)