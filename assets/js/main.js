(function () {
	"use strict";

	var toggle = document.querySelector(".nav-toggle");
	var body = document.body;

	if (toggle) {
		toggle.addEventListener("click", function () {
			var isOpen = body.classList.toggle("nav-open");
			toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
		});

		document.querySelectorAll(".nav-links a").forEach(function (link) {
			link.addEventListener("click", function () {
				body.classList.remove("nav-open");
				toggle.setAttribute("aria-expanded", "false");
			});
		});

		document.addEventListener("keydown", function (event) {
			if (event.key === "Escape" && body.classList.contains("nav-open")) {
				body.classList.remove("nav-open");
				toggle.setAttribute("aria-expanded", "false");
				toggle.focus();
			}
		});
	}

	document.querySelectorAll(".project-card details").forEach(function (details) {
		details.addEventListener("toggle", function () {
			if (details.open) {
				document.querySelectorAll(".project-card details[open]").forEach(function (other) {
					if (other !== details) other.open = false;
				});
			}
		});
	});
})();
