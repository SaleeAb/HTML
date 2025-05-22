rivit = document.getElementById("rivit")

tiedot = [
    {
        name: "Merja Meikäläinen",
        age: 20,
        job: "Opiskelija",
        driversLicense: true,
    },
    {
        name: "Teppo Teikäläinen",
        age: 25,
        job: "Sähköteknikko",
        driversLicense: true,
    },
    {
        name: "Helena Heikäläinen",
        age: 30,
        job: "Ohjelmistosuunnittelija",
        driversLicense: false,

    },

    {
        name: "Semir sikäläinen",
        age: 18,
        job: "Opiskelija",
        driversLicense: true,

    },

    {
        name: "Tomas Täkäläinen",
        age: 22,
        job: "Linja-autonkuljettaja",
        driversLicense: true,
    },
]

function luorivit() {
    for (info of tiedot){
        luo = document.createElement("td")
        luo.innerHTML = info.name
        luo2 = document.createElement("td")
        luo2.innerHTML = info.age
        luo3 = document.getElementById("td")
        luo3.innerHTML = info.job
        luo4 = document.getElementById("td")
        luo4.innerHTML = info.driversLicense
        rivit.append(luo1)
        rivit.append(luo2)
        rivit.append(luo3)
        rivit.append(luo4)
        

    }
}