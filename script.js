let typed = new Typed(".dev-text", {
    strings: ["Frontend Developer", "UI/UX Designer", "Graphics Designer"],
    typeSpeed: 100,
    backSpeed: 70,
    backDelay: 1000,
    startDelay: 100,
    loop: true
})

// ------------- Scroll reveal---------------------
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.sr-t', { origin: 'top' });
ScrollReveal().reveal('.sr-r', { origin: 'right' });
ScrollReveal().reveal('.sr-l', { origin: 'left' });
ScrollReveal().reveal('.sr-b', { origin: 'bottom' });

// -------------- For Menubar navlinks-------------------------
let menubar = document.querySelector('#menu-bar');
let navbar = document.querySelector('.nav-list');
menubar.onclick = () => {
    menubar.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// -------------- For active navlinks-------------------------
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('nav a');
window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 120;
        let height = section.offsetHeight;
        let id = section.getAttribute("id")
        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector('nav a[href*=' + id + ']').classList.add("active");
                menubar.classList.remove('bx-x');
                navbar.classList.remove('active');
            });
        }
    })
}
// --------------------------- Form response------------------------
// const scriptURL = 'https://script.google.com/macros/s/AKfycbwXN-CfzTwePc4oBcI8BOZ-Aw5DP2EcU7b9TRe6OdYvKf5VI3ZgKaN5xPGwG0ppg5Sw/exec'
// const form = document.forms['submit-to-google-sheet']
// const msg = document.getElementById("#msg")

// form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//         .then(response => {
//             msg.innerHTML = "Sent Successfully"
//             setTimeout(function () {
//                 msg.innerHTML = ""
//             }, 2000)
//             form.reset()
//         })
//         .catch(error => console.error('Error!', error.message))
// })










