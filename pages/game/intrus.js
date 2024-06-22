var theme = [
	"L'intrus est celui qui n'a fait qu'une fois la voix off d'un épisode de Grey's Anatomy.",
	"L'intrus est le joueur qui a pris moins de rebonds (sauf s'il a marqué plus de points) qu'Embiid lors des playoffs 2023.",
	"L'intrus est le couple musicien - instrument qui ne vont pas ensemble.",
	"L'intrus est l'élément qui ne se trouve pas sur le drapeau d'un état des États Unis.'."
	]

var manche = [
	/* Première manche */ 
	"Meredith Grey", 
	"Richard Webber", 
	"Owen Hunt",  
	"Maggie Pierce",  
	"Miranda Bailey", 
	"Cristina Yang", 
	"Jo Wilson",  
	"April Kepner", 
	
	/* Deuxième manche */
	"Jayson Tatum", 
	"Kevon Looney", 
	"Josh Hart",  
	"Rudy Gobert",  
	"Mason Plumlee", 
	"Clint Capela", 
	"Jonas Valančiūnas",  
	"Alperen Sengun", 
	
	
	/* Troisième manche */
	"Louis Amstrong - Trompette", 
	"Benny Bonman - Clarinette", 
	"William Bell - Tuba",  
	"Robert Schumann - Piano",  
	"Miles Davis - Trompette", 
	"Niccolò Paganini - Violon", 
	"Marcel Tournier - Harpe",  
	"Krist Novoselic - Batterie", 

	/* Quatrième manche */
	"Ours", 
	"Palmier", 
	"Mitraillette",  
	"Pelle",  
	"Train", 
	"Soleil", 
	"Cheval",  
	"Aigle", ]

var infos = [
	/* Première manche */
	" - Je vais pas compter hein!",
	" - 7",
	" - 3",
	" - 2",
	" - 4",
	" - 3",
	" - 1",
	" - 4",

	/* Deuxième manche */
	" - 2 225 points",
	" - 760 rebonds",
	" - 593 rebonds",
	" - 814 rebonds",
	" - 700 rebonds",
	" - 717 rebonds",
	" - 804 rebonds",
	" - 678 rebonds",

	/* Troisième manche */
	" - ",
	" - ",
	" - ",
	" - ",
	" - ",
	" - ",
	" - ",
	" - ",

	/* Quatrième manche */
	" - Californie",
	" - Caroline du Sud",
	"",
	" - Montana",
	" - Nebraska",
	" - New Hampshire",
	" - Pennsylvania",
	" - Iowa, Illinois, Michigan...",
	]

var incorrect = [
	6,
	2,
	7,
	2]

var id  ="";

var nbrManche = 0;

document.getElementById("nom_manche").textContent = theme[0];
	var j = 0;
	for (var i = 0 ; i < 8 ; i++)
		{
			document.getElementById(i).classList.add("answer");
			document.getElementById(i).textContent = manche[j + i];
		}

		

function selection_manche(clicked_manche) {
	nbrManche = clicked_manche;
	id = clicked_manche.substr(6, 1); 
	document.getElementById("nom_manche").textContent = theme[id];
	var j = 8 * id;
	for (var i = 0 ; i < 8 ; i++)
		{
			// document.getElementById(i).style.backgroundColor = "#EFF4E6";
			document.getElementById(i).textContent = manche[j + i];
		}
	nbrManche = parseInt(id, 4);
}

function correct(clicked_id) 
{
		var j = 8 * nbrManche;
		clicked_id = parseInt(clicked_id, 10);
		var Elt = document.getElementById(clicked_id);
		
		if (clicked_id === incorrect[nbrManche])
			{
				Elt.classList.remove("answer");
				Elt.classList.add("backgroundFalse");
				Elt.style.width = "500px";
			}

		else
			{
				Elt.classList.remove("answer");
				Elt.classList.add("backgroundTrue");
				Elt.style.width = "500px";
			}

			if (nbrManche !=2) {document.getElementById(clicked_id).textContent = manche[j + clicked_id] + infos[j + clicked_id];}
		
}