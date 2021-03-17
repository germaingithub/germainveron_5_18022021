 
const basket = () =>{
    const retrieved = JSON.parse(localStorage.getItem("Prod"));
    let contenu = document.getElementById('panier');
    let nameStorage = localStorage.getItem('Prod');

    if (nameStorage == null) {
        contenu.innerHTML = "votre panier est vide";
    }else{
    contenu.innerHTML =  ` 
      <tr class="border bg-white">
                <th class="py-2"></th>
                <th>${nameStorage}</th>
                <th></th>
                <th>Total</th>
              </tr>
    `;
    console.log()
}
};


basket();
console.log(namestorage)