"use scrict"

//FONCTION
/* declarer trois variable a = "jeans" et b = "paul" et result

declarer fonction checkName(i possede deux parametre) qui verifie si les deux noms sont identique 

console log le result

*/

let a = "jean"
let b = "paul"
let result = checkName(a,b)

function checkName(name1, name2) {
    if(name1===name2){
        return true
    }else{
        return false
    }
}
console.log(result);