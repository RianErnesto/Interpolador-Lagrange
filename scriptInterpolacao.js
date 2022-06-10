var secondDiv
var secondButton
var inputValue
var imagem

var input = document.getElementById("n")
var princ = document.getElementById("principal")

function createDiv() 
{
    if (!secondDiv) 
    {
        secondDiv = document.createElement("div")
    }
    else 
    {
        secondDiv.innerHTML = ""
    }

    if (!secondButton) 
    {
        secondButton = document.createElement("button")
        secondButton.innerHTML = "Confirmar"
    }
    else 
    {
        princ.removeChild(secondButton)
    }

    inputValue = input.value

    secondButton = document.createElement("button")
    secondButton.innerHTML = "Confirmar"
    secondButton.onclick = function () 
    {
        gettingValues()
    }

    princ.appendChild(secondDiv)


    for (var i = 0; i < inputValue; i++) {
        secondDiv.innerHTML += "<label>x" + i + ": </label>"
        secondDiv.innerHTML += "<input type=number class='xValues'><br>"
    }

    secondDiv.innerHTML += "<br>"

    for (var i = 0; i < inputValue; i++) 
    {
        secondDiv.innerHTML += "<label>y" + i + ": </label>"
        secondDiv.innerHTML += "<input type=number class='yValues'><br>"
    }

    secondDiv.innerHTML += "<br>"

    secondDiv.innerHTML += "<label>Imagem: <label>"
    secondDiv.innerHTML += "<input type=number id=imag><br>"

    princ.appendChild(secondButton)
}

function gettingValues() 
{
    let x = document.querySelectorAll(".xValues")
    let y = document.querySelectorAll(".yValues")

    imagem = document.getElementById("imag").value

    let xValues = new Array(inputValue)
    let yValues = new Array(inputValue)

    for (let i = 0; i < inputValue; i++) 
    {
        xValues[i] = x[i].value
        yValues[i] = y[i].value
    }

    secondDiv.innerHTML += "<label>Resultado: " + imageFound(xValues, yValues, imagem) + "</label>"
}

function imageFound(incx, incy, image) 
{

    let sum = 0

    for (let i = 0; i < incx.length; i++) {

        let mult = 1

        for (let j = 0; j < incx.length; j++) {

            if (i == j) continue

            mult = mult * ((image - incx[j]) / (incx[i] - incx[j]))

        }

        mult = mult * incy[i]
        mult = parseFloat(mult.toFixed(3))

        sum = sum + mult
    }

    return parseFloat(sum.toFixed(3))
}
