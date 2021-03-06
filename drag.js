function startDrag(e) {
	// determine event object
	if (!e) {
		var e = window.event;
	}

	// IE uses srcElement, others use target
	var targ = e.target ? e.target : e.srcElement;

	if (targ.className != 'dragme') {return};
	// calculate event X, Y coordinates
	if(e.preventDefault) e.preventDefault();

	offsetX = e.clientX;
	offsetY = e.clientY;

	// assign default values for top and left properties
	if(!targ.style.left) { targ.style.left='0px'};
	if (!targ.style.top) { targ.style.top='0px'};

	// calculate integer values for top and left 
	// properties
	coordX = parseInt(targ.style.left);
	coordY = parseInt(targ.style.top);
	drag = true;

	// move div element
	document.onmousemove=function(e) { dragDiv(e, targ) };
	
	return false;
}
function dragDiv(e, targ) {
	if (!drag) {return};
	if (!e) { var e= window.event};
	/*var targ=e.target?e.target:e.srcElement;*/
	if (targ.className != 'dragme') {return}
	// move div element
	console.log($(targ))
	targ.style.left=coordX+e.clientX-offsetX+'px';
	targ.style.top=coordY+e.clientY-offsetY+'px';
	if(parseInt(targ.style.left) < 463 && parseInt(targ.style.top) > 340) {
		$(targ).fadeOut();
	}
	return false;
}
function stopDrag() {
	drag=false;
}
window.onload = function() {
	document.onmousedown = startDrag;
	document.onmouseup = stopDrag;
	
}

$( document ).ready(function() {
    $('#textInput').focus();
});