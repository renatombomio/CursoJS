let url = "https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Arsenal"
let urlSpain ="https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain"
let contenedorCartas = document.querySelector('.card-group')

/* <div class="card">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
    </div>*/ 



fetch(urlSpain)
.then(
   (result) => result.json(),
    (err) => console.log(err)
)
.then (
(data) => {
    let equipos = data.teams;
    equipos.forEach(element => {

        //agregarla al nodo

        let descripcion = element.strDescriptionES;
        if(descripcion == null){
            descripcion = "No disponible;"
        }
    
        contenedorCartas= 
            contenedorCartas.innerHTML + 
             ` <div class="card">
        <img src=" ${element.strTeamBadge }" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element.strAlternate}</h5>
          <p class="card-text">${element.strDescriptionES}</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
        </div>`;
        
        console.log(element.strAlternate);
        console.log(element.strTeamBadge);
        console.log(element.strDescriptionES);
    });
},
(err) => {
    console.log("Error en el paso a json");
}
)
.catch ((err) => console.log("Error general"));