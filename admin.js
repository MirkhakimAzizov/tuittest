// let elList = document.querySelector('.list');
async function Data(){
    let res = await fetch('https://642682b4d24d7e0de471791d.mockapi.io/mir/users');
    let data = await res.json();
//     console.log(data, 200);
    return data;
}
Data();

async function renderUi(){
    let arr = await Data();
    arr.forEach(item=>{
        let elLi = document.createElement('li');
        elLi.setAttribute('class', 'card my-3 py-2 px-4 bg-secondary position-relative');
        let elBtn = document.createElement('button');
            elBtn.setAttribute('data-id', `${item.id}`);
            if(item.st){
               elBtn.setAttribute('class', 'my-1 btn st btn-primary');
               elBtn.innerHTML = 'Bajarildi';
            } else {
                elBtn.setAttribute('class', 'my-1 st btn btn-danger');
                elBtn.innerHTML = 'Bajarilmadi';
            }
        elLi.innerHTML = `
            <li class="list-group-item text-primary">Name: ${item.name}</li>
            <li class="list-group-item">Phone: ${item.phone}</li>
            <li class="list-group-item">Manzil: ${item.product}</li>
            <span class="position-absolute" style="top: 5px; right: 5px;">ID: ${item.id}</span>
        `
        elLi.append(elBtn);
        elList.append(elLi);
    });
        let elLi = document.createElement('li');
        elLi.setAttribute('class', 'card my-3 py-2 px-4 bg-secondary');
        elLi.innerHTML = `Jami buyutmalar soni: ${arr.length}`
        elList.append(elLi);
}
renderUi();
elList.addEventListener("click", e=>{
    if(e.target.matches(".st")){
        let id = e.target.dataset.id;
//         console.log(id);
        fetch(`https://642682b4d24d7e0de471791d.mockapi.io/mir/users/${id}`, {
            method: 'DELETE',
        }).then(res => {
            if (res.ok) {
            return res.json();
            }
        // handle error
            })
         }
})
