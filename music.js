// ======================================
// PLAYLIST
// ======================================

const songs = [
{
    title: "Jaanu's Song",
    artist: "Janani",
    description: "Jaanu's Love",
    src: "audio/Jaanu's Song.mp3",
    cover: "images/Jaanu.png"
},
{
    title: "Vishu's Song",
    artist: "Vishal",
    description: "Vishu's Love",
    src: "audio/Vishu's Song.mp3",
    cover: "images/Vishu.png"
}
];

// ======================================

const audio = document.getElementById("audio");

const title = document.getElementById("title");
const artist = document.getElementById("artist");
const description = document.getElementById("description");

const cover = document.getElementById("cover");

const vinyl = document.getElementById("vinyl");

const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const repeatBtn = document.getElementById("repeat");
const likeBtn = document.getElementById("like");

const volume = document.getElementById("volume");

const progress = document.querySelector(".progress");
const progressFill = document.querySelector(".progress-fill");

const current = document.getElementById("current");
const duration = document.getElementById("duration");

const playlist = document.querySelectorAll(".song");

let songIndex = 0;

let repeat = false;

// ======================================

loadSong(songIndex);

// ======================================

function loadSong(index){

title.innerHTML = songs[index].title;

artist.innerHTML = songs[index].artist;

description.innerHTML = songs[index].description;

cover.src = songs[index].cover;

audio.src = songs[index].src;

playlist.forEach(song=>song.classList.remove("active-song"));

playlist[index].classList.add("active-song");

}

// ======================================

function playSong(){

audio.play();

playBtn.innerHTML = "❚❚";

vinyl.classList.add("rotate");

}

function pauseSong(){

audio.pause();

playBtn.innerHTML = "▶";

vinyl.classList.remove("rotate");

}

// ======================================

playBtn.onclick=()=>{

if(audio.paused){

playSong();

}

else{

pauseSong();

}

};

// ======================================

nextBtn.onclick=()=>{

songIndex++;

if(songIndex>=songs.length){

songIndex=0;

}

loadSong(songIndex);

playSong();

};

// ======================================

prevBtn.onclick=()=>{

songIndex--;

if(songIndex<0){

songIndex=songs.length-1;

}

loadSong(songIndex);

playSong();

};

// ======================================

playlist.forEach(song=>{

song.onclick=()=>{

songIndex=parseInt(song.dataset.index);

loadSong(songIndex);

playSong();

};

});

// ======================================

audio.addEventListener("timeupdate",()=>{

const percent=(audio.currentTime/audio.duration)*100;

progressFill.style.width=percent+"%";

current.innerHTML=format(audio.currentTime);

duration.innerHTML=format(audio.duration);

});

// ======================================

progress.onclick=(e)=>{

const width=progress.clientWidth;

const click=e.offsetX;

audio.currentTime=(click/width)*audio.duration;

};

// ======================================

function format(time){

if(isNaN(time)) return "0:00";

let minutes=Math.floor(time/60);

let seconds=Math.floor(time%60);

if(seconds<10){

seconds="0"+seconds;

}

return minutes+":"+seconds;

}

// ======================================

volume.oninput=()=>{

audio.volume=volume.value;

};

// ======================================

audio.onended=()=>{

if(repeat){

audio.currentTime=0;

playSong();

}

else{

nextBtn.click();

}

};

// ======================================

repeatBtn.onclick=()=>{

repeat=!repeat;

if(repeat){

repeatBtn.style.background="#df5b94";

repeatBtn.style.color="white";

}

else{

repeatBtn.style.background="white";

repeatBtn.style.color="#df5b94";

}

};

// ======================================

let liked=false;

likeBtn.onclick=()=>{

liked=!liked;

if(liked){

likeBtn.style.background="#ff4f8d";

likeBtn.style.color="white";

}

else{

likeBtn.style.background="white";

likeBtn.style.color="#df5b94";

}

};

// ======================================

audio.volume=1;
