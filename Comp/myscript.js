//object literal

const salon = {
    name: "The Fashion Pets",
    phone: "(555)569-0443",
    address: {
        street: "Av. University",
        number:"251-6"
    },
    workingHours:{
        days: "Mon-Fri",
        open: "9:00 am",
        close: "5:00 pm"
    },

    pets:[],

    count: function(){
        alert("We have " + salon.pets.length + " pets in our facility.");
    }

}


// object destructuring

let {name,phone,address:{street,number},workingHours:{days,open,close}}=salon;


document.querySelector(".info").innerHTML=`<p> ${name} <br> Phone Number: ${phone} <br> Address Information <br> ${number} ${street} <br> We are open from ${days} ${open} to ${close}`

document.querySelector("footer .info").innerHTML=`<p> ${name} <br> Phone Number: ${phone} <br> Address Information <br> ${number} ${street} <br> We are open from ${days} ${open} to ${close}`

// object constructor
var petc=0;
class Pet{
    constructor(petName,age,breed,gender,service,ownerName,phoneContact)
    {
       
        // these are parameters

        this.petName=petName;
        this.age=age;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.ownerName=ownerName;
        this.phoneContact=phoneContact;
        this.id="pet"+petc;
        petc+=1;
    }

    ownerInfo = function(){
        console.log("Owner name: " + this.ownerName + "\n" + "Contact " + this.phoneContact);
    }


}

const pet1 = new Pet("Oda Mae",2,"Boxer","Female","Bath","Lily","073-3443");
const pet2 = new Pet("Kit",2,"Shiba Inu","Female","Brush","Josh","853-7451");
const pet3 = new Pet("Marley",10,"Pitbull","Male","Nail Trim","Aaron","222-2533"); 

salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3);

displayPet(pet1);
displayPet(pet2);
displayPet(pet3);

salon.count();

var textname = document.getElementById('petName');
var textage = document.getElementById('petAge');
var textbreed = document.getElementById('petBreed');
var textgender = document.getElementById('petGender');
var textservice = document.getElementById('petService');
var textowner = document.getElementById('ownerName');
var textcontact = document.getElementById('contactPhone');

function register(){
    const thePet = new Pet(textname.value,textage.value,textbreed.value,textgender.value,textservice.value,textowner.value,textcontact.value);
    salon.pets.push(thePet);
    alert(textname.value + ' has been registered')
    clean();
    displayPet(thePet);
}

function clean(){
    textname.value="";
    textage.value="";
    textbreed.value="";
    textgender.value="";
    textservice.value="";
    textowner.value="";
    textcontact.value="";

}

function displayPet(aPet){
    var tBody = document.getElementById("rowPet");
    var row = `<tr id="${aPet.id}"> 
                <td> ${aPet.petName} </td>
                <td> ${aPet.age} </td>
                <td> ${aPet.breed} </td>
                <td> ${aPet.gender} </td>
                <td> ${aPet.service} </td>
                <td> ${aPet.ownerName} </td>
                <td> ${aPet.phoneContact} </td>
                <td>
                    <button onclick='remove("${aPet.id}");'> Delete </button></td>`;
   
    tBody.innerHTML+=row;
}

function remove(petId){
    var tr = document.getElementById(petId);
    var indexDelete;

    for(var i=0;i<salon.pets.length;i++){
    var selectedPet = salon.pets[i];

    if(selectedPet.id == petId)
    {
        indexDelete=i;
    }   
}

    salon.pets.splice(indexDelete,1);

    tr.remove();

}


function Search(){

    var ss=document.getElementById('petSearch').value;
    var searchString = ss.toLowerCase();
    
    var flag = false;
    for(var i=0; i<salon.pets.length; i++){
        var foundPet = salon.pets[i];

        if(foundPet.id.toLowerCase() == searchString || foundPet.name.toLowerCase() == searchString){
            flag=true;
            var p = document.getElementById(searchString);
            p.style.background="red";
            document.getElementById('result').innerHTML="";
        }
        if(flag==false){
            document.getElementById('result').innerHTML="<h3> Not found </h3>";
        }
        document.getElementById('petSearch').value="";
    }
}

