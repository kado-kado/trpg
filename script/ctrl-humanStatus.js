document.getElementById("humanStatus").style.display ="none";

function Ctrl_humanStatus(){
	const humanStatus = document.getElementById("humanStatus");

	if(humanStatus.style.display=="block"){
		humanStatus.style.display ="none";
	}else{
		humanStatus.style.display ="block";
	}
}