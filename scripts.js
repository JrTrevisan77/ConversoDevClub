const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const selectMoney = document.querySelector(".select-money")

function convertValues(){
    const inputCurrencyValue = Number(document.querySelector(".input-currency").value) || 0
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
    const inputResult = document.querySelector(".input-result")

    

    const dolarToday = 5.32
    const euroToday = 6.08
    const pesoToday = 267.01
    const canadenseToday = 0.26
    const ieneJaponesToday = 30.31
    const bitcoinToday = 0.0025
    const realToday = 1


    let valueInReal = inputCurrencyValue
    if (selectMoney.value == "dolar") {
        valueInReal = inputCurrencyValue * dolarToday
    }
    if (selectMoney.value == "euro") {
        valueInReal = inputCurrencyValue * euroToday
    }
    if (selectMoney.value == "peso-argentino") {
        valueInReal = inputCurrencyValue * pesoToday
    }
    if (selectMoney.value == "canada") {
        valueInReal = inputCurrencyValue * canadenseToday
    }
    if (selectMoney.value == "japones") {
        valueInReal = inputCurrencyValue * ieneJaponesToday
    }
    if (selectMoney.value == "bitcoin") {
        valueInReal = inputCurrencyValue * bitcoinToday
    }
    if (selectMoney.value == "real") {
        valueInReal = inputCurrencyValue * realToday
    }

    
    if (currencySelect.value == "dolar"){
        const converted = valueInReal / dolarToday
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "USD"
    }).format(converted)
        inputResult.value = converted.toFixed(2)
    }

    if (currencySelect.value == "euro"){
        const converted = valueInReal / euroToday
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
        style: "currency",
        currency: "EUR"
    }).format(converted)
        inputResult.value = converted.toFixed(2)
    }

    if (currencySelect.value == "real"){
        const converted = valueInReal / realToday
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency: "BRL"
    }).format(converted)
        inputResult.value = converted.toFixed(2)
    }

    if (currencySelect.value == "canada"){
        const converted = valueInReal / canadenseToday
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-CA",{
        style: "currency",
        currency: "CAD"
    }).format(converted)
        inputResult.value = converted.toFixed(2)
    }

    if (currencySelect.value == "bitcoin"){
        const converted = valueInReal / bitcoinToday
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
        style: "decimal",
        minimumFractionDigits: 8,
        maximumFractionDigits: 8
    }).format(converted)
        inputResult.value = converted.toFixed(8)
    }

    if (currencySelect.value == "peso-argentino"){
        const converted = valueInReal / pesoToday
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR",{
        style: "currency",
        currency: "ARS"
    }).format(converted)
        inputResult.value = converted.toFixed(2)
}   

    if (currencySelect.value == "japones"){
        const converted = valueInReal / ieneJaponesToday
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP",{
        style: "currency",
        currency: "JPY"
    }).format(converted)
        inputResult.value = converted.toFixed(2)
    }

  
    if (selectMoney.value == "dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", 
        {style: "currency", 
        currency: "USD"})
        .format(inputCurrencyValue)
    }
    if (selectMoney.value == "euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE",
        {style: "currency", 
        currency: "EUR"})
        .format(inputCurrencyValue)
    }
    if (selectMoney.value == "peso-argentino") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-AR", 
        {style: "currency", 
        currency: "ARS"})
        .format(inputCurrencyValue)
    }
    if (selectMoney.value == "canada") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-CA",
        {style: "currency",
        currency: "CAD"})
        .format(inputCurrencyValue)
    }
    if (selectMoney.value == "japones") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("ja-JP", 
        {style: "currency",
        currency: "JPY"})
        .format(inputCurrencyValue)
    }
    if (selectMoney.value == "bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US",
        {style: "decimal", 
        minimumFractionDigits: 8, 
        maximumFractionDigits: 8})
        .format(inputCurrencyValue)
    }
    if (selectMoney.value == "real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",
        {style: "currency",
        currency: "BRL"})
        .format(inputCurrencyValue)
    }
}

function changeCurrencyTop(){
 const currencyImageTop = document.querySelector(".bandeira-cima")
 const currencyNameTop = document.getElementById("currency-name-top")

if  (selectMoney.value == "dolar"){
        currencyNameTop.innerHTML = "Dolar"
        currencyImageTop.src = "./img/USA.jfif"
    }

    if  (selectMoney.value == "euro"){
        currencyNameTop.innerHTML = "Euro"
        currencyImageTop.src = "./img/Euro.png"
    }

    if  (selectMoney.value == "japones"){
        currencyNameTop.innerHTML = "iene japonês"
        currencyImageTop.src = "./img/japones.webp"
    }

    if  (selectMoney.value == "bitcoin"){
        currencyNameTop.innerHTML = "Bitcoin"
        currencyImageTop.src = "./img/Bitcoin.png"
    }

    if  (selectMoney.value == "peso-argentino"){
        currencyNameTop.innerHTML = "Peso Argentino"
        currencyImageTop.src = "./img/argentina.webp"
    }

    if  (selectMoney.value == "canada"){
        currencyNameTop.innerHTML = "Canadense"
        currencyImageTop.src = "./img/canada.png"
    }

    if  (selectMoney.value == "real"){
        currencyNameTop.innerHTML = "Real"
        currencyImageTop.src = "./img/Brasil.jfif"
    }
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
selectMoney.addEventListener("change", changeCurrencyTop)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
document.querySelector(".input-currency").addEventListener("input", convertValues)