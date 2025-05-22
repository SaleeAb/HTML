console.log("Kommentti sivu avattu!")


viesti = document.getElementById("message")
email = document.getElementById("sähköposti")
synttäri = document.getElementById("ika")
kommentti = document.getElementById("kommentti")
kysymys = document.getElementById("kysymys")
hyväksy = document.getElementById("Hyvaksy")
hylkää = document.getElementById("Hylkaa")
lähetä = document.getElementById("laheta")



function send(evnet) {
    evnet.preventDefault()
    console.log("Viesi:", viesti.value)
    console.log("Sähköposti:", email.value)
    console.log("Syntymäpäivä:", synttäri.value)
    console.log("Textin tyyppi:", kommentti.value, "Eli kommentti")
    console.log("Textin tyyppi:", kysymys.value, "Eli kysymys")
    console.log("Käyttö ehdot:", hyväksy.value, "Eli hyväksytty")
    console.log("Käyttö ehdot:", hylkää, "Eli hylätty")

   
}


