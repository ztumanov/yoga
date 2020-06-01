
window.addEventListener('DOMContentLoaded', function(){
    
    'use strict';

    //-------------------------- tabs ------------------------------------- 

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
    //-------------------------- slaider -------------------------------------

    let slider = document.querySelectorAll('.slider-item'),
        next = document.querySelector('.next'),
        prev = document.querySelector('.prev'),
        dots = document.querySelectorAll('.dot'),
        sliderdots = document.querySelector('.slider-dots');
    
    function hideSliderContent(c) {
        for (let i = c; i < slider.length; i++) {
            slider[i].classList.remove('show');
            slider[i].classList.add('hide');
        }
    }

    hideSliderContent(1);
    
    function showSlideContent(d) {
        if (slider[d].classList.contains('hide')) {
            slider[d].classList.remove('hide');
            slider[d].classList.add('show');
        }
    }

    let i = 0;
   
    next.addEventListener('click', function(event) {
        if ( i < 3 ) {
            i++;
            hideSliderContent(0);
        }else {
            i = 0;
            hideSliderContent(1);
            dots[3].classList.remove('dot-active');
        }
            showSlideContent(i);
            dots[i].classList.add('dot-active');
            dots[i-1].classList.remove('dot-active');
    });
    
    prev.addEventListener('click', function() {
        if ( i > 0 ) {
            i--;
        }else {
            i = 3;
            dots[0].classList.remove('dot-active');
        }
            hideSliderContent(0);
            showSlideContent(i);
            dots[i].classList.add('dot-active');
            dots[i+1].classList.remove('dot-active');
    });
   
    sliderdots.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('dot')) {
            for(let i = 0; i < dots.length; i++){
                if(target == dots[i]) {
                    hideSliderContent(0);
                    showSlideContent(i);
                    dots[i].classList.add('dot-active'); 
                }else{
                    dots[i].classList.remove('dot-active');
                  
                } 
            }
        }
    });
  

    //-------------------------- timer ------------------------------------- 

    let deadline = '2020-06-30';

    function getTimeRemaining(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date()),
        seconds  = Math.floor((t/1000) % 60),
        minutes  = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));

        return{
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function setCloack(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');
            timeInterval = setInterval(updateCloack, 1000);

        function updateCloack() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0){
                clearInterval(timeInterval);
            }
        }
    }

    setCloack('timer', deadline);

});

    



