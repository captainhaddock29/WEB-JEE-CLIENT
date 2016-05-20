"use strict";
let server = "http://localhost:8080/tpWeb-etd-1.0-SNAPSHOT/tpREST/";// TODO to change

document.getElementById('loadCalendar').onclick = function() {
	let week = document.getElementById('semaine').value;
	let idRes = document.getElementById('ressource').value;

	//TODO
}



// Helpers

function getAnnee(xmlDoc) {
	return xmlDoc.getElementsByTagName("matiere")[0].getElementsByTagName("annee")[0].textContent;
}

function getMatiere(xmlDoc) {
	return xmlDoc.getElementsByTagName("matiere")[0].getElementsByTagName("name")[0].textContent;
}

function getSalle(xmlDoc) {
	let salle = xmlDoc.getElementsByTagName("salle")[0];
	return salle.getElementsByTagName("name")[0].textContent;
}

function getHoraire(xmlDoc) {
	return new Date(xmlDoc.getElementsByTagName("horaire")[0].textContent);
}

function getDuree(xmlDoc) {
	return xmlDoc.getElementsByTagName("duration")[0].textContent;
}

function getGroupe(xmlDoc) {
	let gp = xmlDoc.getElementsByTagName("groupe")[0];
	return gp.getElementsByTagName("name")[0].textContent;
}

function getEns(xmlDoc) {
	let ens = xmlDoc.getElementsByTagName("ens")[0];
	return ens.getElementsByTagName("name")[0].textContent;
}

