
/*Rechercher l'id dans le navigateur window*/
const queryString = window.location.search;
const urlSearchParams = new URLSearchParams(queryString);
let id = urlSearchParams.get("id");



//let responseAutre = fetch(`http://localhost:3000/api/products/${id}`);

fetch(`http://localhost:3000/api/products/${id}`) // => On va chercher le detail du canapé selectionné
.then((response)=> response.json())
.then((canap)=>{
    console.log(canap)
    //Ajout de l'image, création de la balise puis ajouter à son élement parent
   let image = document.createElement('img');
   image.src = `${canap.imageUrl}`
   image.alt = `${canap.altTxt}`
   document.querySelector(".item__img").appendChild(image);

   // Ajout de la valeur dans la balise H1
   document.getElementById("title").innerHTML = canap.name;
   //Ajout du prix
   document.getElementById ("price").innerHTML = canap.price;
   //Ajout de la description
   document.getElementById("description").textContent = canap.description;


   // couleurs
   let colorSelect = document.getElementById("colors");
   
   for (let i = 0; i < canap.colors.length; i++){
       let opt = document.createElement('option');
       opt.value = canap.colors[i];
       opt.innerHTML = canap.colors[i];

       colorSelect.appendChild(opt)
    }
   

  
    })
    
document.getElementById("addToCart").addEventListener('click', (e)=>{
    //ici enregistrer l'article dans le localstorage
    console.log("houhouhohu")
})



/*console.log(id)
fetch(`http://localhost:3000/api/products/` + id)
fetch(`http://localhost:3000/api/products/${id}`)
    .then((data) => data.json({}))
    .then((canap)=>console.log(canap.name))
    .then(canap => {
        let affichage = '';
        for (let id of canap) {
            affichage += `<a href="./product.html?id=${canap._id}">
        <article>
          <img src="${canap.imageUrl}" alt="${canap.altTxt}">
          <h1 id="title">${canap.name}</h1>
          <p>Prix : <span id="price">${canap.price}</span>€</p>
          <p id="description">${canap.description}</p> 
          
          <select name="color-select" id="colors">
              <option value=""></option>

          </select>
          

        </article>
      </a>`
        }

        let colors = [i];
            for (let i = 0, i <= colors.lenght, i += 1) {
                console.log([i])
            }
            default
}
document.querySelector(#"nbArticle").addEventListener('input', function(){
    if(this.value)

});
        let nbArticle = 0;
        
        consolole.log(urlParam[0])

console.log(id)
fetch(`http://localhost:3000/api/products/`+id)*/
