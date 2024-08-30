function mymenufunction(){
    var menu=document.getElementById("mynavumenu");


    if(menu.className ==="nav-menu"){
        menu.className+="responsive";
    }
    else{
        menu.className==="nav-menu";
    }
}


// dark mode

const body=document.querySelector("body")
toggleswitch=document.getElementById("toggle-switch");

toggleswitch.addEventListener("click",()=>{
    body.classList.toggle("dark"); 
});

// typing effect

var typingeffect=new Typed(".typedTex",{
    Strings:["Designer","Coder","Developer"],
    loop:true,
    typeSpeed:100,
    backSpeed:80,
    backDelay:2000,
});

// scroll Animation

const sr=ScrollReveal({
    origin:"top",
    distance:"8opx",
    duration:2000,
    reset:true,
});

sr.reveal("featured-name",{delay:100});
sr.reveal("text-info",{delay:200});
sr.reveal("text-btn",{delay:200});
sr.reveal("socical-icons",{delay:200});
sr.reveal("featured-image",{delay:320});

sr.reveal(".project-box",{interval: 200});

sr.reveal(".top-header",{});

const srleft=ScrollReveal({
    origin: "left",
    distance:"80px",
    duration: 2000,
    reset: true,
})
srleft.reveal(".about-info",{delay:100});
srleft.reveal(".contact-info",{delay:100});

const srRight=ScrollReveal({
    origin:"left",
    distance:"80px",
    duration: 2000,
    reset: true,
})

srRight.reveal(".skill",{delay:100});
srRight.reveal(".skill-box",{delay:100});


// active link

const section=document.querySelectorAll(".section[id");

function scrollActive(){
    const scrollY=window.scrollY;

    sections.array.forEach(current=> {
        const sectionHeight=current.offsetHeight,
        sectionTop=current.offsetTop-50,
        sectionId=current.getAttribute["id"]
        
    });
}