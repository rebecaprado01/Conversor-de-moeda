const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
const inputCurrencyValue = document.querySelector(".input-currency").value
const currencyValueToConvert = document.querySelector(".currency-value-to-convert")   //Valor em Real
const currencyValueConverted = document.querySelector(".currency-value") // outras moedas


console.log(currencySelect.value)

 const dolarToday = 5.2
 const euroToday = 6.2
 const dolarCanadenseToday = 4.03



if(currencySelect.value == "dolar"){
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style:"currency",
        currency:"USD"
    
    }).format(inputCurrencyValue / dolarToday)
    
}

    if(currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
        }).format(inputCurrencyValue/euroToday)
        }

        if(currencySelect.value == "dolar canadense"){
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-CA", {
            style: "currency",
            currency: "CAD"
            }).format(inputCurrencyValue/dolarCanadenseToday)
            }
        




currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
}).format(inputCurrencyValue)

}

function changeCurrency(){
 const currencyName = document.getElementById("currency-name")
 const currencyImage = document.querySelector(".currency-img")



if (currencySelect.value == "dolar"){
    currencyName.innerHTML = "Dólar americano"
    currencyImage.src = "./assets/dólar.png"
}

if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./assets/euro.png"
}

if (currencySelect.value == "dolar canadense") {
    currencyName.innerHTML = "Dólar canadense"
    currencyImage.src = "./assets/dólar-canadense.png"
}

convertValues()

}



currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)



