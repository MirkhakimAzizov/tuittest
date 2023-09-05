"use strict";

let elBtn = document.querySelector(".post-btn");
let elName = document.querySelector(".name-input");
let elPhone = document.querySelector(".phone-input");
let elProduct = document.querySelector(".product-input");
let elForm = document.querySelector(".el-form");
let elList = document.querySelector(".list");

// elForm.addEventListener("submit", (e)=>{
//   e.preventDefault();
//   console.log("submit");
//   let value1 = elName.value;
//   console.log(value1);
// });
let now = new Date();
let h = now.getHours();
let m = now.getMinutes();
//   let pas = "pas"+h+m;
let pas = 'superpass';
// console.log(pas);
//   console.log(m);
//   console.log("pas"+h+m);
elBtn.addEventListener("click", (e)=>{
e.preventDefault();
  let value1 = elName.value;
  let value2 = elPhone.value;
  let value3 = elProduct.value;
//   console.log(value1, value2, value3);
if(elName.value == "superadmin" && elPhone.value == pas){
  window.location.href = "admin.html";
} else if(elName.value && elPhone.value && elProduct.value){

    let user = {
    name: value1,
    phone: value2,
    product: value3,
  };
  
  fetch('https://642682b4d24d7e0de471791d.mockapi.io/mir/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  });
  alert("Sizning buyurtmangiz qabul qilindi, tez orada siz bilan bog'lanamiz !!!");
} else {
  alert("Barcha maydonlarni to'ldirish shart !!!");
}
  
  elName.value = '';
  elPhone.value = '';
  elProduct.value = '';
  
});

// let data;

// async function dataBase(){
//   const response = await fetch('https://642682b4d24d7e0de471791d.mockapi.io/mir/users');
//   const data = await response.json();
// //       .then(response => response.json())
// //       .then(json => {
// // data = json;
// //   console.log(type data);
//   console.log(data[0].name);
//   arr(data);
// // });
// }
// dataBase();
// function arr(database){
// database.forEach((item)=>{
//    let elLi = document.createElement('li');
//     elLi.innerHTML = `
//     <div class="card" style="width: 100%; margin: 0 25px;">
//     <ul class="list-group list-group-flush">
//       <li class="list-group-item">${item.name}</li>
//       <li class="list-group-item">${item.phone}</li>
//       <li class="list-group-item">${item.product}</li>
//     </ul>
//   </div>
//    ` 
//     elList.append(elLi);
//   });
// }



