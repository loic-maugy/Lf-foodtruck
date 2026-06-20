/* ==========================================================================
   LF FOODTRUCK — logique du site
   ========================================================================== */

/* ---------- Données du menu --------------------------------------------- */
// Chaque plat peut exister en option "vegan" (steak végétal) pour les burgers.
const MENU = {
  salades: {
    titre: "Salades",
    note: "",
    plats: [
      { id:"sal-caesar", nom:"Caesar", prix:8.00, desc:"Salade romaine, tomates, émincé de poulet rôti, croutons, copeaux de grana, sauce caesar", photo:"https://images.unsplash.com/photo-1550304943-4f24f54ddde9?fm=jpg&q=80&w=1200&fit=crop" }
    ]
  },
  paninis: {
    titre: "Paninis",
    note: "",
    plats: [
      { id:"pan-trad", nom:"Traditionnel", prix:4.00, desc:"Sauce pesto maison, tomate, mozzarella", photo:"https://images.unsplash.com/photo-1636115502138-4b0340faf53f?fm=jpg&q=80&w=1200&fit=crop" },
      { id:"pan-romana", nom:"Romana", prix:4.50, desc:"Sauce pesto maison, tomate, jambon blanc, mozzarella", photo:"https://images.unsplash.com/photo-1481070414801-51fd732d7184?fm=jpg&q=80&w=1200&fit=crop" },
      { id:"pan-serrano", nom:"Serrano", prix:5.00, desc:"Pain sésame, sauce pesto maison, tomate, jambon serrano, mozzarella", photo:"https://images.unsplash.com/photo-1639667911189-700bd2029f5b?fm=jpg&q=80&w=1200&fit=crop" },
      { id:"pan-indien", nom:"Indien", prix:5.50, desc:"Pain ciabatta, mayonnaise au curry, tomate, poulet, mozzarella", photo:"https://images.unsplash.com/photo-1650921220338-f970ce97f884?fm=jpg&q=80&w=1200&fit=crop" },
      { id:"pan-4from", nom:"4 Fromages", prix:5.50, desc:"Pain sésame, sauce pesto maison, tomate, emmental, mozzarella, bleu, chèvre", photo:"https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?fm=jpg&q=80&w=1200&fit=crop" }
    ]
  },
  bagels: {
    titre: "Bagels",
    note: "",
    plats: [
      { id:"bag-alaska", nom:"L'Alaska", prix:5.50, desc:"Fromage frais, salade, tomate, saumon fumé, oignon rouge", photo:"images/bagels-trio.png" },
      { id:"bag-italien", nom:"L'Italien", prix:5.50, desc:"Huile d'olive à l'ail et aux herbes, roquette, tomate, mozzarella, jambon Serrano", photo:"images/sandwiches-display.png" },
      { id:"bag-caesar", nom:"Le Caesar", prix:5.50, desc:"Sauce caesar maison, salade, tomate, émincé de poulet rôti, croutons, copeaux de grana", photo:"images/bagels-trio.png" }
    ]
  },
  hotdogs: {
    titre: "Hot-dogs",
    note: "",
    plats: [
      { id:"hd-classique", nom:"Classique", prix:4.50, desc:"Ketchup, moutarde américaine, saucisse de Francfort, cheddar", photo:"https://images.unsplash.com/photo-1612392061981-9d086fe894ed?fm=jpg&q=80&w=1200&fit=crop" },
      { id:"hd-bacon", nom:"Bacon", prix:5.50, desc:"Ketchup, moutarde américaine, saucisse de Francfort, cheddar, poitrine fumée grillée, oignons frits, pickles", photo:"images/hotdogs-duo.png" },
      { id:"hd-chicken", nom:"Chicken", prix:6.50, desc:"Ketchup, moutarde américaine, poulet pané corn flakes, cheddar, poitrine fumée grillée, oignons frits, pickles", photo:"images/plateau-complet.png" },
      { id:"hd-pulledpork", nom:"Pulled Pork", prix:6.50, desc:"Porc effiloché mariné, cheddar, poitrine fumée grillée, oignons frits, pickles", photo:"images/hotdog-pulledpork.png" }
    ]
  },
  burgers: {
    titre: "Burgers",
    note: "Tous nos burgers existent en version vegan, avec un steak végétal.",
    plats: [
      { id:"bg-lf", nom:"LF Burger", prix:12.00, desc:"Pain brioché, sauce maison barbecue au rhum, tomate, salade, steak haché boucher 150g, cheddar, poitrine fumée grillée, compotée maison d'oignons et champignons", photo:"images/burger-bacon-cheddar.png", vegan:true },
      { id:"bg-redspicy", nom:"Red Spicy", prix:11.50, desc:"Pain brioché, sauce épicée maison, tomate, salade, chorizo grillé, steak haché boucher 150g, cheddar, oignon rouge", photo:"images/plateau-complet.png", vegan:true },
      { id:"bg-burrata", nom:"Burrata Burger", prix:12.00, desc:"Pain brioché, pesto, tomate, roquette, steak haché boucher 150g, mozzarella di burrata", photo:"images/burger-saucisses.png", vegan:true },
      { id:"bg-cheese", nom:"Cheese", prix:9.50, desc:"Pain brioché, ketchup, moutarde américaine, tomate, salade, steak haché boucher 150g, cheddar", photo:"images/burger-cheese-simple.png", vegan:true },
      { id:"bg-doublecheese", nom:"Double Cheese", prix:12.50, desc:"Pain brioché, ketchup, moutarde américaine, tomate, salade, 2 steaks hachés boucher 150g, cheddar", photo:"https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?fm=jpg&q=80&w=1200&fit=crop", vegan:true },
      { id:"bg-chicken", nom:"Chicken", prix:11.50, desc:"Pain brioché, sauce tartare, tomate, salade, poulet pané, poitrine fumée grillée, cheddar", photo:"https://images.unsplash.com/photo-1671106571674-a89083d27e60?fm=jpg&q=80&w=1200&fit=crop", vegan:true },
      { id:"bg-pulledpork", nom:"Pulled Pork", prix:12.00, desc:"Pain brioché, tomate, salade, porc effiloché mariné cuit sous vide à basse température, poitrine fumée grillée, cheddar", photo:"images/burger-pretzel-onion.png", vegan:true },
      { id:"bg-pulledbeef", nom:"Pulled Beef", prix:12.00, desc:"Pain brioché, sauce fumée maison, tomate, salade, bœuf effiloché mariné cuit sous vide à basse température, poitrine fumée grillée, cheddar", photo:"images/burger-pulledbeef.png", vegan:true },
      { id:"bg-chevremiel", nom:"Chèvre Miel", prix:12.00, desc:"Pain brioché, miel, tomate, mâche, tranches de bûche de chèvre, steak haché boucher 150g, poitrine fumée grillée", photo:"images/burger-chevre-miel.png", vegan:true }
    ]
  }
};

