// ================================
// LOVE FORTUNE GENERATOR
// ================================

const fortunes = [

"Cupid checked today's stars... Jaanu wins today by one extra hug! ❤️",

"The universe smiled today. Jaanu's heart is overflowing with love! 💖",

"Today's prediction: Jaanu is officially the Love Champion! 🏆",

"The Love Meter almost exploded... Jaanu wins today! ❤️",

"Breaking News! Cupid crowned Jaanu today's romantic champion! 👑",

"Love can't really be measured... but today Jaanu gets the crown! 💕",

"After counting millions of heartbeats... Jaanu wins today! ❤️",

"The stars couldn't decide... but eventually picked Jaanu! ✨",

"Today's love forecast: 100% romance and Jaanu wins! 🌸",

"According to the Heart Council... Jaanu loves just a tiny bit more today!  💘"

];
// ================================

const quotes = [

"Love is not about who loves more, it's about choosing each other every day.",

"Every love story is beautiful, but ours is my favorite.",

"Home is wherever I'm with you.",

"You are my today and all of my tomorrows.",

"The best place in the world is next to you.",

"I still fall for you every single day.",

"You are the reason behind my happiest memories.",

"Together is my favorite place to be.",

"Forever begins every morning with you.",

"Your smile is my favorite sunrise.",

"No matter where life takes us, I'll choose you.",

"We met for a reason, and I'll love you for every season.",

"You make ordinary days unforgettable.",

"Love grows stronger with every shared moment.",

"My heart found its home in yours.",

"Every heartbeat reminds me of you.",

"Life is beautiful because you're in it.",

"Our story is my favorite adventure.",

"You're the best chapter of my life.",

"You'll always be my favorite notification. ❤️"

];

// ================================

const fill = document.getElementById("fill");

const percent = document.getElementById("percent");

const result = document.getElementById("result");

const fortune = document.getElementById("fortune");

const quote = document.getElementById("quote");

const again = document.getElementById("again");

// ================================

function generateLoveFortune(){

result.classList.add("hidden");

fill.style.width="0%";

percent.innerHTML="0%";

const loading=document.querySelector(".loading");

loading.innerHTML="Calculating today's love prediction...";

let love=Math.floor(Math.random()*7)+94;

let current=0;

let timer=setInterval(()=>{

current++;

fill.style.width=current+"%";

percent.innerHTML=current+"%";

if(current>=love){

clearInterval(timer);

setTimeout(()=>{

loading.innerHTML="Love Fortune Ready ❤️";

fortune.innerHTML=fortunes[Math.floor(Math.random()*fortunes.length)];

quote.innerHTML=quotes[Math.floor(Math.random()*quotes.length)];

result.classList.remove("hidden");

result.scrollIntoView({

behavior:"smooth"

});

},500);

}

},20);

}

// ================================

window.onload=generateLoveFortune;

// ================================

again.onclick=generateLoveFortune;
