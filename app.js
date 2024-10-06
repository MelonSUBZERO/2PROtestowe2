
function dodaj() {
    var cos = parseFloat(document.getElementById("h1").innerHTML); 
    cos += 2; 
    document.getElementById("h1").innerHTML = cos; 
}

function pomnoz() {
    var cos = parseFloat(document.getElementById("h1").innerHTML); 
    cos = cos * 2; 
    document.getElementById("h1").innerHTML = cos; 
}
function podziel() {
    var cos = parseFloat(document.getElementById("h1").innerHTML); 
    cos = cos / 2; 
    document.getElementById("h1").innerHTML = cos; 
}

function poteguj() {
    var cos = parseFloat(document.getElementById("h1").innerHTML); 
    cos = Math.pow(cos, 2); 
    document.getElementById("h1").innerHTML = cos; 
}
function modulo() {
    var cos = parseFloat(document.getElementById("h1").innerHTML); 
    cos = cos % 2; 
    document.getElementById("h1").innerHTML = cos; 
}
function czysto() {
    var cos = parseFloat(document.getElementById("h1").innerHTML); 
    document.getElementById("h1").innerHTML = 0; 
}
let r = 0, g = 0, b = 0;

        function kolory() {
            const btn1 = document.getElementById("c1");
            const btn2 = document.getElementById("c2");
            const btn3 = document.getElementById("c3");
            const btn4 = document.getElementById("c4");
            const btn5 = document.getElementById("c5");
            const btn6 = document.getElementById("c6");
            btn1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            btn2.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            btn3.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            btn4.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            btn5.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            btn6.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            if (b < 255) {
                b++;
            } else if (g < 255 && r === 255) {
                g++;
            } else if (r < 255) {
                r++;
            } else {
                r = 0; g = 0; g = 0;
            }
        }
        setInterval(kolory, 5);