// Variantes / suppléments hors plats principaux
const VARIANTES = {
  frites: { titre:"Frites fraîches", lignes:[
    { nom:"Petite", prix:3.50 },
    { nom:"Grande", prix:5.00 },
    { nom:"Supplément sauce cheddar", prix:1.00 },
    { nom:"Supplément bacon grillé", prix:1.00 },
    { nom:"Supplément oignons frits", prix:0.50 }
  ]},
  nuggets: { titre:"Nuggets", lignes:[
    { nom:"x6", prix:5.50 },
    { nom:"x9", prix:6.50 },
    { nom:"L'unité", prix:2.00 }
  ]},
  enfants: { titre:"Menu enfant", lignes:[
    { nom:"Cheeseburger ou Nuggets x5, frites, boisson, dessert", prix:6.50 }
  ]},
  boissons: { titre:"Boissons", lignes:[
    { nom:"Soda 33cL", prix:2.00 },
    { nom:"Eau 50cL", prix:1.00 },
    { nom:"Eau gazeuse 50cL", prix:2.00 },
    { nom:"Café", prix:1.20 }
  ]},
  options: { titre:"Options supplémentaires", lignes:[
    { nom:"Supplément menu frites + boisson", prix:4.00 }
  ]}
};

/* ---------- Panier (état en mémoire) ------------------------------------- */
let panier = [];

