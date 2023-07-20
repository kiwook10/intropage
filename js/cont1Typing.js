let text = "개발자를 희망하는 김기욱입니다.";
let intext = "";
let i = 0;

const C1_text = document.querySelector(".cont1_text .C1_text");

let autotyping = setInterval(function(){
    startTyping();
},100);


function startTyping(){ 
    intext = text[i]; 
    i += 1; 
    C1_text.innerText += intext;
    
    if(i > text.length-1){
        clearInterval(autotyping); 
        setTimeout(function(){
            C1_text.innerText = ""; 
            i = 0; 
            autotyping = setInterval(function(){
                startTyping();
            },100); 
        },3000); 
    }
}