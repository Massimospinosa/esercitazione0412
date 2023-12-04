/*ESERCIZIO 1*/
class User {
    constructor(_firstName,_lastName,_age,_location){
        this.firstName = _firstName
        this.lastName = _lastName
        this.age = _age
        this.location = _location
    }
   moreOlder(nextUser){
    if (this.age === nextUser.age){
        console.log('Gli utenti hanno la stessa età')
    }
    else if (this.age > nextUser.age) {
        console.log(`${this.firstName} ${this.lastName} è più vecchio di ${nextUser.firstName} ${nextUser.lastName}`)
    } else {
        console.log(`${this.firstName} ${this.lastName} è più giovane di ${nextUser.firstName} ${nextUser.lastName}`)
    }

   }
}

const utente1 = new User('Gigi','Zambrotta','17','Milano')
const utente2 = new User('Victor','Scott','67','Sidney')
const utente3 = new User('Giorgio','Assiri','48','Siracusa')
const utente4 = new User('Stanley','Lobotka','29','Trencin')
const utente5 = new User('Walter','Mazzarri','62','San Vincenzo')
const utente6 = new User('Emma','Pagani','62','Sanremo')

/*utente1.moreOlder(utente2);*/
/*ESERCIZIO 2*/

/*class Pets {
    constructor(,,_species,_breed){
        this.petName = _petName
        this.ownerName = _ownerName
        this.species = _species
        this.breed = _breed
    }
    sameOwner(petOwner){
        if (this.ownerName === petOwner.ownerName)
        console.log()
    }

}

const pet1 = new Pets('Mike','Luca','Cane','Pastore')
const pet2 = new Pets('Boh','Mario','Gatto','persiano')
const pet3 = new Pets('Stuff','Giovanni','Iguana','indonesiana')
const pet4 = new Pets('Puff','Marco','gatto','europeo')
const pet5 = new Pets('TJ','Luca','cavallo','maremmano')*/


// Contenuto del file "script.js"

class GestoreForm {
    constructor() {
        this.pets = [];
    }

    raccogliDati() {
        const petName = document.getElementById("petName").value;
        const ownerName = document.getElementById("ownerName").value;
        const species = document.getElementById("species").value;
        const breed = document.getElementById("breed").value;

        const pet = {
            petName,
            ownerName,
            species,
            breed
        };

        this.pets.push(pet);
        this.aggiornaLista();

        if (this.proprietariUguali()) {
            console.log('I proprietari sono uguali');
        } else {
            console.log('I proprietari sono diversi');
        }
    }

    aggiornaLista() {
        const listaUtenti = document.getElementById("listaUtenti");
        const pet = this.pets[this.pets.length - 1];
        const listPets = document.createElement('li');
        listPets.textContent = `${pet.petName}, ${pet.ownerName}, ${pet.species}, ${pet.breed}`;
        listaUtenti.appendChild(listPets);
    }
    proprietariUguali() {
        const ultimoPet = this.pets[this.pets.length - 1];
        const penultimoPet = this.pets[this.pets.length - 2];

        return ultimoPet && penultimoPet && ultimoPet.ownerName === penultimoPet.ownerName;
    }
}

const gestore = new GestoreForm();

function inviaForm() {
    gestore.raccogliDati();
}
