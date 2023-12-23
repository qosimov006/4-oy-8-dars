//1-misol
//Savol : Massiv ichida berilgan qiymat qidiradigan
// agar mavjud bo'lsa uning undeksiyasining kvadrati
// aks holda majud emas degan yozuvi qautaruvchi funksiya yozing. (indexOF)

//Javob :

/*
function indeksiQidir(vaqtinchaMassiv, qidirilayotganQiymat) {
    let indeks = vaqtinchaMassiv.indexOf(qidirilayotganQiymat);

        if (indeks !== -1) {
            return indeks * indeks;
        } else {
            return "Mavjud emas";
        }
}

let massiv = [1, 2, 3, 4, 5];
let qidirilayotganQiymat = 3;

let natija = indeksiQidir(massiv, qidirilayotganQiymat);
console.log(natija);
*/







//2-misol
//Savol : 3 ta massivni birlashtiradigan, birinchi massivni oxirga ikkinchishi boshiga 
//va uchinchishini o'rtasiga qaytarib bereadigan funksiya yozing. (concat)

//Javob
/*
function biriktish(Son1, Son2, Son3) {
    return Son1.concat(Son3, Son2);
}

let Son1 = [1, 2, 3];
let Son2 = [4, 5, 6];
let Son33 = [7, 8, 9];

let natija = biriktish(Son1, Son2, Son3);
console.log(natija);
*/



//3-miosl
//Savol : Sonlardan tashkil topgan massivning ichida shartga mosh 
//dastlabki elementning kvadratni qaytaruvchi  funksiya yozing. (find) 

//Javob

/*
function kvadratniTop(massiv) {
    let natija = massiv.find(function(element) {
        return element % 2 === 0; 
    });

    if (natija !== undefined) {
        return natija * natija;
    } else {
        return "Bunday element mavjud emas";
    }
}

let massiv = [1, 3, 5, 2, 7, 8];

let natija = kvadratniTop(massiv);
console.log(natija);

*/


//4-misol
//Savol :  Sonlardan tashkil topgan massiv elementlari orasidan
// toqlarining sonini topuvchi funksiya yozing (forEach)

//Javob :
/*
function toqSon(massiv) {
    let toqlarSoni = 0;

    massiv.forEach(function(element) {
        if (element % 2 !== 0) {
            toqlarSoni++;
        }
    });

    return toqlarSoni;
}


let massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let natija = toqSon(massiv);
console.log(natija);
*/



//5-misol
//Savol : Sonlardan tashkil topgan massiv oxirgi harflaridan 
//iborat yangi massiv hosil qiladiga funksiya yozing (forEach)
//Javob:
/*
function MassivHarf(massiv) {
    let Massiv = [];

    massiv.forEach(function(element) {
        let uzunlik = element.length;
        if (uzunlik > 0) {
            let oxirgiHarf = element.charAt(uzunlik - 1);
            Massiv.push(oxirgiHarf);
        }
    });

    return Massiv;
}


let massiv = ["apple", "banana", "cherry"];

let natija = MassivHarf(massiv);
console.log(natija);
*/




//6-misol
//Savol : Sonlardan tashkil topgan massiv elementlari orasidan 
//tublarini yig'indisini topuvchi funksiya yozing (for..of)
//Javob :
