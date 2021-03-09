
;
async () => {
    const teddiesId = getTeddiestId()
    const teddiesData = await getTeddiesData(teddiesId)
}

function getTeddiesId() {
    return new URL(window.location.href).searchParams.get('_id')
}

fetch("http://localhost:3000/api/teddies?${teddy._id}")
    .then(response => response.json())
    .then(teddies => {
        const teddiesElement = document.querySelector('#descrip')
        for (let teddy of teddies) {
        console.log(teddy)
        
           

            teddiesElement.innerHTML += 
                   `<div class="card">
        
        <div class="row">

          <img src="${teddy.imageUrl}" id="image" class="img-fluid col-6" alt="teddy_2" width="300" height="250">
          <div class="col-6">
            <h3 id="${teddy.name}"> nom ours </h3>
            <p id="${teddy.description}">detail ours</p>
            <div id="${teddy.price/100}.00€"> tarif </div>

          </div>
        </div>
        <form>
          <div class="form-row align-items-center">
            <div class="col-auto my-1">
              <label class="mr-sm-2" for="inlineFormCustomSelect">Preference</label>
              <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                <option selected>Couleurs</option>
                <option id="c1">One</option>
                <option id="c2">Two</option>
                <option id="c3">Three</option>
                <option id="c4">Four</option>

              </select>
            </div>


          </div>
        </form>`
        }

    })