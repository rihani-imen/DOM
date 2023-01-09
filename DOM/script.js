//toltal
var total = document.getElementById("total");
console.log(total);

// bouton plus
let bttplus = document.getElementsByClassName("button_plus");
for (let btn of bttplus) {
  btn.addEventListener("click", function () {
    /// name
    let nom_prod = btn.getAttribute("name");
    //console.log(nom_prod);

    ///prix
    let prix = document.getElementById(nom_prod + "_prix").innerHTML;
    //console.log(prix);

    ///quantité
    let quant = document.getElementById(nom_prod + "_quantitie");
    // console.log(quant);
    quant.innerHTML++;

    ///changer le total
    total.innerHTML = parseInt(total.innerHTML) + parseInt(prix);
  });
}

// bouton moin
let bttmoin = document.getElementsByClassName("button_moin");
for (let btn_m of bttmoin) {
  btn_m.addEventListener("click", function () {
    /// name
    let nom_prod = btn_m.getAttribute("name");
    //console.log(nom_prod);

    ///prix
    let prix = document.getElementById(nom_prod + "_prix").innerHTML;
    //console.log(prix);

    ///quantité
    let quant = document.getElementById(nom_prod + "_quantitie");
    if (quant.innerHTML > 0) {
      // console.log(quant);
      quant.innerHTML--;

      ///changer le total
      total.innerHTML = parseInt(total.innerHTML) - parseInt(prix);
    } else {
      alert("la quantité doit etre pausitif");
    }
  });
}

/// coeur
var coeurs = document.querySelectorAll(".hart");
console.log(coeurs);
for (let coeur of coeurs) {
  coeur.addEventListener("click", function () {
    if (coeur.getAttribute("fill") == "grey") {
      coeur.setAttribute("fill", "red");
    } else {
      coeur.setAttribute("fill", "grey");
    }
  });
}

///delete
//let sups = document.querySelectorAll(".button_delite");
let sups = document.getElementsByClassName("button_delite");
console.log(sups);
for (let sup of sups) {
  sup.addEventListener("click", function () {
    let nom_bts = sup.getAttribute("name");
    let noeud = document.getElementById(nom_bts);
    console.log(noeud);
    noeud.parentNode.removeChild(noeud);
  });
}
