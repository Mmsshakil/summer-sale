function productValue(price) {
    console.log(price);

    // call the total price without discount
  
    totalPriceMain(price);



}


function totalPriceMain(price){
    const totalPrice = document.getElementById('totalPrice');
    const totalPriceString = totalPrice.innerText;
    const totalPriceValue = parseFloat(totalPriceString);
    // console.log(totalPriceValue);

    const finalTotal = price + totalPriceValue;
    // console.log(finalTotal);

    totalPrice.innerText = finalTotal;


}

