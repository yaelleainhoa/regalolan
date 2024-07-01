var images = [
"../../assets/img/guess_image/25.png";
"../../assets/img/guess_image/1.png";
"../../assets/img/guess_image/2.png";
"../../assets/img/guess_image/3.png";
"../../assets/img/guess_image/4.png";
"../../assets/img/guess_image/5.png";
"../../assets/img/guess_image/6.png";
"../../assets/img/guess_image/7.png";
"../../assets/img/guess_image/8.png";
"../../assets/img/guess_image/9.png";
"../../assets/img/guess_image/10.png";
"../../assets/img/guess_image/11.png";
"../../assets/img/guess_image/12.png";
"../../assets/img/guess_image/13.png";
"../../assets/img/guess_image/14.png";
"../../assets/img/guess_image/15.png";
"../../assets/img/guess_image/16.png";
"../../assets/img/guess_image/17.png";
"../../assets/img/guess_image/18.png";
"../../assets/img/guess_image/19.png";
"../../assets/img/guess_image/20.png";
"../../assets/img/guess_image/21.png";
"../../assets/img/guess_image/22.png";
"../../assets/img/guess_image/23.png";
"../../assets/img/guess_image/24.png";
"../../assets/img/guess_image/25.png";
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
/* 		document.getElementById("solution").textContent = "Réponse";
		document.getElementById("solution").classList.add("btn"); */
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

/* 	function reponse() {
		document.getElementById("solution").textContent = reponses[id] ;
		document.getElementById("solution").style.fontFamily = "Police1" ;
		document.getElementById("solution").style.paddingBottom = "10px" ;
		document.getElementById("solution").style.paddingTop = "10px" ;

	} */