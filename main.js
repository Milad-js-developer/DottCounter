const input = document.querySelector("form input");
const button = document.querySelector("button").addEventListener("click", count);
const result = document.querySelector("form label");

let counter = 0;
const singleDott = ["ب", "ج", "خ", "ذ", "ز", "ض", "ظ", "غ", "ف", "ن"];
const doubleDott = ["ت", "ق"];
const threedDott = ["ث", "چ", "ش", "ژ"];
const middleDott = ["ی"];

function count(event) {
    event.preventDefault();

    let txt = input.value;
    let splittedTxt = txt.split("");

    for(let i = 0; i < splittedTxt.length; i++) {
        let letter = splittedTxt[i];

        if(singleDott.includes(letter)) {
            counter ++;
        }
        if(doubleDott.includes(letter)) {
            counter += 2;
        }
        if(threedDott.includes(letter)) {
            counter += 3;
        }
        if(middleDott.includes(letter) && i !== splittedTxt.length - 1) {
            if(splittedTxt[i + 1] !== " ") {
                counter += 2;
            }
        }
    }

    result.innerText = `تعداد نقطه : ${counter}`;
    counter = 0;
    input.value = "";
}