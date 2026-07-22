const pages = document.querySelectorAll(".page");



const text1 = `
Dear Musfirah Kanwal ❤️

Sometimes words are not enough to express regret,
but I still want to say sorry from my heart.

I'm truly sorry for the mistakes I made.

I never wanted to hurt you or become the reason
behind your sadness.

I just want one chance to make things right.

🤍 I'm Sorry.
`;



const text2 = `
Musfirah Kanwal...

Tum meri duniya ka sabse khoobsurat hissa ho.

Jo ghaltiyan mujh se hui,
unka mujhe dil se afsos hai.

Main un ghaltiyon ko theek karna chahta hoon
aur dobara wohi cheezen nahi karunga.

Tumhari khushi aur trust mere liye bohot important hai ❤️
`;



const text3 = `
Zyada nahi maang raha...

Bas ek dafa baat kar lo. 🥺

Har rishte mein maslay aate hain,
lekin unhe baat karke solve kiya ja sakta hai.

Mujhe ek chance de do taake hum
mil kar issues ko solve kar saken.

Ab se woh cheezen dobara nahi hongi
jo tumhe buri lagti hain.

Jaisa tum kaho gi,
main waisa karne ki poori koshish karunga.

Please... bas ek dafa baat kar lo ❤️
`;







function showPage(id){

    pages.forEach(page=>{
        page.classList.remove("active");
    });


    document.getElementById(id).classList.add("active");

}





function start(){


let music=document.getElementById("music");


if(music){

music.play().catch(()=>{});

}


showPage("page2");


typeWriter(
document.getElementById("text1"),
text1
);


}







function goMemory(){

showPage("memory");

}






function next(number){


showPage("page"+number);



if(number==4){

typeWriter(
document.getElementById("text3"),
text3
);

}


}








function typeWriter(element,text){


element.innerHTML="";


let i=0;


let timer=setInterval(()=>{


element.innerHTML += text.charAt(i);


i++;


if(i>=text.length){

clearInterval(timer);

}


},35);


}








// Start page 3 text automatically

document.addEventListener("click",()=>{


let p3=document.getElementById("page3");


if(p3.classList.contains("active")){


typeWriter(
document.getElementById("text2"),
text2
);


}


});









// Photo slideshow

let photos=[

"photo2.jpg",

"photo3.jpg",

"photo4.jpg"

];


let photoIndex=0;



setInterval(()=>{


let img=document.getElementById("slide");


if(img){


photoIndex++;


if(photoIndex>=photos.length){

photoIndex=0;

}



img.style.opacity="0";


setTimeout(()=>{


img.src=photos[photoIndex];


img.style.opacity="1";


},500);



}


},2000);









// No button moving

const no=document.getElementById("no");


if(no){


no.addEventListener("mouseover",()=>{


no.style.transform=

`translate(${Math.random()*150-75}px,
${Math.random()*100-50}px)`;


});


}







// Yes button

const yes=document.getElementById("yes");


if(yes){


yes.onclick=()=>{


showPage("final");


};


}







// Floating hearts

function createHeart(){


let heart=document.createElement("div");


heart.innerHTML="❤️";


heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-20px";

heart.style.fontSize="25px";

heart.style.animation="float 7s linear";


document.body.appendChild(heart);



setTimeout(()=>{

heart.remove();

},7000);


}



setInterval(createHeart,700);
