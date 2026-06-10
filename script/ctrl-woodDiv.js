document.getElementById("woodDiv").style.display ="none";

function Ctrl_woodDiv(){
	const woodDiv = document.getElementById("woodDiv");

	if(woodDiv.style.display=="block"){
		woodDiv.style.display ="none";
	}else{
		woodDiv.style.display ="block";
	}
}