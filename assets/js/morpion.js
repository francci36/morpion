// On vérifie si la case contient déjà une valeur
function estValide(button){
    return button.innerHTML.length == 0;
}
// On écrit le symbole dans le button
function setSymbole(btn,symbole){
    btn.innerHTML = symbole;
}
//On vérifie s'il y a un gagnant
function rechercherVainqueur(pions,joueurs,tour){
    // case 0, 1, 2
    if(pions[0].innerHTML == joueurs[tour]  && pions[1].innerHTML == joueurs[tour] && pions[2].innerHTML == joueurs[tour]){
    pions[0].style.backgroundColor = "#9ACD32";
    pions[1].style.backgroundColor = "#9ACD32";
    pions[2].style.backgroundColor = "#9ACD32";
    return true;
}
// 3, 4, 5
if(pions[3].innerHTML == joueurs[tour]  && pions[4].innerHTML == joueurs[tour] && pions[5].innerHTML == joueurs[tour]){
pions[3].style.backgroundColor = "#9ACD32";
pions[4].style.backgroundColor = "#9ACD32";
pions[5].style.backgroundColor = "#9ACD32";
return true;
}
// case 6, 7 8
if(pions[6].innerHTML == joueurs[tour]  && pions[7].innerHTML == joueurs[tour] && pions[8].innerHTML == joueurs[tour]){
pions[6].style.backgroundColor = "#9ACD32";
pions[7].style.backgroundColor = "#9ACD32";
pions[8].style.backgroundColor = "#9ACD32";
return true;
}
// 0, 3 , 6
if(pions[0].innerHTML == joueurs[tour]  && pions[3].innerHTML == joueurs[tour] && pions[6].innerHTML == joueurs[tour]){

pions[0].style.backgroundColor = "#9ACD32";
pions[3].style.backgroundColor = "#9ACD32";
pions[6].style.backgroundColor = "#9ACD32";
return true;
}
// case 1,4,7
if(pions[1].innerHTML == joueurs[tour]  && pions[4].innerHTML == joueurs[tour] && pions[7].innerHTML == joueurs[tour]){
pions[1].style.backgroundColor = "#9ACD32";
pions[4].style.backgroundColor = "#9ACD32";
pions[7].style.backgroundColor = "#9ACD32";
return true;
}
// case 2, 5 ,8
if(pions[2].innerHTML == joueurs[tour]  && pions[5].innerHTML == joueurs[tour] && pions[8].innerHTML == joueurs[tour]){
pions[2].style.backgroundColor = "#9ACD32";
pions[5].style.backgroundColor = "#9ACD32";
pions[8].style.backgroundColor = "#9ACD32";
return true;
}
// fin colonne
//case 0, 4 , 8
if(pions[0].innerHTML == joueurs[tour]  && pions[4].innerHTML == joueurs[tour] && pions[8].innerHTML == joueurs[tour]){
pions[0].style.backgroundColor = "#9ACD32";
pions[4].style.backgroundColor = "#9ACD32";
pions[8].style.backgroundColor = "#9ACD32";
return true;
}
// case 2, 4, 6
if(pions[2].innerHTML == joueurs[tour]  && pions[4].innerHTML == joueurs[tour] && pions[6].innerHTML == joueurs[tour]){
pions[2].style.backgroundColor = "#9ACD32";
pions[4].style.backgroundColor = "#9ACD32";
pions[6].style.backgroundColor = "#9ACD32";
return true;
}
}

// fonction math null
// on verifie s'il n'y a pas de gagnant
function matchNul(pions){
    for(var i=0, len = pions.length; i < len;i++){
    if(pions[i].innerHTML.length == 0) return false;
    }
    return true;
}
// Pour afficher les infos
let Afficheur = function(element){
    let affichage = element;

    function setText(message){
        affichage.innerHTML = message;
    }
    return { sendMessage: setText};
};
// Fonction qui fait tou le jeu
function game(){
    // on récupère toutes les pièces
    let pions = document.querySelectorAll('#morpion button');
    //on défiit les symboles des joueurs
    let joueurs = ['X','O'];
    // on fini le premier tour
    let tour = 0;
    let jeuEtsFini = false;
    // on définit l'élément du DOM qui affiche les infos
    let afficheur = new Afficheur(document.querySelector('#resultat'));
    afficheur.sendMessage("Vous pouvez commencer joueur"+joueurs[tour]+"c'est à vous");
    // le nerf de la guerre
    for(var i=0, len = pions.length; i < len;i++){
        pions[i].addEventListener("click",function(){
            let sonfini = document.createElement("audio");
                    sonfini.src = "assets/sons/BOATHorn_Avertisseur sonore de paquebot 1 (ID 0261)_LS.wav"
                    sonfini.play();
            // on verifie si le jeu est fini
            if(jeuEtsFini)return;
            // on verifie si la case n'est pas déjà  occupé
            if(!estValide(this)){
                // on indique que la case est déjà prise
                afficheur.sendMessage("case occupée !!! <br/> joueur"+joueurs[tour]+"c'est encore à vous");
            }else{
                // on rempli le button ddu symbole
                setSymbole(this,joueurs[tour]);
                // on verifie s'il y a un gagnant
                jeuEtsFini = rechercherVainqueur(pions,joueurs,tour);

                // si jeu est terminé

                if(jeuEtsFini){
                    // on affiche un message
                    afficheur.sendMessage("Le joueur"+joueurs[tour]+"a gagné !!");
                    let sonfini = document.createElement("audio");
                    sonfini.src = "assets/sons/BOATHorn_Avertisseur sonore de paquebot 1 (ID 0261)_LS.wav"
                    sonfini.play();
                    // on verifie si le jeu est fini
                    if (jeuFini)  return;

                }
                // on verifie si la partie est un match nul
                if(matchNul(pions)){
                    // on affiche un message
                    afficheur.sendMessage("Partie terminé ! match nul");
                    let sonfini = document.createElement("audio");
                    sonfini.src = "assets/sons/EXPREAL_Explosion au loin (ID 1023)_LS.wav"
                    sonfini.play();
                }

                // on va incrementer les tours
                tour++;
                tour = tour % 2;
                afficheur.sendMessage("Joueur"+joueurs[tour]+"c'est à vous !");
            }
        });
    }
}
game();