function formatPrix(n){
  return n.toFixed(2).replace(".", ",") + " €";
}

function ajouterAuPanier(id, nom, prix){
  const existant = panier.find(p => p.id === id);
  if(existant){
    existant.qte++;
  } else {
    panier.push({ id, nom, prix, qte:1 });
  }
  majPanier();
  afficherToast(`${nom} ajouté au panier`);
}

function changerQte(id, delta){
  const item = panier.find(p => p.id === id);
  if(!item) return;
  item.qte += delta;
  if(item.qte <= 0){
    panier = panier.filter(p => p.id !== id);
  }
  majPanier();
}

function supprimerDuPanier(id){
  panier = panier.filter(p => p.id !== id);
  majPanier();
}

function totalPanier(){
  return panier.reduce((acc, p) => acc + p.prix * p.qte, 0);
}

function nbArticles(){
  return panier.reduce((acc, p) => acc + p.qte, 0);
}

function majPanier(){
  reinitialiserAffichagePaiement();

  const badge = document.getElementById("panier-badge");
  const liste = document.getElementById("panier-liste");
  const total = document.getElementById("panier-total-val");
  const n = nbArticles();

  badge.textContent = n;
  badge.style.display = n > 0 ? "flex" : "none";

  if(panier.length === 0){
    liste.innerHTML = `
      <div class="panier-vide">
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.3 4.6A1 1 0 0 0 5.6 19H18M9 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm9 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/></svg>
        <p>Votre panier est vide.<br>Composez votre commande dans la carte.</p>
      </div>`;
  } else {
    liste.innerHTML = panier.map(p => `
      <div class="panier-item">
        <div class="panier-item-info">
          <h5>${p.nom}</h5>
          <div class="prix-unit">${formatPrix(p.prix)} / unité</div>
          <div class="panier-qte">
            <button class="qte-btn" data-action="moins" data-id="${p.id}" aria-label="Retirer une unité">−</button>
            <span>${p.qte}</span>
            <button class="qte-btn" data-action="plus" data-id="${p.id}" aria-label="Ajouter une unité">+</button>
          </div>
          <div class="panier-item-suppr" data-action="suppr" data-id="${p.id}">Retirer du panier</div>
        </div>
        <div class="panier-item-total">${formatPrix(p.prix * p.qte)}</div>
      </div>
    `).join("");
  }

  total.textContent = formatPrix(totalPanier());

  // Affiche les moyens de paiement seulement si le panier contient au moins un article
  const containerPaypal = document.getElementById("paypal-buttons-container");
  const noteVide = document.getElementById("paiement-vide-note");
  const toggleCarte = document.getElementById("ouvrir-formulaire-carte");
  const formCarte = document.getElementById("formulaire-carte");
  const btnValiderCarte = document.getElementById("valider-carte-btn");

  console.log("[DEBUG majPanier] panier.length =", panier.length,
    "| containerPaypal trouvé =", !!containerPaypal,
    "| noteVide trouvé =", !!noteVide,
    "| toggleCarte trouvé =", !!toggleCarte,
    "| toggleCarte classes AVANT =", toggleCarte ? toggleCarte.className : "N/A");

  if(containerPaypal && noteVide){
    if(panier.length === 0){
      containerPaypal.classList.add("masque");
      noteVide.classList.remove("masque");
      if(toggleCarte) toggleCarte.classList.add("masque");
      if(formCarte) formCarte.classList.remove("ouvert");
    } else {
      containerPaypal.classList.remove("masque");
      noteVide.classList.add("masque");
      if(toggleCarte) toggleCarte.classList.remove("masque");
    }
  } else {
    console.warn("[DEBUG majPanier] BLOC IGNORÉ : containerPaypal ou noteVide introuvable !");
  }

  if(toggleCarte){
    console.log("[DEBUG majPanier] toggleCarte classes APRÈS =", toggleCarte.className,
      "| computed display =", window.getComputedStyle(toggleCarte).display);
  }

  // Le bouton "Payer" du formulaire carte affiche toujours le montant à jour
  if(btnValiderCarte && !btnValiderCarte.disabled){
    btnValiderCarte.textContent = `Payer ${formatPrix(totalPanier())}`;
  }
}

