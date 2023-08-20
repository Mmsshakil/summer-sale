
let total = 0;

function productCard(target) {
    // console.log(target.childNodes[5].childNodes[1].innerText);
    const itemName = target.childNodes[5].childNodes[1].innerText;
    // console.log(target.childNodes[5].childNodes[3].innerText.split(' ')[0]);
    const itemValue = target.childNodes[5].childNodes[3].innerText.split(' ')[0];
    // console.log(itemName, itemValue);



    // create a li in element part
    const li = document.createElement('li');


    // append or set the item in element part
    const iteamUpdate = document.getElementById('createElement');
    const liCount = iteamUpdate.childElementCount + 1;
    li.innerText = liCount + ". " + itemName + " " + itemValue;


    console.log(liCount);
    iteamUpdate.appendChild(li);

    // console.log(total , itemValue);
    total = parseFloat(total) + parseFloat(itemValue);
    // console.log(total);

    // set the total value as text in total 
    document.getElementById('totalPrice').innerText = total;

}

// const totalPrice = productCard();
// console.log(totalPrice);



