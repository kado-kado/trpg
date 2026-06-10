document.getElementById("woodStatus").style.display ="none";

function Ctrl_woodStatus(){
	const woodStatus = document.getElementById("woodStatus");

	if(woodStatus.style.display=="block"){
		woodStatus.style.display ="none";
	}else{
		woodStatus.style.display ="block";
	}
}