function afficherToast(msg){
  const toast = document.getElementById("toast");
  toast.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg> ${msg}`;
  toast.classList.add("visible");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => toast.classList.remove("visible"), 2200);
}

/* ---------- Rendu du menu ------------------------------------------------- */
function rendrePlat(p){
  const photoHtml = p.photo
    ? `<div class="plat-photo"><img src="${p.photo}" alt="${p.nom}" loading="lazy"></div>`
    : `<div class="plat-photo vide">🍔</div>`;

  return `
    <article class="plat">
      ${photoHtml}
      <div class="plat-corps">
        <div class="plat-head">
          <h4>${p.nom}</h4>
          <span class="plat-prix">${formatPrix(p.prix)}</span>
        </div>
        <p class="plat-desc">${p.desc}</p>
        <div class="plat-pied">
          ${p.vegan ? '<span class="tag-vegan">Option vegan</span>' : '<span></span>'}
          <button class="btn-ajout" data-id="${p.id}" data-nom="${p.nom}" data-prix="${p.prix}">
            + Ajouter
          </button>
        </div>
      </div>
    </article>
  `;
}

function rendreVariantes(bloc, cleBloc){
  return `
    <div class="variantes-bloc">
      <h4>${bloc.titre}</h4>
      <div class="variantes-liste">
        ${bloc.lignes.map((l, i) => {
          const id = `${cleBloc}-${i}`;
          return `
          <div class="variante-ligne">
            <span class="nom">${l.nom}</span>
            <span class="prix">${formatPrix(l.prix)}</span>
            <button class="btn-ajout" data-id="${id}" data-nom="${bloc.titre} — ${l.nom}" data-prix="${l.prix}">
              + Ajouter
            </button>
          </div>
        `;
        }).join("")}
      </div>
    </div>
  `;
}

function rendreMenu(){
  const container = document.getElementById("menu-contenu");
  let html = "";

  Object.entries(MENU).forEach(([cle, cat], i) => {
    html += `
      <div class="menu-categorie ${i === 0 ? 'actif' : ''}" data-cat="${cle}">
        <h3 class="cat-titre">${cat.titre}</h3>
        ${cat.note ? `<p class="cat-note">${cat.note}</p>` : ""}
        <div class="plat-grille">
          ${cat.plats.map(rendrePlat).join("")}
        </div>
      </div>
    `;
  });

  // Catégorie "le coin croustillant" (frites / nuggets)
  html += `
    <div class="menu-categorie" data-cat="croustillant">
      <h3 class="cat-titre">Le coin croustillant</h3>
      <p class="cat-note">À grignoter seul, ou en plus de votre commande.</p>
      <div class="plat-grille" style="grid-template-columns:1fr 1fr;">
        ${rendreVariantes(VARIANTES.frites, "frites")}
        ${rendreVariantes(VARIANTES.nuggets, "nuggets")}
      </div>
    </div>
  `;

  // Catégorie "Enfants & boissons"
  html += `
    <div class="menu-categorie" data-cat="extras">
      <h3 class="cat-titre">Enfants &amp; boissons</h3>
      <p class="cat-note">Pour accompagner les plus jeunes, et faire descendre le tout.</p>
      <div class="plat-grille" style="grid-template-columns:1fr 1fr;">
        ${rendreVariantes(VARIANTES.enfants, "enfants")}
        ${rendreVariantes(VARIANTES.boissons, "boissons")}
      </div>
      <div style="margin-top:18px;">
        ${rendreVariantes(VARIANTES.options, "options")}
      </div>
    </div>
  `;

  container.innerHTML = html;
}

/* ---------- Onglets du menu ----------------------------------------------- */
function initOnglets(){
  const onglets = document.querySelectorAll(".onglet");
  onglets.forEach(ong => {
    ong.addEventListener("click", () => {
      onglets.forEach(o => o.classList.remove("actif"));
      ong.classList.add("actif");
      const cible = ong.dataset.cat;
      document.querySelectorAll(".menu-categorie").forEach(cat => {
        cat.classList.toggle("actif", cat.dataset.cat === cible);
      });
    });
  });
}

/* ---------- Délégation des clics (ajout panier, qté, suppr) --------------- */
function initDelegation(){
  document.body.addEventListener("click", (e) => {
    const ajoutBtn = e.target.closest(".btn-ajout");
    if(ajoutBtn){
      ajouterAuPanier(ajoutBtn.dataset.id, ajoutBtn.dataset.nom, parseFloat(ajoutBtn.dataset.prix));
      return;
    }
    const qteBtn = e.target.closest(".qte-btn");
    if(qteBtn){
      changerQte(qteBtn.dataset.id, qteBtn.dataset.action === "plus" ? 1 : -1);
      return;
    }
    const supprBtn = e.target.closest('[data-action="suppr"]');
    if(supprBtn){
      supprimerDuPanier(supprBtn.dataset.id);
      return;
    }
  });
}

/* ---------- Drawer panier -------------------------------------------------- */
function initPanierDrawer(){
  const overlay = document.getElementById("panier-overlay");
  const drawer = document.getElementById("panier-drawer");
  const ouvrirBtns = document.querySelectorAll("[data-ouvrir-panier]");
  const fermerBtns = document.querySelectorAll("[data-fermer-panier]");

  function ouvrir(){
    overlay.classList.add("ouvert");
    drawer.classList.add("ouvert");
    document.body.style.overflow = "hidden";
  }
  function fermer(){
    overlay.classList.remove("ouvert");
    drawer.classList.remove("ouvert");
    document.body.style.overflow = "";
  }

  ouvrirBtns.forEach(b => b.addEventListener("click", ouvrir));
  fermerBtns.forEach(b => b.addEventListener("click", fermer));
  overlay.addEventListener("click", fermer);
}

/* ---------- Mode de commande (sur place / livraison) ----------------------- */
let modeCommande = "emporter";

function initModeCommande(){
  const boutons = document.querySelectorAll(".mode-btn");
  boutons.forEach(b => {
    b.addEventListener("click", () => {
      boutons.forEach(x => x.classList.remove("actif"));
      b.classList.add("actif");
      modeCommande = b.dataset.mode;
    });
  });
}

/* ---------- Paiement -------------------------------------------------------
   Deux moyens de paiement sont proposés :

   1) Le bouton PayPal natif (paypal.Buttons), via le SDK chargé avec le
      Client ID "sb" (sandbox public de démonstration PayPal). Ce flux est
      pleinement fonctionnel en mode test : connexion à un compte PayPal
      sandbox, validation, confirmation.

   2) Un formulaire "Carte bancaire" custom, affiché par notre propre code
      (et non par le SDK PayPal). Le widget de carte avancé de PayPal
      nécessite un vrai Client ID sandbox créé sur developer.paypal.com — le
      Client ID générique "sb" ne permet pas de capturer un paiement par
      carte jusqu'au bout. En attendant la création d'un vrai compte, ce
      formulaire affiche le même parcours visuel (numéro de carte, date,
      CVV, validation) et simule la confirmation, pour pouvoir présenter le
      tunnel d'achat complet à un client.

   Pour passer en production (paiement carte réellement fonctionnel) :
   1. Créer un compte sur developer.paypal.com (un compte PayPal classique
      suffit pour commencer un sandbox ; un compte Business réel sera
      nécessaire pour le mode Live et pour recevoir l'argent).
   2. Récupérer le Client ID (sandbox d'abord pour tester, puis Live) dans
      Apps & Credentials.
   3. Remplacer "sb" par ce Client ID dans la balise <script> du SDK, en
      haut de index.html.
   4. Une fois un vrai Client ID en place, le formulaire carte custom
      ci-dessous peut être remplacé par le widget officiel PayPal
      "Advanced Card Payments", qui traite alors un vrai paiement.
----------------------------------------------------------------------------- */

function initPaypal(){
  // window.paypal n'existe que si le SDK a bien chargé (nécessite une connexion internet)
  if(typeof paypal === "undefined"){
    const container = document.getElementById("paypal-buttons-container");
    if(container){
      container.innerHTML = `<p class="paiement-erreur">Le module de paiement n'a pas pu se charger (connexion internet requise).</p>`;
    }
    return;
  }

  // Bouton PayPal natif (connexion à un compte PayPal) — fonctionnel en sandbox
  paypal.Buttons({
    fundingSource: paypal.FUNDING.PAYPAL,
    style:{
      layout:"vertical",
      color:"gold",
      shape:"pill",
      label:"pay"
    },

    createOrder:(data, actions) => {
      const total = totalPanier().toFixed(2);
      return actions.order.create({
        purchase_units:[{
          amount:{
            value: total,
            currency_code:"EUR"
          },
          description: `Commande LF Foodtruck (${modeCommande === "livraison" ? "livraison" : "sur place / à emporter"})`
        }]
      });
    },

    onApprove:(data, actions) => {
      return actions.order.capture().then((details) => {
        afficherConfirmationPaiement(details.payer.name?.given_name, details.id);
      });
    },

    onError:(err) => {
      console.error("Erreur PayPal :", err);
      afficherErreurPaiement();
    }

  }).render("#paypal-buttons-container");

  initFormulaireCarte();
}

