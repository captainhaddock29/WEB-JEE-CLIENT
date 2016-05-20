
let server = "http://localhost:8080/tpWeb-etd-1.0-SNAPSHOT/tpREST/";//TODO to change.

document.getElementById('searchbutton').onclick = function() {
	let salle = document.getElementById('nomsalle').value;
	let req = new XMLHttpRequest();

	req.onreadystatechange = function() {
		if (req.readyState != 4) return; // While not finished

		if(req.status==200) {
			var respJSON = JSON.parse(req.responseText);
			if(respJSON.video)
			{
				document.getElementById('info').innerHTML = "La salle "+respJSON.name+" a "+respJSON.capacite+" places(s) dont "+respJSON.nbPosteLinux+" poste(s) Linux et "+respJSON.nbPosteWindows+" poste(s) Windows. La salle est équipée d'un vidéoprojecteur. ";
			}
			else
			{
				document.getElementById('info').innerHTML = "La salle "+respJSON.name+" a "+respJSON.capacite+" places(s) dont "+respJSON.nbPosteLinux+" poste(s) Linux et "+respJSON.nbPosteWindows+" poste(s) Windows. La salle ne possède pas de vidéoprojecteur. ";
			}

		} else {
			document.getElementById('info').innerHTML = "Cannot be retrieved";
		}
	};

	req.open("GET", server+"calendar/salle/"+salle, true);// TODO to update
	req.send();
};




/**********************************************************************************/
/****                           COMMANDES CURL                                 ****/
/**********************************************************************************/

// curl -H "Content-Type:application/json" -d '{"name":"Bordeaux"}' -X POST "http://localhost:8080/tpWeb-etd-1.0-SNAPSHOT/tpREST/calendar/salle"

// curl -H "Content-Type:application/json" -d '{"name":"EAUX", "capacite":20, "nbPosteLinux":10, "nbPosteWindows":20, "video":true}' -X POST "http://localhost:8080/tpWeb-etd-1.0-SNAPSHOT/tpREST/calendar/salle"

// curl -H "Content-Type: application/json" -d '{"name":"blouin"}' -X POST "http://localhost:8080/tpWeb-etd-1.0-SNAPSHOT/tpREST/calendar/ens"

// curl -H "Content-Type: application/json" -d '{"name":"j2ee"}' -X POST "http://localhost:8080/tpWeb-etd-1.0-SNAPSHOT/tpREST/calendar/matiere"

// curl -H "Content-Type: application/json" -d '{"name":"G2.2"}' -X POST "http://localhost:8080/tpWeb-etd-1.0-SNAPSHOT/tpREST/calendar/groupe"

// curl -H "Content-Type: application/json" -X PUT "http://localhost:8080/tpWeb-etd-1.0-SNAPSHOT/tpREST/calendar/salle/3/eaux"

// curl -H "Content-Type:application/json" -d '{"matiere": {"name":"j2ee"}, "horaire": "2016-04-22T09:26:30", "ens":{"name":"blouin"}, "salle":{"name":"Bordeaux"}, "duration":"02:00:00", "groupe":{"name":"G2.2"}}' -X POST "http://localhost:8080/tpWeb-etd-1.0-SNAPSHOT/tpREST/calendar/cours"

/*
curl -H "Content-Type:application/json" -d '{"type":"tp", "matiere": {"type":"salle", "id":9}, "ens": {"type":"enseignant","id":10,"name":"blouin"}, "salle": {"type":"salle","id":2,"capacite":0,"name":"Bordeaux","nbPosteLinux":0,"nbPosteWindows":0,"video":false}, "groupe":{"type":"groupe","id":11}, "horaire":"2015-01-03T08:00:00", "duration":"PT1H"}' -X POST "http://localhost:8080/tpWeb-etd-1.0-SNAPSHOT/tpREST/calendar/cours"
*/
// curl -H "Content-Type: application/json" -X GET "http://localhost:8080/tpWeb-etd-1.0-SNAPSHOT/tpREST/calendar/cours/list/1/2016/1"
