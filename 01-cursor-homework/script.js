"use strict"

const apple = 15.568;
const mango = 123.965;
const pineapple = 90.2345;

// calculating max and min of variables and sum of them
const maxPrice = Math.max(apple, mango, pineapple);
const minPrice = Math.min(apple, mango, pineapple);
console.log(maxPrice, minPrice);

const productSum = apple + mango + pineapple;
console.log(productSum);

// calculating the whole part of a value
const appleRounded = Math.floor(apple);
const mangoRounded = Math.floor(mango); 
const pineappleRounded = Math.floor(pineapple);


// value rounded to the nearest hundred
const productSumRounded = appleRounded + mangoRounded + pineappleRounded;
console.log(productSumRounded);

console.log(Math.round(productSumRounded / 100) * 100);

// check whether value is even or odd
function evenOrOdd() {
if(productSumRounded % 2 === 0) {
    return true
}
else return false
}

console.log(evenOrOdd());

// calculating the rest
const moneyIf500 = 500 - productSum
console.log(moneyIf500);

// round number to 2 digit after comma
let averagePriceRounded = (productSum / 3).toFixed(2);
console.log(averagePriceRounded);


/////////////////////
////////////////////
//// DISCOUNTS ARE FROM 10 TO 90 PERCENT

// total sum with random discount
const randomDiscount = Math.round(Math.random() * (90 - 10) + 10);
const randomDiscountPrice = productSum - (productSum * randomDiscount / 100);

// round price to 2 digit after comma
console.log(randomDiscountPrice.toFixed(2));


const goodsCost = productSum  / 2;
const netProfit = goodsCost - (productSum * randomDiscount / 100);

console.log(`Net profit: ${netProfit}`);



 /////////////////////////
 /////////////////////////
 /////////// ADVANCED SECTION

 const summary = `Максимальна ціна - ${maxPrice};
 Мінімальна ціна - ${minPrice};
 Вартість всіх товарів - ${productSum};
 Вартість кожного товару (округлено в меншу сторону): 
 Яблука - ${appleRounded};
 Манго - ${mangoRounded};
 Ананас - ${pineappleRounded};
 Вартість всіх товарів округлена до сотень - ${Math.round(productSumRounded / 100) * 100};
 Число парне чи непарне - ${evenOrOdd()};
 Решта, якщо покупець має 500 грн - ${moneyIf500};
 Середня ціна (округлено) - ${averagePriceRounded}
 Знижка ${randomDiscount}%;
 Сума зі знижкою (округлено) ${randomDiscountPrice.toFixed(2)};
 Собівартість ${goodsCost};
 Чистий прибуток ${netProfit};
 `

 console.log(summary);

