fetch('http://localhost:3000/api/products')
.then (Response => Response.json())
//.then (data => console.log(data))
.then (canapes => {
    let affichage = '';
    for (let canap of canapes){
        //Gabarits délimités par des accents graves (permet d'utiliser la fonctionnalité d'interpolation). L'attr href parametré par id de chaque canap
        affichage += `<a href="./product.html?id=${canap._id}">
        <article>
          <img src="${canap.imageUrl}" alt="${canap.altTxt}">
          <h3 class="productName"${canap.name}</h3>
          <p class="productDescription">${canap.description}</p>
        </article>
      </a>`
    }
    //affichage += '';
document.querySelector('#items').innerHTML = affichage;
})
.catch (err => console.log ('erreur:'+err));