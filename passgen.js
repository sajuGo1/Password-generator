"use strict";

function generate() {
    let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let arr_num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let arr_symb = ['!', '@', '#', '$', '%', '&', '?', '-', '+', '=', '~'];

    let arr_com = [...arr_en, ...arr_EN];
    let length = document.getElementById("length").value;
    let password = "";

    if (document.getElementById("nums").checked) {
        arr_com.push(...arr_num);
    }

    if (document.getElementById("symb").checked) {
        arr_com.push(...arr_symb);
    }

    function getRndmElem(arr) {
        let rndmIndex = Math.floor(Math.random() * arr.length);
        return arr[rndmIndex];
    }

    for (let i = 0; i < length; i++) {
        password += getRndmElem(arr_com);
    }

    document.querySelector(".password").textContent = password;
}