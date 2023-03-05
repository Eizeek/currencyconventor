let selected = document.querySelector("#selected");
let selected2 = document.querySelector("#selected2");
let rateinput = document.querySelector("#rateinput")
let rateinput2 = document.querySelector("#rateinput2")
let converted = document.querySelector("#converted")
let added = document.querySelector("#added")

fetch("https://api.exchangerate.host/latest")
.then((resp) => resp.json())
.then((data) => {  
    Object.entries(data.rates).forEach(e=> {
        selected.innerHTML += `<option id="opt1" value=${e[1]}>${e[0]}</option>`;

    });
    Object.entries(data.rates).forEach(z=> {
        selected2.innerHTML += `<option id="opt2" value=${z[1]}>${z[0]}</option>`;

    });

    selected.addEventListener('change', (e) => {
        const selectedRate = e.target.value;
        rateinput.value = selectedRate;
        Currency()
    });

    selected2.addEventListener('change', (z) => {
        const selectedRate2 = z.target.value;
        rateinput2.value = selectedRate2;
        Currency()
    });
    function Currency(){

        const fromRate = parseFloat(rateinput.value);
        const toRate = parseFloat(rateinput2.value);
        const euroRate = 1;
        const convertedCurrency = (euroRate/fromRate)*(euroRate/toRate);
        let convertedvalue = convertedCurrency.toFixed(5);
        converted.value = convertedvalue;
        }


        

});

