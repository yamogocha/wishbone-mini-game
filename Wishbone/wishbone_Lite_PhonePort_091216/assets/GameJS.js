/********** GAMEPLAY SPECIFIC JAVASCRIPT **********/
//This function resets the entire game and includes everything that needs to be reset, including updating the numbers. This will be different for each game
var restartGame = function() {
	document.getElementById("outro-container").style.display = 'none';
	counttap = 0;
	whichimage = 1;
	questions = [ 
		{ question: "Sneaker or Heels?", img: "image1.jpg" },
		{ question: "Beach or Pool?", img: "image2.jpg" },
		{ question: "Cat person or Dog person?", img: "image3.jpg" },
		{ question: "WYR : Always be hot or Always be cold", img: "image4.jpg" },
		{ question: "WYR : Spend your life in the desert or in Antarctica", img: "image5.jpg" },		
	];
	document.getElementById("tutorials").style.display = "block";
	document.getElementById("results").style.display = "none";
	document.getElementById("text").className = "text";
	document.getElementById("centerdim").className = "dim blink1";
	document.getElementById("tapright").style.display = "block";
	document.getElementById("tapleft").style.display = "block";
	document.getElementById("lineright").className = "line lineright";
	document.getElementById("lineleft").className = "line lineleft";
}

var finishGameplay = function() {
	if (typeof gotoEndScreen != 'undefined') {
		//this is a function in the engineering templates and will only work once this project is uploaded to the UI
		gotoEndScreen();
		//report that the user has finished the game
		if (typeof mn != 'undefined'){mn("play","100%");}
	}
	else {
		displayInstallScreen();
	}
}
/********** GAMEPLAY SPECIFIC JAVASCRIPT **********/


var counttap = 0;
var whichimage = 1;
var questions = [ 
	{ question: "Sneaker or Heels?", img: "image1.jpg" },
	{ question: "Beach or Pool?", img: "image2.jpg" },
	{ question: "Cat person or Dog person?", img: "image3.jpg" },
	{ question: "WYR : Always be hot or Always be cold", img: "image4.jpg" },
	{ question: "WYR : Spend your life in the desert or in Antarctica", img: "image5.jpg" },		
];

var tap = function () {
	document.getElementById("tutorials").style.display = "none";
	document.getElementById("text").className = "text black";
	document.getElementById("centerdim").className = "dim appear";
	document.getElementById("tapright").style.display = "none";
	document.getElementById("tapleft").style.display = "none";
	document.getElementById("results").style.display = "block";
	counttap++;
	whichimage++;
	generateheight();
	resetposition();

	if(counttap==1) {
		if (typeof mn != 'undefined'){mn("play","25%");}
	}
	if(counttap==2) {
		if (typeof mn != 'undefined'){mn("play","50%");}
	}
	if(counttap==4) {
		if (typeof mn != 'undefined'){mn("play","75%");}
	}
	if(counttap==5) {
		generateheight();
		setTimeout(function(){
			if (typeof gotoEndScreen != 'undefined') {
				gotoEndScreen();
				if(typeof mn != 'undefined'){mn("play","100%");}
			}
			else {
				displayInstallScreen();
			}
		}, 1000);
	}
}

var allowright = function() {
	tap();
	document.getElementById("check").className = "check checkright";
	document.getElementById("lineright").style.borderColor = "#fc5566";
	document.getElementById("lineleft").style.borderColor = "white";
}

var allowleft = function() {
	tap();
	document.getElementById("check").className = "check checkleft";
	document.getElementById("lineleft").style.borderColor = "#fc5566";
	document.getElementById("lineright").style.borderColor = "white";
}

var generateheight = function() {
	var randomright = Math.floor((Math.random() * 26) + 30);
	var randomleft = 100 - randomright;
	document.getElementById("lineright").style.height = randomright - 19 + "%";
	document.getElementById("lineleft").style.height = randomleft - 19 + "%";
	document.getElementById("percentright").innerHTML = randomright + "%";
	document.getElementById("percentleft").innerHTML = randomleft + "%";
	document.getElementById("percentright").style.bottom = randomright + "%";
	document.getElementById("percentleft").style.bottom = randomleft + "%";
}

var slideup = function() {
		if(whichimage % 2 == 0){
			document.getElementById("img2").style.webkitAnimationName = "slideaway";
			document.getElementById("img2").style.webkitAnimationDuration = ".3s";
			document.getElementById("img2").style.webkitAnimationTimingFunction = "linear";
			document.getElementById("img2").style.webkitAnimationFillMode = "forwards";
			setTimeout(function(){
				document.getElementById("img2").style.zIndex = "-1";
			},300);

			document.getElementById("img1").style.webkitAnimationName = "slideup";
			document.getElementById("img1").style.webkitAnimationDuration = ".3s";
			document.getElementById("img1").style.webkitAnimationTimingFunction = "linear";
			document.getElementById("img1").style.webkitAnimationFillMode = "forwards";
			document.getElementById("img1").style.zIndex = "0";
		}else{
			document.getElementById("img1").style.webkitAnimationName = "slideaway";
			document.getElementById("img1").style.webkitAnimationDuration = ".3s";
			document.getElementById("img1").style.webkitAnimationTimingFunction = "linear";
			document.getElementById("img1").style.webkitAnimationFillMode = "forwards";
			setTimeout(function(){
				document.getElementById("img1").style.zIndex = "-1";
			},300);
			document.getElementById("img2").style.webkitAnimationName = "slideup";
			document.getElementById("img2").style.webkitAnimationDuration = ".3s";
			document.getElementById("img2").style.webkitAnimationTimingFunction = "linear";
			document.getElementById("img2").style.webkitAnimationFillMode = "forwards";
			document.getElementById("img2").style.zIndex = "0";
		}
}

var randomdetails = function() {
	var i = Math.floor((Math.random() * questions.length));
	console.log(i);
	document.getElementById("text").innerHTML = questions[i].question;
	if(whichimage % 2 == 0){
		document.getElementById("img1").style.backgroundImage = "url(https://a.mnectar.com/uploads/creative/162/1227/" +questions[i].img + ")";
	}else{
		document.getElementById("img2").style.backgroundImage = "url(https://a.mnectar.com/uploads/creative/162/1227/" +questions[i].img + ")";
	}
	setTimeout(function(){
		var removeojb = questions[i];
		console.log(removeojb.img);
		if(questions.indexOf(removeojb) !== -1){
			questions.splice(i, 1);
			i--;
		}
	}, 500);
}
randomdetails();

var resetposition = function() {
	setTimeout(function(){
		slideup();
		randomdetails();
		document.getElementById("text").className = "text black appeartext";
		document.getElementById("centerdim").className = "dim";
		document.getElementById("results").style.display = "none";
		setTimeout(function(){
			document.getElementById("tapright").style.display = "block";
			document.getElementById("tapleft").style.display = "block";
		}, 500);
	}, 1000);
}



