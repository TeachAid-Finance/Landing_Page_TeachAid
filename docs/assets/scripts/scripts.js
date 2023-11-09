
// Contraiga la barra de navegación agregando la clase top-nav-collapse class
window.onscroll = function () {
	scrollFunction();
	scrollFunctionBTT();
};

window.onload = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.documentElement.scrollTop > 30) {
		document.getElementById("navbarOpen").classList.add("top-nav-collapse");
	} else if ( document.documentElement.scrollTop < 30 ) {
		document.getElementById("navbarOpen").classList.remove("top-nav-collapse");
	}
}

// Navbar en movil
let elements = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");

for (let i = 0; i < elements.length; i++) {
	elements[i].addEventListener("click", () => {
		document.querySelector(".offcanvas-collapse").classList.toggle("open");
	});
}

document.querySelector(".navbar-toggler").addEventListener("click", () => {
  	document.querySelector(".offcanvas-collapse").classList.toggle("open");
});

// Coloca el cursor sobre el escritorio
function toggleDropdown(e) {
	const _d = e.target.closest(".dropdown");
	let _m = document.querySelector(".dropdown-menu", _d);

	setTimeout(
		function () {
		const shouldOpen = _d.matches(":hover");
		_m.classList.toggle("show", shouldOpen);
		_d.classList.toggle("show", shouldOpen);

		_d.setAttribute("aria-expanded", shouldOpen);
		},
		e.type === "mouseleave" ? 300 : 0
	);
}


/* Rotacion texto - Ciclo de palabra */
var checkReplace = document.querySelector('.replace-me');
if (checkReplace !== null) { 
	var replace = new ReplaceMe(document.querySelector('.replace-me'), {
		animation: 'animated fadeIn',                       // Animacion clase o clases
		speed: 2000,                                        // Retraso entre cada frase en milisegundos
		separator: ',',                                     // Separador de frases
		hoverStop: false,                                   // Detener el rotador al pasar el cursor sobre la frase
		clickChange: false,                                 // Cambiar frase al hacer clic
		loopCount: 'infinite',                              // Recuento de bucles: 'infinito' o número
		autoRun: true,                                      // Ejecuta el rotador automáticamente
		onInit: false,                                      // Funcion
		onChange: false,                                    // Funcion
		onComplete: false                                   // Funcion
	});
}


/* Card Slider - Swiper */
var cardSlider = new Swiper('.card-slider', {
	autoplay: {
		delay: 4000,
		disableOnInteraction: false
	},
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	slidesPerView: 3,
	spaceBetween: 70,
	breakpoints: {
		// Cuando la ventana es <= 767px
		767: {
			slidesPerView: 1
		},
		// Cuando la ventana es <= 991px
		991: {
			slidesPerView: 2,
			spaceBetween: 40
		}
	}
});


