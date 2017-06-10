function IsPC()  
{  
    var userAgentInfo = navigator.userAgent;  
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");  
    var flag = true;  
    for (var v = 0; v < Agents.length; v++) {  
       if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
    }  
    return flag;  
}       
function onclickEvent(event) {
	var target = event.target;
    var tc = target.className;
	var blank = document.getElementById("p15");
	var bc = blank.className;
	var cur;
	if (tc=="block0") cur = 0;
	else if (tc=="block1") cur = 1;
	else if (tc=="block2") cur = 2;
	else if (tc=="block3") cur = 3;
	else if (tc=="block4") cur = 4;
	else if (tc=="block5") cur = 5;
	else if (tc=="block6") cur = 6;
	else if (tc=="block7") cur = 7;
	else if (tc=="block8") cur = 8;
	else if (tc=="block9") cur = 9;
	else if (tc=="block10") cur = 10;
	else if (tc=="block11") cur = 11;
	else if (tc=="block12") cur = 12;
	else if (tc=="block13") cur = 13;
	else if (tc=="block14") cur = 14;
	else if (tc=="block15") cur = 15;
	var le = cur-1,
	    ri = cur+1,
	    to = cur-4,
	    bo = cur+4;
	var lblock = "block"+le,
	    rblock = "block"+ri,
	    tblock = "block"+to,
	    bblock = "block"+bo;
	if ((cur%4)-1>=0 && bc==lblock) {
		target.className = bc;
		blank.className = tc;
	} else if ((cur%4)+1<4 && bc==rblock) {
		target.className = bc;
		blank.className = tc;
	} else if (to>=0 && bc==tblock) {
		target.className = bc;
		blank.className = tc;
	} else if (bo<=15 && bc==bblock) {
		target.className = bc;
		blank.className = tc;
	}
	for (var i = 0; i < 15; i++) {
		var cid = "p"+i;
		var cblock = "block"+i;
		var blo = document.getElementById(cid);
		if (blo.className!=cblock)
			break;
	}
	if (i == 15) {
    document.getElementById("message").className = "success";
  }
}

function onbtnclick(event) {
	var last = document.getElementById("p15");
	for (var i = 0; i < 200; i++) {
		var la = last.className;
		var cur;
	    if (la=="block0") cur = 0;
	    else if (la=="block1") cur = 1;
	    else if (la=="block2") cur = 2;
	    else if (la=="block3") cur = 3;
	    else if (la=="block4") cur = 4;
	    else if (la=="block5") cur = 5;
	    else if (la=="block6") cur = 6;
	    else if (la=="block7") cur = 7;
	    else if (la=="block8") cur = 8;
	    else if (la=="block9") cur = 9;
	    else if (la=="block10") cur = 10;
	    else if (la=="block11") cur = 11;
	    else if (la=="block12") cur = 12;
	    else if (la=="block13") cur = 13;
	    else if (la=="block14") cur = 14;
	    else if (la=="block15") cur = 15;
		var ran = parseInt(Math.random()*5);
		if (ran==0 && (cur%4)-1>=0) {
            var ind = cur-1;
            var eblock = "block"+ind;
            var exchange = document.getElementsByClassName(eblock)[0];
            last.className = eblock;
            exchange.className = la;
		} else if (ran==1 && (cur%4)+1<4) {
			var ind = cur+1;
            var eblock = "block"+ind;
            var exchange = document.getElementsByClassName(eblock)[0];
            last.className = eblock;
            exchange.className = la;
		} else if (ran==2 && cur-4>=0) {
			var ind = cur-4;
            var eblock = "block"+ind;
            var exchange = document.getElementsByClassName(eblock)[0];
            last.className = eblock;
            exchange.className = la;
		} else if (ran==3 && cur+4<=15) {
			var ind = cur+4;
            var eblock = "block"+ind;
            var exchange = document.getElementsByClassName(eblock)[0];
            last.className = eblock;
            exchange.className = la;
		}
	}
	while (last.className != "block15") {
		var la = last.className;
		var cur;
	    if (la=="block0") cur = 0;
	    else if (la=="block1") cur = 1;
	    else if (la=="block2") cur = 2;
	    else if (la=="block3") cur = 3;
	    else if (la=="block4") cur = 4;
	    else if (la=="block5") cur = 5;
	    else if (la=="block6") cur = 6;
	    else if (la=="block7") cur = 7;
	    else if (la=="block8") cur = 8;
	    else if (la=="block9") cur = 9;
	    else if (la=="block10") cur = 10;
	    else if (la=="block11") cur = 11;
	    else if (la=="block12") cur = 12;
	    else if (la=="block13") cur = 13;
	    else if (la=="block14") cur = 14;
	    else if (la=="block15") cur = 15;
		var ran = parseInt(Math.random()*5);
		if (ran==0 && (cur%4)-1>=0) {
            var ind = cur-1;
            var eblock = "block"+ind;
            var exchange = document.getElementsByClassName(eblock)[0];
            last.className = eblock;
            exchange.className = la;
		} else if (ran==1 && (cur%4)+1<4) {
			var ind = cur+1;
            var eblock = "block"+ind;
            var exchange = document.getElementsByClassName(eblock)[0];
            last.className = eblock;
            exchange.className = la;
		} else if (ran==2 && cur-4>=0) {
			var ind = cur-4;
            var eblock = "block"+ind;
            var exchange = document.getElementsByClassName(eblock)[0];
            last.className = eblock;
            exchange.className = la;
		} else if (ran==3 && cur+4<=15) {
			var ind = cur+4;
            var eblock = "block"+ind;
            var exchange = document.getElementsByClassName(eblock)[0];
            last.className = eblock;
            exchange.className = la;
		}
	}
}
function onloadEvent() {
	var mydiv = document.getElementById("puzzle");
	var frag = document.createDocumentFragment();
	var mybtn = document.getElementById("button");
	for (var i = 0; i < 16; i++) {
        var puz = document.createElement("div");
        puz.className = "block"+i;
        puz.id = "p"+i;
        frag.appendChild(puz);
	}
	mydiv.appendChild(frag);
  if (IsPC()) {
    mydiv.addEventListener("click", onclickEvent, false);
  } else {
    mydiv.addEventListener("touchstart", onclickEvent, false);
  }
  onbtnclick();
}





window.addEventListener("load", onloadEvent, false);