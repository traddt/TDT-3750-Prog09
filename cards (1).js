// define the functions

var times = 0;

function printCard() {
   var nameLine = "<strong>Name: </strong>" + this.name + "<br>";
   var emailLine = "<strong>Email: </strong>" + this.email + "<br>";
   var addressLine = "<strong>Address: </strong>" + this.address + "<br>";
   var phoneLine = "<strong>Phone: </strong>" + this.phone + "<br>";
   var birthDateLine = "<strong>Birth Date: </strong>" + this.birthDate + "<hr>";
   document.getElementById("card-output").innerHTML += nameLine + emailLine + addressLine + phoneLine + birthDateLine;
}

function Card(name,email,address,phone,birthDate) {
   this.name = name;
   this.email = email;
   this.address = address;
   this.phone = phone;
   this.birthDate = birthDate;
   this.printCard = printCard;
}

function addCard() {
    var nCard = new Card(
        document.getElementById("newName").value,
        document.getElementById("newEmail").value,
        document.getElementById("newAddress").value,
        document.getElementById("newPhone").value,
        document.getElementById("newBdate").value
    );
    nCard.printCard();
}

// Create the objects
var sue = new Card("Sue Suthers", "sue@suthers.com", "123 Elm Street, Yourtown ST 99999", "555-555-9876", "06/14/2000");
var fred = new Card("Fred Fanboy", "fred@fanboy.com", "233 Oak Lane, Sometown ST 99399", "555-555-4444", "5/15/2010");
var jimbo = new Card("Jimbo Jones", "jimbo@jones.com", "233 Walnut Circle, Anotherville ST 88999", "555-555-1344", "4/26/1980");

// Now print them
function printCards() {
    if (times === 0) {
        sue.printCard();
        fred.printCard();
        jimbo.printCard();
        times += 1;
    }
}