/* ---------- Formulaire carte bancaire (démo visuelle) ----------------------- */
function initFormulaireCarte(){
  const ouvrirBtn = document.getElementById("ouvrir-formulaire-carte");
  const formulaire = document.getElementById("formulaire-carte");
  const validerBtn = document.getElementById("valider-carte-btn");

  if(!ouvrirBtn || !formulaire || !validerBtn) return;

  ouvrirBtn.addEventListener("click", () => {
    formulaire.classList.toggle("ouvert");
  });

  validerBtn.addEventListener("click", () => {
    const numero = document.getElementById("carte-numero").value.trim();
    const expiration = document.getElementById("carte-expiration").value.trim();
    const cvv = document.getElementById("carte-cvv").value.trim();
    const prenom = document.getElementById("carte-prenom").value.trim();

    if(!numero || !expiration || !cvv){
      afficherToast("Merci de compléter les informations de carte");
      return;
    }

    // Simulation visuelle d'un traitement de paiement (pas de vrai débit)
    validerBtn.disabled = true;
    validerBtn.textContent = "Traitement en cours…";

    setTimeout(() => {
      const reference = "DEMO-" + Math.random().toString(36).slice(2, 10).toUpperCase();
      afficherConfirmationPaiement(prenom, reference);
    }, 1400);
  });
}

