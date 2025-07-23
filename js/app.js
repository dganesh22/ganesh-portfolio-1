let navBtn = document.querySelector(".nav-btn");
let menu = document.querySelector(".menu-items");

navBtn.addEventListener("click", function(e){
    menu.classList.toggle("active-menu");
});

// for developer designations
let designations = ["Frontend", "Java", "FullStack"]
let msg = document.getElementById("msg");

let randomId = () => Math.floor(Math.random() * 3);

setInterval(function(){
    msg.innerText = designations[randomId()]
},4000)


/* switching active class based on section id */
const sections = document.querySelectorAll("section")
const menuLinks = document.querySelectorAll(".menu-items a")

console.log(`section = `, sections)
console.log(`menulinks =`, menuLinks)

const options = {
    root: null, // observe against view port
    rootMargin: "0px",
    threshold: 0.5 // trigger when atleast 50% of the section is visible
}

const menuObserver = new IntersectionObserver(function(entries,observer){
    entries.forEach(item => {
        if(item.isIntersecting) {
            // remove 'active' class
            menuLinks.forEach(link => link.classList.remove("active"));

            // add 'active' class
            const targetId = item.target.id;
            const activeLink = document.querySelector(`.menu-items a[href="#${targetId}"]`);
            if(activeLink) {
                activeLink.classList.add("active")
            }
        }
    })
},options);


// observe each section id
sections.forEach(item => {
    menuObserver.observe(item)
});