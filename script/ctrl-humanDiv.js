document.getElementById("humanDiv").style.display ="none";

function Ctrl_humanDiv(){
	const humanDiv = document.getElementById("humanDiv");

	if(humanDiv.style.display=="block"){
		humanDiv.style.display ="none";
	}else{
		humanDiv.style.display ="block";
	}
}