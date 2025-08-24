document.addEventListener("keypress", showKey);

function showKey(e : KeyboardEvent) : void
{
	let myDiv : HTMLDivElement = document.getElementById("show-key") as HTMLDivElement;
	console.log(e);
	myDiv.innerHTML = "key: " + e.key;
	myDiv.innerHTML += "<br>charCode: " + e.charCode;
}

