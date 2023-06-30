window.addEventListener('scroll', function() {
	const topBar = document.querySelector('.top-bar');
	const scrollPosition = window.scrollY;
  
	if (scrollPosition > 450 && !topBar.classList.contains('animated')) {
	  topBar.classList.add('fixed');
	  setTimeout(function() {
		topBar.classList.add('animated');
	  }, 0);
	} else if (scrollPosition <= 450 && topBar.classList.contains('animated')) {
	  topBar.classList.remove('animated');
	  setTimeout(function() {
		topBar.classList.remove('fixed');
	  }, 400);
	}
  });


$(document).on('click', 'a[href^="#"]', function (e) {
	e.preventDefault();

	$('html, body').animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 900);
});

let t;
$(document).ready(() => {
	t = $(".ip").html();
})
$(document).on("click", ".ip", () => {
	let copy = document.createElement("textarea");
	copy.style.position = "absolute";
	copy.style.left = "-99999px";
	copy.style.top = "0";
	copy.setAttribute("id", "ta");
	document.body.appendChild(copy);
	copy.textContent = t;
	copy.select();
	document.execCommand("copy");
	$(".ip").html("<span class='extrapad'>IP скопійовано!</span>");
	setTimeout(function () {
		$(".ip").html(t);
		var copy = document.getElementById("ta");
		copy.parentNode.removeChild(copy);
	}, 1000);
});

var server = "mysticsurvival.fun";

var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.mcstatus.io/v2/status/java/" + server);
xhr.onload = function () {
	var data = JSON.parse(xhr.responseText);
	if (data.online) {
		document.getElementById("server").innerHTML =
			"<span style='color:#FFFFE0'>  </span><span style='color:#2f8e42'>" + data.players.online + "</span>";
	} else {
		document.getElementById("server").innerHTML =
			"";
	}
};
xhr.send();
