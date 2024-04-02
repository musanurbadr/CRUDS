/////Get total
///////Create
//////seve localstorgo 
////clear  input 
//read
//count 
////delete
///////updet
////seacth
//clean alrt

let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total= document.getElementById('total');
let count = document.getElementById('count');
let cangerty = document.getElementById('cangerty');
let submit = document.getElementById('submit');



////GET total
function getTotal()
{
    if(price.value != ''){
        let result = (+price.value + +taxes.value + +ads.value)
        - +discount.value;
        total.innerHTML = result;
        total.style.background = '#040';
    }else{
        total.innerHTML = '' ;
        total.style.background = '#a00d02'
    }
}


////create produt 
let datapro = [];

submit.onclick = function (){
    let newPro = {
        title:title.value,
        price:price.value, 
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.value,
        cangerty:cangerty.value
    }
    console.log(newPro)
}