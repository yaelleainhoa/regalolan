var images = [
	"/assets/img/guess_image/rules.png",
	"/assets/img/guess_image/article1.png",
    "/assets/img/guess_image/article2.png",
    "/assets/img/guess_image/article3.png",
    "/assets/img/guess_image/article4.png",
    "/assets/img/guess_image/article5.png",
    "/assets/img/guess_image/article6.png",
    "/assets/img/guess_image/article7.png",
    "/assets/img/guess_image/article8.png",
    "/assets/img/guess_image/article9.png",
    "/assets/img/guess_image/article10.png",
	"/assets/img/end.png",
]

var reponses = [
	"",
	"",
]


/* Initialisation de la page*/
	var id = 0;
	document.getElementById("image").setAttribute("src", images[id]) ;

/* Fonctions de navigation */

	function raz() {
		document.getElementById("image").setAttribute("src", images[id]) ;
 		document.getElementById("solution").textContent = "Réponse";
		document.getElementById("solution").classList.add("btn"); 
	}
	function precedent() {
		id--;
		raz();
	}

	function suivant() {
		if(id<images.length)
		{
			id++;
			raz();
		}
	}

 	function reponse() {
		document.getElementById("solution").textContent = reponses[id] ;
		document.getElementById("solution").style.fontFamily = "Police1" ;
		document.getElementById("solution").style.paddingBottom = "10px" ;
		document.getElementById("solution").style.paddingTop = "10px" ;

	}