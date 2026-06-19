const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

let scale = 1;
let noClicks = 0;

const messages = [
    "Are you sure? 🥺",
    "Think again! ❤️",
    "Really? 😭",
    "Don't break my heart 💔",
    "Please? 🥹",
    "Pretty please? 🌹",
    "Still no? 😭",
    "You know you want to 😏",
    "Last chance! 💘",
    "I'm running out of places! 😂"
];

function createHearts(){

    for(let i=0;i<100;i++){

        const heart=document.createElement("div");

        heart.innerHTML="❤️";
        heart.className="heart";

        heart.style.left=Math.random()*100+"vw";
        heart.style.animationDuration=
        (Math.random()*3+2)+"s";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },5000);
    }
}

function showSuccess(){

    document.getElementById("proposal").style.display="none";
    document.getElementById("success").style.display="block";

    createHearts();
}

yesBtn.addEventListener("click",showSuccess);

function moveNoButton(){

    noClicks++;

    if(noClicks<=messages.length){
        noBtn.textContent=messages[noClicks-1];
    }

    scale+=0.35;
    yesBtn.style.transform=`scale(${scale})`;

    const maxX=
    window.innerWidth-noBtn.offsetWidth-20;

    const maxY=
    window.innerHeight-noBtn.offsetHeight-20;

    const randomX=Math.random()*maxX;
    const randomY=Math.random()*maxY;

    noBtn.style.position="fixed";
    noBtn.style.left=randomX+"px";
    noBtn.style.top=randomY+"px";
}



// Desktop
noBtn.addEventListener("click", moveNoButton);

// Mobile
noBtn.addEventListener("touchstart", function(e){
    e.preventDefault();
    moveNoButton();
});