a = 3
b = 5
c = 7
d = 15


function summa(a, b) {
    alert(a + b)
}

function vähennys(a, b) {
    alert(b - c)
}

function kerto(a , b) {
    alert(c * d)
}

function jako(a, b) {
    alert(d / a)
}

function laskin(a, b){
    
}

function plus() {
   eka = Number(document.getElementById("eka").value)
   toka = Number(document.getElementById("toka").value)
   vastaus = summa(eka, toka)
   alert(vastaus)

   


}

function miinus() {
    eka = Number(document.getElementById("eka").value)
    toka = Number(document.getElementById("toka").value)
    vastaus = vähennys(eka, toka)
    alert(vastaus)
}

function kerttoo() {
    eka = Number(document.getElementById("eka").value)
    toka = Number(document.getElementById("toka").value)
    vastaus = kerto(eka, toka)
    alert(vastaus)
}

function jakoo() {
    eka = Number(document.getElementById("eka").value)
    toka = Number(document.getElementById("toka").value)
    vastaus = jako(eka, toka)
    alert(vastaus)
}