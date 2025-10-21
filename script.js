const greetingElement = document.getElementById("greeting");
// const creates a constant variable.
// greetingElement is our connection to the id="greeting" in our HTML paragraph.
// document is basically our web page.
//getElementById is to assign whatever comes next to said ID.

const hour = new Date().getHours();
// again const creates a constant variable.
// hour is our variable.
// new Date() creates the date and time
//getHours gets the current hour

let greeting;
if (hour < 12) {
    greeting = "Good morning! Welcome to my prortfolio."
} else if (hour < 18) {
    greeting = "Good afternoon! Thank you for visiting my world."
} else {
    greeting = "Good evening! Thank you coming. I hope you had a great day."
}

greetingElement.textContent = greeting; //adds the greeting text to html

function setAnimationSpeed(seconds) { // used to specify and set animation speed.
    greetingElement.style.animationDuration = `${seconds}s` // how long the animation runs for the greeting element
}

if (hour < 12) {
    setAnimationSpeed(8); // loop: if time is less than 12, animation will move 8 seconds
} else {
    setAnimationSpeed(12); // loop: every other time, animation will move 12 seconds
}

greetingElement.textContent = greeting;

const navLinks = document.querySelectorAll("nav a");
// const creates a constant variable.
// navLinks is the variable

navLinks.forEach(link => {
    link.addEventListener("click",function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({behavior: "smooth"});
    })
})

//document.querySelectorAll gets all <a> tags inside the <nav>.
//addEventListener("click",) basicaslly executes the code when clicked.
//event.preventDefault() stops the normal "jump" action.
//scrollIntoView ({behavior: "smooth"}) will smoothly scroll to that section.

const backToTopBtn = document.getElementById("backToTop");
// backToTopBtn is the variable

// This will show the button when scrolling down.
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTopBtn.style.display = "block";
    }
    else {backToTopBtn.style.display = "none";
    }
});

//This will scroll back to the top when clicked.
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth"});
});

// window.scrollY is used to show how far down the page you've scrolled:
// if past 200px, the button will show and if not, hidden.
// window.scrollTo() smoothly scrolls back up.