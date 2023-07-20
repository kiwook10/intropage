
        const conts = document.querySelectorAll(".container > div");
    
        const click_area = document.querySelectorAll(".lists .list > a");


        for(let i=0; i<click_area.length; i++){
            click_area[i].onclick =function(event){

                event.preventDefault();

                let movePosition = conts[i].offsetTop;

                window.scrollTo ({
                    top:movePosition,
                    behavior:"smooth"
                })
            }
        }

        window.onscroll = function(){
          
            let scTop = window.scrollY;
            
           
            for(let j=0; j<conts.length; j++){
                
                if(scTop >= conts[j].offsetTop){
                    for(let i=0; i<click_area.length; i++){
                        click_area[i].classList.remove("on");
                    }               
                    click_area[j].classList.add("on");
                }
            }
        
        }