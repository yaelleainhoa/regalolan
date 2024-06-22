document.getElementById("masquer").style.display = "none";

var liste_questions = [
	"0",
	"👤 née le 25 avril 1917 à Newport News (Virginie) et morte le 15 juin 1996 à Beverly Hills (quartier de Los Angeles), est une chanteuse de jazz américaine.",
	"La finale NBA de 1996 oppose les Chicago Bulls aux ?",
	"👤 né le 21 janvier 1996 à Palma en Espagne, est un footballeur international espagnol. Son père est un Basque espagnol et sa mère est néerlandaise. Il est remplaçant au poste d'attaquant droit au Paris Saint-Germain.",
	"Quel pays ont quitté les Casques bleus le 19 Avril 1996 ?",
	"Quel joueur a fini meilleur marqueur et meilleur rebondeur lors de la finale garçon des JO 1996 ?",
	"👤 est né le 19 avril 1996. Il commence à écrire dès ses six ans et s'investit dans la création musicale en parallèle avec la préparation de son baccalauréat ES qu'il obtient en 2014.",
	"👤 est le fils d'un journaliste navarrais et a été élu résident du gouvernement d'Espagne en 1996 ?",
	"Quel film de Mel Gibson a reçu 5 Oscars lors de la 68e cérémonie des Oscars en 1996 ?",
	"👤 est un rappeur, chanteur et auteur-compositeur français, né le 2 avril 1996 à Longjumeau. Il est détenteur du record français du nombre de singles certifiés (300), avec 160 singles d'or, 90 de platine et 50 de diamant.",
	"Qui a été élu رئيس دولة فلسطين en 1996 ?",
	"💼 est une ligue américaine professionnelle créée en 1996.",
	"Quelle série de films, appelée Frissons au Québec, a vu le premier film sortir en 1996 ?",
	"👤 né le 28 mars 1996 à Maubeuge (Nord), est un footballeur international français qui évolue au poste de défenseur central et de latéral droit",
	"Dans quelle ville est décédé Tupac dans la nuit du 7 septembre 1996 ?",
	"👤 né le 15 mars 1996 à Amiens (Somme), est un homme politique français, est le fils d'un fleuriste et d'une psychologue et est issu d'une famille d’agriculteurs ",
	"👤 est une basketteuse américaine née le 8 août 1996 à Hopkins (Caroline du Sud). Elle est sélectionnée en première position lors de la draft WNBA 2018 par les Aces de Las Vegas.",
	"👤 née le 25 juin 19962 à Caracas, est une influenceuse, vlogueuse, danseuse, chanteuse et actrice américano-vénézuélo-italienne.",
	"Quelle athlète a gagné la médaille d'or au 200m et au 400m lors des JO Atlanta 1996 ?",
	"👤 né le 15 novembre 1996 à Lannemezan (Hautes-Pyrénées), est un joueur international français de rugby à XV jouant principalement au poste de demi de mêlée au Stade toulousain et en équipe de France depuis 2017.",
	"👤 né le 14 mai 1996 à Amstelveen, est un disc jockey, compositeur et producteur musical néerlandais.",

	]
;


var liste_reponses = [
	"0",
	"Ella Fitzgerald",
	"SuperSonics de Seattle",
	"Marco Asensio",
	"Rwanda",
	"David Robinson",
	"Oli",
	"José María Aznar",
	"Braveheart",
	"Ninho",
	"Yasser Arafat",
	"WNBA",
	"Scream",
	"Benjamin Pavard",
	"Las Vegas",
	"Léon Deffontaines",
	"A'ja Wilson",
	"Lele Pons",
	"Marie-José Pérec",
	"Antoine Dupont",
	"Martin Garrix",	

]
;

var id_reponse = 0

function myFunction(clicked_id) {
	var Elt = document.getElementById("question");
	Elt.textContent = liste_questions[clicked_id];
	document.getElementById(clicked_id).id = "id" + clicked_id;
	id_reponse = clicked_id;
	document.getElementById("reponse").textContent= "";
	console.log(clicked_id);
}
;

function Afficher_reponse(clicked_id) {
	var Elt = document.getElementById("reponse");
	Elt.textContent = liste_reponses[id_reponse];

}