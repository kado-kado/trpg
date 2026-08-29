const collapsibleIds = [
	"beraKind", "beraRestriction", "beraDetails1", "beraDetails2", "beraCritical", "beraFumble", "beraATP", "beraState", "useAffectbera", "aboutAFbera", "normalbera", "woodStatus", "woodDiv", "humanStatus", "humanDiv", "weaponDetails", "moneyDetails", "itemDetails", "encounterDetails", "scenarioDetails", "TRberame", "CHberame", "berameATP", "useATP", "STbera"
];

collapsibleIds.forEach((divId) => {
	const targetDiv = document.getElementById(divId);
	if (targetDiv) targetDiv.style.display = "none";
});

function Ctrl_div(divId) {
	const targetDiv = document.getElementById(divId);
	if (!targetDiv) return;

	const isVisible = targetDiv.style.display === "block" || targetDiv.style.display === "flex";
	targetDiv.style.display = isVisible ? "none" : "block";
}