function afficherConfirmationPaiement(prenom, reference){
  const confirmation = document.getElementById("paiement-confirmation");
  const modeBloc = document.querySelector(".panier-mode");
  const totalBloc = document.querySelector(".panier-total");
  const demoNote = document.getElementById("paiement-demo-note");
  const containerPaypal = document.getElementById("paypal-buttons-container");
  const toggleCarte = document.getElementById("ouvrir-formulaire-carte");
  const formCarte = document.getElementById("formulaire-carte");
  const noteVide = document.getElementById("paiement-vide-note");

  if(confirmation){
    confirmation.innerHTML = `✓ Commande confirmée${prenom ? " — merci " + prenom : ""} !<br>Référence : ${reference}`;
    confirmation.classList.remove("masque");
  }

  // On masque temporairement les moyens de paiement et le total, sans les détruire.
  // Tout passe par la classe .masque : une seule source de vérité, jamais de
  // style inline qui pourrait entrer en conflit avec la logique de majPanier().
  [modeBloc, totalBloc, demoNote, containerPaypal, toggleCarte, formCarte, noteVide].forEach(el => {
    if(el) el.classList.add("masque");
  });
  if(formCarte) formCarte.classList.remove("ouvert");

  panier = [];
  afficherToast("Paiement effectué avec succès");

  // Le panier revient à un état normal et fonctionnel dès le prochain ajout
  // (majPanier réaffiche tout automatiquement via reinitialiserAffichagePaiement).
}

