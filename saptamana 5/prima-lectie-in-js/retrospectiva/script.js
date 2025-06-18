// Exercitiu 1
// a) sa se creeze o variabila care contine 
let productName = "Diverse";
let productQuantity = 5;
let productPricePerUnit = 2;
let productTotalPrice = (productQuantity * productPricePerUnit);

if (productQuantity === 0) { 
    console.log(`Selecteaza minim o cantitate din produsul ${productName}`)
} 
else { 
    console.log(`Comanda poate fi plasata. Ai comandat ${productQuantity} unitati din produsul ${productName}, iar totalul este de ${productTotalPrice} lei.`)
}

    // Operatori logici
    // Definitie: sunt folositi pt a face operatii logice cu valori. Cel mai des vor fi valori booleene.

    // && (AND)
    // il punem intre conditii care vrem sa fie ideplinite simultan.
    
    // || (OR) - va returna true dc cel putin un operand este true, va returna false dc toti operanzii sunt false.

    // Exercitiul 2
    let isAdmin = false;
    let hasProPlan = true;

    if (isAdmin === true || hasProPlan === true) {
        console.log("acces granted");
    } else {
        console.log("acces denies");
    }

    // Exercitiul 3 - de verificat
    let isRaining = false;
    let chansesToRain = 70; 

    if (isRaining = true || chansesToRain <= 70) 
        {
        console.log("you should take an umbrela");
    } else {
        console.log("you may not need an umbrella");
    }

    // Exercitiul 4
    // lunes, martes, miercoles, jueves, viermes, sabado, domingo
    
    // "coffe-shop is open - L - V, 9-18
    // "coffe-shop is closed" - S - D
    let dia = "martes";
    let program = 9-18;
   if ( (dia === "lunes" || dia === "martes" || dia === "miercoles" || dia === "jueves" || dia === "viermes") && dia === program ) {
        console.log("coffe-shop is open");
    } else {
        console.log("coffe-shop is closed");
    }

    // if (dia !== sabado && dia !== domningo) {
    //      console.log("coffe-shop is open");
    // } else {
    //     console.log("coffe-shop is closed");
    // }

    // Exercitiul 5
    let spentAmount = 200;
    let isMember = false;

    if (spentAmount > 200 && isMember === true) {
        console.log("you get a free gift");
    } else {
        console.log("join the loyality program to earn a gift");
    }

    // Exercitiul 6
        let password = "fortzasteaoa";
        
        if (password.length === 0) {
            console.log("This field is requiered");
        } else {
            console.log("This password must contain at leat 8 characters");
        }



    