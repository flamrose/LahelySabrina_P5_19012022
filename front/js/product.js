//Rechercher l'id dans le navigateur window
const queryString = window.location.search;
const urlSearchParams = new URLSearchParams(queryString);
let id = urlSearchParams.get("id");


fetch(`http://localhost:3000/api/products/` + id)// => On va chercher (dans l'API) le détail du canapé sélectionné.
.then((response)=> response.json())
.then((canap)=>{
    console.log(canap)
    //Ajout de l'image, créer la balise puis l'ajouter à son élément parent(div item_img).
   let image = document.createElement('img');
   image.src = `${canap.imageUrl}`
   image.alt = `${canap.altTxt}`
   document.querySelector(".item__img").appendChild(image);//déplace(app), en tant que (child), à la fin(end)

   // Ajout de la valeur dans la balise H1
   document.getElementById("title").innerHTML = canap.name;
   //Ajout du prix dans la balise span
   document.getElementById("price").innerHTML = canap.price;
   //Ajout de la description dans la balise p
   document.getElementById("description").textContent = canap.description;


   // Couleurs : création de la variable en tant que parent avec sa boucle (conditions)et ses options; Ajouter son enfant (la variable).
   let colorSelect = document.getElementById("colors");

   for (let i = 0; i < canap.colors.length; i++){
       let opt = document.createElement('option');//déclarer la variable opt
       opt.value = canap.colors[i];
       opt.innerHTML = canap.colors[i];

       colorSelect.appendChild(opt)
    }
    })

    //let button = document.getElementById("addToCart");
    document.getElementById("addToCart").addEventListener('click', (e)=>{//(type, fonction)//ici enregistrer l'article dans le localstorage
    let quantityProduct = document.getElementById('quantity');
    let colorProduct = document.getElementById('colors');
        let product = {
            id : id,
            color : colorProduct.value,//
            quantity : parseInt(quantityProduct.value) //une chaine de caractères en nombres
        }

        console.log(product)
        addBasket(product)

    // let basket = getBasket();// récupère le panier


    //  let foundProduct = basket.find(p=>p.id==product.id);//F° find cherche dans un tableau avec 1 condition
    //  if (foundProduct != undefined){
    //      foundProduct.quantity++; //ajouter
    //  }else{
    //     product.quantity = 1;
    //     basket.push(product);
    // }
    //     saveBasket(basket);//récup le nouv panier
    })

    //document.getElementById("cart__items").innerHTML = basket;
function saveBasket(basket){// 1) enregistrer (créer) un panier;nom de la fonction + paramètre(quel panier enregistré)
    localStorage.setItem("basket", JSON.stringify(basket));//clé, valeur.
}//Ds le local storage, on ne peut enregistrer que des chaines de caractères/variables=>sérialisation
//method JSON.stringify : transf données complexes en chaine de caractères

function getBasket(){// 2) récupérer un élém
    let basket = localStorage.getItem("basket");//variable
    if(basket == null){
        return[];//tableau vide ok
    }else{
        return JSON.parse(basket);
        //return JSON.parse(localStorage.getItem("basket"));//method JSON.parse transforme string en objets, tabl, données complexes.("clé")
    }
}

function addBasket(product){// 3) le panier considéré comme un tableau ok. (product{product-ID}, {product-color})
    let basket = getBasket();// récupère le panier
    let foundProduct = basket.find(p=>p.id==product.id && p.color === product.color);//F° find cherche dans un tableau avec 1 condition
    if (foundProduct != undefined){ //là il trouve le produit        
        foundProduct.quantity = foundProduct.quantity + product.quantity //ajouter
    }else{
        //product.quantity = 1;
        basket.push(product);
    }
        saveBasket(basket);//récup le nouv panier
}




/*console.log(id)
fetch(`http://localhost:3000/api/products/` + id)
 //let responseAutre = fetch(`http://localhost:3000/api/products/${id}`);
    .then((data) => data.json({}))
    .then((canap)=>console.log(canap.name))

        let colors = [i];
            for (let i = 0, i <= colors.lenght, i += 1) {
                console.log([i])
            }

}
document.querySelector(#"nbArticle").addEventListener('input', function(){
    if(this.value)

});
        let nbArticle = 0;

        consolole.log(urlParam[0])
*/


