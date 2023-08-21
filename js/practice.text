function productValue(price) {
    // console.log(price);

    // call the total price without discount

    totalPriceMain(price);



}


function totalPriceMain(price) {
    const totalPrice = document.getElementById('totalPrice');
    const totalPriceString = totalPrice.innerText;
    const totalPriceValue = parseFloat(totalPriceString);
    // console.log(totalPriceValue);

    const finalTotal = price + totalPriceValue;
    // console.log(finalTotal);

    totalPrice.innerText = finalTotal;

    if (finalTotal > 0) {
        console.log('Enabled');
        document.getElementById("purchaseButton").disabled = false;
    }

    if (finalTotal >= 200) {

        document.getElementById("cuponButton").disabled = false;

        // take the value from cupon
        document.getElementById('cuponButton').addEventListener('click',function(){
            const cuponInput = document.getElementById('cupon');
            const cuponValue = cuponInput.value;
            // console.log(cuponValue);
          

            if(cuponValue === 'SELL200'){
                const discount = 20 * finalTotal / 100;
                console.log('discount', discount);

                // call the discount default amount
                const discountAmount = document.getElementById('discountAmount');
                
                
                // set the discount value
                discountAmount.innerText = discount; 

            }
            else{
                console.log("invalid");
            }
                

            // call the total value
            const finalTotalValue = document.getElementById('finalTotal');

            console.log(finalTotalValue);
            
        })
        

    }


}

