/////Get total
///////Create
//////seve localstorgo 
////clear  input 
//read
//count 
////delete
///////updet
////search
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
let mood = 'creat';
let tmp ;

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

let dataPro ;
if(localStorage.product != null){
    dataPro= JSON.parse(localStorage.product)
}else{
    dataPro = [];
}
////create produt 
//   
submit.onclick = function (){
    let newPro = {
        title:title.value.toLowerCase(),
        price:price.value, 
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.value,
        count:count.value,
        cangerty:cangerty.value.toLowerCase(),
    }
    if(title.value = '' && price.value != '' && cangerty.value != '' && newPro.count < 100 ){
    if(mood === 'create'){
    if (newPro.count > 1){
        for (let i = 0 ; i < newPro.count;i++){
            dataPro.push(newPro);
        }
    }else{
        dataPro.push(newPro);
    }}else{
        dataPro[ tmp]= dataPro;
        mood = "create";
        submit.innerHTML =" Create "
        count.style.display = 'block';
        
    }
    clearDate()
    }
    /////save localstoge
    localStorage.setItem('product' , JSON.stringify(dataPro))

    showData()
}
//clear input 
function clearDate() {
    title.value = '' ;
    price.value = ''  ;
    taxes.value = '';
    ads.value = '';
    total.value = '';
    count.valuea = '';
    cangerty.value = ' '; 
}

//Read 
function showData(){
    getTotal();
    let table = "";
    for (let i = 0 ; i < dataPro.length ; i++){
        table += `
        <tr>
            <td>${i+1}</td>
            <td>${dataPro[i].title}</td>
            <td>${dataPro[i].price}</td>
            <td>${dataPro[i].taxes}</td>
            <td>${dataPro[i].ads}</td>
            <td>${dataPro[i].discount}</td>
            <td>${dataPro[i].total}</td>
            <td>${dataPro[i].cangerty}</td>      
            <td><button onclick = "updateData(${i})" id="update">update</button></td>
            <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
        </tr>
        `        
        }
    document.getElementById ('tbody').innerHTML = table;
    let btnDalete= document.getElementById("deleteAll"); 
    if(dataPro.length > 0 ){
        btnDalete.innerHTML = `
        <button onclick="deleteAll()">delete All(${dataPro.length})</button>
        `
    }else{
        btnDalete.innerHTML = '' ;

    }

}
showData()


///delet 
function deleteData(i){
    dataPro.splice(i,1);
    localStorage.product = JSON.stringify(dataPro);
        showData()
    }
function deleteAll(){
    localStorage.clear()
    dataPro.splice(0)
    showData()

}

////count 

//Updet
function updateData(i){
    title.value = dataPro[i].title;
    price.value = dataPro[i].price;
    taxes.value = dataPro[i].taxes;
    ads.value = dataPro[i].ads;
    total.value = dataPro[i].total;
    count.valuea = dataPro[i].count;
    getTotal()
    count.style.display = 'none';
    cangerty.value = dataPro[i].cangerty;
    submit.innerHTML = 'Update';
    mood = 'Update'
    tmp = i ;
    scroll ({
        top : 0 ,
        behavior: 'smooth',
    })
}

let searchMood = 'title';
function getSearchMood (id){
    let search = document.getElementById('search');
    if (id == 'serchTitle'){
        searchMood = 'title';
        search.placeholder = 'Search By Title';
    }else{
        searchMood = 'cangerty';
        search.placeholder = 'Search By Category';

    }
    search.placeholder = 'Search By '+ searchMood;
    search.focus( )
    search.value = '';
}

function searchDate (value){
    console.log(value)
    let table = ''
    if (searchMood == 'title'){
        for (let i = 0 ; i < dataPro.length ; i++){
            if (dataPro[i].title.includes(value.toLowerCase())){
                table += `
                <tr>
                    <td>${i}</td>
                    <td>${dataPro[i].title}</td>
                    <td>${dataPro[i].price}</td>
                    <td>${dataPro[i].taxes}</td>
                    <td>${dataPro[i].ads}</td>
                    <td>${dataPro[i].discount}</td>
                    <td>${dataPro[i].total}</td>
                    <td>${dataPro[i].cangerty}</td>      
                    <td><button onclick = "updateData(${i})" id="update">update</button></td>
                    <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                </tr>
                `
            }
        }
    }else{
        for (let i = 0 ; i < dataPro.length ; i++){
            if (dataPro[i].cangerty.includes(value)){
                table += `
                <tr>
                    <td>${i}</td>
                    <td>${dataPro[i].title}</td>
                    <td>${dataPro[i].price}</td>
                    <td>${dataPro[i].taxes}</td>
                    <td>${dataPro[i].ads}</td>
                    <td>${dataPro[i].discount}</td>
                    <td>${dataPro[i].total}</td>
                    <td>${dataPro[i].cangerty}</td>      
                    <td><button onclick = "updateData(${i})" id="update">update</button></td>
                    <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                </tr>
                `
            }
        }
    }
    document.getElementById ('tbody').innerHTML = table;
}