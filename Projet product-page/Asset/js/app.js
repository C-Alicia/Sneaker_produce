// //
let comptpan = document.querySelector('.compt_pan');
let cartvide = document.querySelector('.cart_vide');
let compteurq = document.querySelector('.compteurq');

// partie dans la cart calcul des produits//

let firstnb = document.querySelector('.priced');
let resultat = document.querySelector('.resultat');
let checkout = document.querySelector('.btn-orange');
let numbercart = document.querySelector('.nbq');
let numberone = document.querySelector('.firstnumber');
let corbeille = document.querySelector('.delete');

// Menu burger //

let menubt = document.querySelector('#menu');
let closebtn = document.querySelector('#close_mobile');
let navlinkm = document.querySelector('.nav-links_mobile');
let mobilenav = document.querySelector('.mobile_navbar');


menubt.addEventListener('click', navopen)

function navopen() {

    mobilenav.style.display = "block"

    console.log(mobilenav)
}


closebtn.addEventListener('click', navclose)
function navclose() {

    mobilenav.style.display = 'none';

}



let basket = document.querySelector(".basket");
let btnadd = document.querySelector(".btn-orangeadd");
let cartpleine = document.querySelector(".cart_rempli");
let quantiteproduit = document.querySelector('.nbq');

// Ajouter un évenement avec  //

btnadd.addEventListener('click', getadd)

function getadd() {

    comptpan.innerText = compteurq.innerText;
    if (compteurq.innerText > 0) {
        comptpan.style.display = 'block';
    } else {
        comptpan.style.display = 'none';
    }

    if (compteurq.innerText > 0) {
        cartpleine.style.display = 'block';
    } else {
        cartpleine.style.display = 'none';
    }

    if (compteurq.innerText > 0) {
        quantiteproduit.innerText = compteurq.innerText;
    }

    let nb1 = parseFloat(firstnb.innerText);
    let quantite = parseInt(numbercart.innerText);
    let prixtotal = parseInt(resultat.innerText);

    if (prixtotal = nb1 * quantite) {
        resultat.innerText = prixtotal

        numberone.innerText = nb1

    }

    console.log(prixtotal = nb1 * quantite)


}

//Reiniatiliser le panier//
corbeille.addEventListener('click', Getreset)

function Getreset() {

    numberone.innerText = 0;
    compteurq.innerText = 0;
    comptpan.innerText = 0;
    numbercart.innerText = 0;
    resultat.innerText = 0;

}

// Afficher mes carts avec le panier haut //

basket.addEventListener('click', Cartafficher)

function Cartafficher() {

    if (comptpan.innerText > 0) {

        cartsrempli()
    }

    else {
        cartsvide()
    }

    function cartsrempli() {

        if (cartpleine.style.display == "block") {
            cartpleine.style.display = "none";
        } else {
            cartpleine.style.display = "block";
        }
    }

    function cartsvide() {

        if (cartvide.style.display == "block") {
            cartvide.style.display = "none";
        } else {
            cartvide.style.display = "block";
        }
    }
}


// Ajouter ou diminuer la quantité d'article //

let dimin = document.querySelector('.diminuer');
let augm = document.querySelector('.augmenter');

augm.addEventListener('click', ajouter)

function ajouter() {

    compteurq.innerHTML++;

}

dimin.addEventListener('click', diminuer)

function diminuer() {

    compteurq.innerHTML--;


    if (
        compteurq.innerHTML < 0) {
        compteurq.innerHTML = 0;
    }
}


// CAROUSEL DE PLUSIEURS ELEMENTS//

// PARTIE  DESKTOP//

let btncroix = document.querySelector('.croix');
let nextdesk = document.querySelector('.arrowleft');
let predesk = document.querySelector('.arrowright');
let cardzoom = document.querySelector('.zoomprod');
let big = document.querySelector('.big_image');
let flechegauche = document.querySelector('.arleft');
let flechedroite = document.querySelector('.aright');

nextdesk.addEventListener('click', Slidedesknext)

function Slidedesknext() {
    flechegauche.style.background = 'orange';
    let imageact = document.querySelector('.active');
    imageact.classList.remove('active');

    if (imageact.nextElementSibling) {
        imageact.nextElementSibling.classList.add('active');
    }

    else {
        imageact.parentElement.firstElementChild.classList.add('active')
    }
}

predesk.addEventListener('click', Slidedeskprevious)

function Slidedeskprevious() {

    flechedroite.style.background = 'orange';
    let imageact = document.querySelector('.active');

    imageact.classList.remove('active');

    if (imageact.previousElementSibling) {
        imageact.previousElementSibling.classList.add('active');
    }

    else {
        imageact.parentElement.lastElementChild.classList.add('active')
    }
    return
}

big.addEventListener('click', getlight)
function getlight() {
    cardzoom.style.display = 'block';
}

btncroix.addEventListener('click', produitclose)

function produitclose() {
    btncroix.style.background = 'orange';
    cardzoom.style.display = 'none';

}





















//AFFICHER LES IMAGES PETITE A LA PLACE DE LA GRANDE//

let imagethumb = document.querySelectorAll('.thumbnail');
let activeimg = document.querySelector('.big_image');
let Thumbs = document.querySelectorAll('.thumbnail_img');


Thumbs.forEach(function (thumbnail) {

    thumbnail.addEventListener('click', changeimage)

});

function changeimage() {

    activeimg.src = this.src.replace('-thumbnail', '')

}


//Partie mobile//
let nextmobile = document.querySelector('.left_arrow')
let Prevmobile = document.querySelector('.right_arrow')


nextmobile.addEventListener('click', Slidedesknext)

function Slidedesknext() {
    flechegauche.style.background = 'orange';
    let imageact = document.querySelector('.active');
    imageact.classList.remove('active');

    if (imageact.nextElementSibling) {
        imageact.nextElementSibling.classList.add('active');
    }

    else {
        imageact.parentElement.firstElementChild.classList.add('active')
    }
}

Prevmobile.addEventListener('click', Slidedeskprevious)

function Slidedeskprevious() {

    let imageact = document.querySelector('.active');

    imageact.classList.remove('active');

    if (imageact.previousElementSibling) {
        imageact.previousElementSibling.classList.add('active');
    }

    else {
        imageact.parentElement.lastElementChild.classList.add('active')
    }
    return
}







