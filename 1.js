"use strict";


const array =[0, 1, 2 ,3 , 4, 5, 6, 7, 8, 9, 10 ];
console.log(array[0]+ " - это ноль")
for (let i = 1; i < array.length; i++) {
    if (array[i] %2 === 0) {
        console.log (array[i]+ " - Четное число");
    } else
        console.log (array[i] +"- Нечетное число" );  
}
