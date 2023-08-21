
let total = 0;

function productCard(target) {
    // console.log(target.childNodes[5].childNodes[1].innerText);
    const itemName = target.childNodes[5].childNodes[1].innerText;
    const itemValue = target.childNodes[5].childNodes[3].innerText.split(' ')[0];
    // console.log(itemName, itemValue);
    // console.log(target.childNodes[5].childNodes);




    // create a li in element part
    const li = document.createElement('li');


    // append or set the item in element part
    const iteamUpdate = document.getElementById('createElement');
    const liCount = iteamUpdate.childElementCount + 1;
    li.innerText = liCount + ". " + itemName + " " + itemValue;


    // console.log(liCount);
    iteamUpdate.appendChild(li);

    // console.log(total , itemValue);
    total = parseFloat(total) + parseFloat(itemValue);
    // console.log(total);

    // set the total value as text in total 
    document.getElementById('totalPrice').innerText = total;

    //------ final total -----------
    const finalTotal = document.getElementById('finalTotal');
    finalTotal.innerText = total;
    //  console.log(finalTotalValue);
    // --------------------------


    //-------purchase button enabled--------- 
    if (total > 0) {
        document.getElementById("purchaseButton").disabled = false;

    }

    // alert part 
    

    // -------- discount part ----------

    if (total >= 200) {
        document.getElementById("cuponButton").disabled = false;
        document.getElementById('cuponButton').addEventListener('click', function () {
            const cupon = document.getElementById('cupon');
            const cuponText = cupon.value;


            if (cuponText == 'SELL200') {
                const discountValue = 20 * total / 100;

                // set the discount value
                const discountText = document.getElementById('discountAmount');
                discountText.innerText = discountValue;

                // price after the discount
                const priceAfterDiscount = total - discountValue;
                finalTotal.innerText = priceAfterDiscount;

            }
            
            else{
                return;
                
            }
           
         
        })

    }




}

// const totalPrice = productCard();
// console.log(totalPrice);



