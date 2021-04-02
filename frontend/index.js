fetch("http://localhost:3000/api/teddies")
    .then(response => response.json())
    .then(teddies => {
        const teddiesElement = document.querySelector('#teddies')
        for (let teddy of teddies) {
            console.log(teddy.price)
            teddiesElement.innerHTML += `
                <div id="" class="card col-6-lg bg-light gap-4 p-3 mb-3 col-lg-4 ">
                    <div class="bloc_ours ">
                        <a href="#" class="text-decoration-none text-dark "></a>
                             <img src="${teddy.imageUrl}" width="390" height="250" />
                            <div class="descri">
                                <div class="description">
                                </div>
                                   <h3><a href="produits.html?given_id=${teddy._id}"> ${teddy.name}</a> </h3>
                                   <p>${teddy.description}</p>
                                </div>
                                <div class="prix">
                                   <strong>${teddy.price/100}.00€</strong>
                                </div>                             
                            </div>                           
                        </a>
                    </div>
                </div>`
        }
    })