function reinitialiserAffichagePaiement(){
  const confirmation = document.getElementById("paiement-confirmation");
  const modeBloc = document.querySelector(".panier-mode");
  const totalBloc = document.querySelector(".panier-total");
  const demoNote = document.getElementById("paiement-demo-note");

  if(confirmation && !confirmation.classList.contains("masque")){
    confirmation.classList.add("masque");
    // On ne touche qu'aux éléments qui doivent TOUJOURS être visibles dès
    // qu'il y a au moins un article. Le reste (containerPaypal, toggleCarte,
    // formCarte, noteVide) est entièrement piloté par la logique normale de
    // majPanier() juste après cet appel — pas besoin de les toucher ici.
    [modeBloc, totalBloc, demoNote].forEach(el => {
      if(el) el.classList.remove("masque");
    });
  }
}

function afficherErreurPaiement(){
  const container = document.getElementById("paypal-buttons-container");
  if(container){
    container.insertAdjacentHTML("afterend", `<p class="paiement-erreur">Le paiement n'a pas pu être finalisé. Merci de réessayer.</p>`);
  }
}




function initMenuMobile(){
  const btn = document.getElementById("burger-menu-btn");
  const navLiens = document.querySelector(".nav-liens");
  if(!btn) return;
  btn.addEventListener("click", () => {
    const ouvert = navLiens.classList.toggle("ouvert-mobile");
    if(ouvert){
      navLiens.style.cssText = "display:flex;flex-direction:column;position:absolute;top:100%;left:0;right:0;background:#1A1714;padding:20px 28px;gap:18px;border-bottom:1px solid rgba(212,164,55,0.15);";
    } else {
      navLiens.style.cssText = "";
    }
  });
}

/* ---------- Statut ouvert/fermé en direct ---------------------------------- */
function initStatutHoraires(){
  // Horaires réels : jeudi 11h30-14h00 / 18h45-21h00 uniquement
  const jours = ["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"];
  const maintenant = new Date();
  const jour = jours[maintenant.getDay()];
  const heure = maintenant.getHours() + maintenant.getMinutes()/60;

  let ouvert = false;
  if(jour === "jeudi"){
    if((heure >= 11.5 && heure < 14) || (heure >= 18.75 && heure < 21)) ouvert = true;
  }

  const dot = document.getElementById("statut-dot");
  const texte = document.getElementById("statut-texte");
  if(dot && texte){
    if(ouvert){
      dot.classList.add("ouvert");
      texte.textContent = "Ouvert maintenant — service jusqu'à " + (heure < 14 ? "14h00" : "21h00");
    } else {
      dot.classList.remove("ouvert");
      texte.textContent = "Fermé actuellement — ouvert le jeudi, 11h30–14h00 et 18h45–21h00";
    }
  }

  // Surligner "aujourd'hui" dans le tableau horaires
  document.querySelectorAll(".horaire-ligne").forEach(ligne => {
    if(ligne.dataset.jour === jour){
      ligne.classList.add("aujourdhui");
    }
  });
}

/* ---------- Init globale ---------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  rendreMenu();
  initOnglets();
  initDelegation();
  initPanierDrawer();
  initMenuMobile();
  initStatutHoraires();
  initModeCommande();
  initPaypal();
  majPanier();

  // Année dans le footer
  const anneeEl = document.getElementById("annee-courante");
  if(anneeEl) anneeEl.textContent = new Date().getFullYear();
});
