// get // 
const url = "https://reqres.in/api/users";
const p = document.getElementById("p");
fetch(url)
.then(function(res) {
  if (res.ok) {
    return res.json();
  }
})
.then(function(value) {
  
    for (let i = 0; i < value.data.length; i++) {
        var card = `             
        <div class="card m-5" style="width:20rem;">
            <img src="${value.data[i].avatar}" class="card-img-top" alt="...">
            <div class="card-body">
            <p class="card-text">${value.data[i].first_name} - ${value.data[i].last_name}</p>
            <p class="card-text">${value.data[i].email}</p>
                <div class="row ">
                    <button id="#" type="button" class="btn btn-dark col-4 mx-auto btn-sm">Modifier</button>
                    <button id="#" type="button" class="btn btn-primary col-4 mx-auto btn-sm">Supprimer</button>

                </div>
            </div>
        </div>     
       `;
        p.insertAdjacentHTML('afterbegin', card) 
    }
})

.catch(function(err) {
  // Une erreur est survenue
});