const collapsibleIds = [
	"beraKind", "beraRestriction", "beraDetails1", "beraDetails2", "beraCF",
	"woodStatus", "woodDiv", "humanStatus", "humanDiv", "weaponDetails",
	"moneyDetails", "itemDetails", "encounterDetails", "scenarioDetails"
];

collapsibleIds.forEach((divId) => {
	const targetDiv = document.getElementById(divId);
	if (targetDiv) targetDiv.style.display = "none";
});


function Ctrl_div(divId){
	const targetDivId = document.getElementById(divId);
	if (!targetDivId) return;

	if(targetDivId.style.display=="block"){
		targetDivId.style.display ="none";
	}else{
		targetDivId.style.display ="block";
	}
}