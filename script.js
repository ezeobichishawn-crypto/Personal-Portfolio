// ==============================
// MOBILE MENU
// ==============================

const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );
    });
}


// ==============================
// CLOSE MOBILE MENU
// WHEN A LINK IS CLICKED
// ==============================

const navigationLinks =
    document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

        if (menuButton) {
            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );
        }

    });

});


// ==============================
// FOOTER YEAR
// ==============================

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


// ==============================
// CONTACT FORM
// ==============================

// const contactForm =
//     document.getElementById("contactForm");

// const formMessage =
//     document.getElementById("formMessage");


// if (contactForm) {

//     contactForm.addEventListener(
//         "submit",
//         function (event) {

//             // Stop the page from refreshing
//             event.preventDefault();

//             if (formMessage) {

//                 formMessage.textContent =
//                     "Thank you! Your message has been received.";

//             }

//             // Clear the form
//             contactForm.reset();

//         }
//     );

// }


// ==============================
// SIMPLE SCROLL EFFECT
// ==============================

const sections =
    document.querySelectorAll("section");

const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },
        {
            threshold: 0.1
        }
    );


sections.forEach(function (section) {

    observer.observe(section);

});