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
    let foundProduct = basket.find(p=>p.id==product.id);//F° find cherche dans un tableau avec 1 condition
    if (foundProduct != undefined){
        foundProduct.quantity++; //ajouter
    }else{
        product.quantity = 1;
        basket.push(product);
    }
        saveBasket(basket);//récup le nouv panier
}
//Retirer un élément (html l.67)
function removeFromBasket(product){//suppr
    let basket = getBasket();//le panier
    basket = basket.filter(p=>p.id!= product.id);//F° filter travaille sur un tableau; produit dans le panier#produit à ajouter
    saveBasket(basket); 
}
//Changer la quantité (html l.64)
function changeQuantity(product, quantity){
    let basket = getBasket();
    let foundProduct = basket.find(p=>p.id==product.id);
    if(foundProduct != undefined){
        foundProduct.quantity+=quantity;//produit trouvé, ajouter. Sinon rien
        if(foundProduct.quantity<=0){
            removeFromBasket(foundProduct);
        }else{
            saveBasket(basket);//enregistrer que si
        }
    }
}
//Calculer le total des produits
function getNumberProduct(){
    let basket = getBasket();
    let number = 0;
    for (let product of basket){
        number += product.quantity;
    }
    return number;
}
//Calculer le prix total (html: l.74)
function getTotalPrice(){
    let basket = getBasket();
    let total = 0;
    for (let product of basket){
        total += product.quantity * product.price;
    }
    return total;
}

   
    

