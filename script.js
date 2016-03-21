var kliks = Math.ceil(9*Math.random());
var totaal = kliks*Math.random()*5;
var uitvoerKliks = document.getElementById("aantal");
var uitvoertotaal = document.getElementById("waardering");
var sterretjes = document.querySelectorAll(".geen");

function sterKleuren(sterNummer, percentage){
	var ster = "s" + sterNummer;
	percentage = Math.min(percentage, 100);//als het percentage boven de 100 is dan word hij naar 100 teruggezet, dit voorkomt te brede sterren
	document.getElementById(ster).style.width = percentage+"%"; //zorgt dat we de sterren kunnen stylen met een functie
}

function kleurSterrenIn(waardering){
	for(var i=1;i<6;i++){ //loopt door alle sterren heen
		sterKleuren(i, waardering*100);
		waardering --;
	}
}

//random genereren en uitvoeren in document
function voerUit(){
	uitvoerKliks.innerHTML = kliks;
	uitvoertotaal.innerHTML = Math.ceil(10*totaal/kliks)/10;
	kleurSterrenIn(Math.ceil(10*totaal/kliks)/10);
}
voerUit();

function verwerkKlik(){
	kliks++;
	var nummertje = this.getAttribute("data-role");
	totaal += parseInt(nummertje); //inhoud omzetten naar heel getal
	voerUit();
}
for(var i=0;i<sterretjes.length;i++){
	sterretjes[i].addEventListener("click", verwerkKlik);
}