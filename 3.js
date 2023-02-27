"use strict";


const arr3= []
for (let i = 0; i < 5; i++) {
    arr3[i] = Math.floor(Math.random() * 10);

}
console.log(arr3);

let sum = 0;
    arr3.forEach(
        arr3 => sum = sum + arr3
    )
    console.log(`Сумма - ${sum}`);

const min = arr3 => arr3.reduce((x, y) => Math.min(x, y));
console.log("Min:", min(arr3));

function searchFor3(arr3 , num) {
    for (let i = 0; i < array.length; i++) {
        if(arr3[i] === num){
            return true;
        }  
    }
    return false;
}
console.log(searchFor3(arr3 , 3))
