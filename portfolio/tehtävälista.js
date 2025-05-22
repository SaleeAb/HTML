let lista = ["Tehtävä1", "Tehtävä2"]
ul = document.getElementById("teht")



function Paivitalista() {
lista.innerHTML = ""
for (tehtävä of lista){
    e = document.createElement('li')
    e.innerHTML = tehtävä
    ul.append(e)
    
    
    
    

    
}
    
    

}

function lisaa() {
    ul.innerHTML = ""
    o = document.getElementById("textbox")
    lista.push(o.value)
    Paivitalista()
}



