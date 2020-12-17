
function ajaxGet(url, callback){
	var req = new XMLHttpRequest();
	req.open("GET", url);
	req.addEventListener("load", function() {
		if(req.status >= 200 && req.status < 400) {
			callback(req);
		} else {
			console.log(req.status + " " + req.statusText + " " + url);
			callback(req);
		}
	});
	req.addEventListener("error", function(){
		console.log("Erreur réseau avec l'URL " + url);
		callback(req);
	});
	req.send(null);
}


function ajaxPost(url, data, callback, isJson){
	var req = new XMLHttpRequest();
	req.open("POST", url);
	req.addEventListener("load", function() {
		if(req.status >= 200 && req.status < 400) {
			callback(req);
		} else {
			console.log(req.status + " " + req.statusText + " " + url);
			callback(req);
		}
	});
	req.addEventListener("error", function(){
		console.log("Erreur réseau avec l'URL " + url);
		callback(req);
	});
	if(isJson) {
		req.setRequestHeader("Content-Type", "application/json");
		data = JSON.stringify(data);
	}
	req.send(data);
}




