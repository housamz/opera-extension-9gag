document.addEventListener("DOMContentLoaded", function(event) {
	document.title = "9Gag in Sidebar";
	iframe = document.createElement("iframe");
	iframe.src = "https://m.9gag.com/";
	document.body.appendChild(iframe);
	iframe.contentWindow.focus();
});