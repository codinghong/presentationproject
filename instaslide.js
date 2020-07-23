
//console.log("I am working")
function navigateSlide() {
    const hBtn      = document.getElementById('hBtn');
    const leftBtn   = document.getElementById("leftBtn");
    const rightBtn  = document.getElementById("rightBtn");

    const slide0    = document.getElementById("slide0");
    const slide1    = document.getElementById("slide1");
    const slide2    = document.getElementById("slide2");
    
    const slides    = [slide0,slide1,slide2];

    let i           = 0;

    hBtn.addEventListener('click',function(){
        window.location.href = "index.html";
        //console.log('we got a click');
    });

    leftBtn.addEventListener('click',function(){
        // console.log("left button clicked");
        if(i===0){
            i=2;
            slides[2].style.display  ='block';
            slides[0].style.display  ='none';
            slides[1].style.display  ='none';
            return;
        }
        i -=1;
        slides[i+1].style.display   ='none';
        slides[i].style.display     ='block';
    });
    rightBtn.addEventListener('click',function(){
        // console.log("right button clicked");
        if(i===2){
            i=0;
            slides[0].style.display  ='block';
            slides[1].style.display  ='none';
            slides[2].style.display  ='none';
            return;
        }
        i +=1;
        slides[i-1].style.display   ='none';
        slides[i].style.display     ='block';
    });
        
}

navigateSlide();