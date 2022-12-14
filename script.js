$(document).ready(function(){
    //funzione sipario
    $('.container-1 .content-1 .btn-init').click(function() {
        $('.container-1').toggleClass('off');
        $('header').toggleClass('on');
        window.setTimeout(function(){
            $('.home .home-h3').toggleClass('on');
        },2000);
        window.setTimeout(function(){
            $('.home .home-h1').toggleClass('on');
        },2700);
        window.setTimeout(function(){
            $('.home .home-h1 .home-span').toggleClass('on');
        },3000);
        window.setTimeout(function(){
            $('.home .home-p').toggleClass('on');
        },4200);
        window.setTimeout(function(){
            $('.home a').toggleClass('on');
        },5000);
    });
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    $('.works #icon-x').click(function() {
        $(this).removeClass('on');
        $('.works .accordion-box').removeClass('on');
    });
    $('#palette').click(function() {
        $(this).toggleClass('icon-rotate');
        $('header .theme-toggler span').toggleClass('themeon');
    });
    //funzione per far scomparire le carte skill 
    $('#click-skills, #click-soft, #click-tool').click(function() {
        $('.skills #icon-x-skill').toggleClass('on');
        $('.skills .skill-container').toggleClass('animate__animated animate__backOutUp');
        window.setTimeout(function(){
            $('.skills .skill-container').toggleClass('off');
        },750);
        //$('.skills .skill-container').toggleClass('off');
    });
    $('#click-skills').click(function() {
        window.setTimeout(function(){
            $('.skill-box').toggleClass('on');
        },750);
    });
    $('#click-soft').click(function(){
        window.setTimeout(function(){
            $('.soft-box').toggleClass('on');
        },750);
       
    });
    $('#click-tool').click(function(){
        window.setTimeout(function(){
            $('.tools-box').toggleClass('on');
        },750);
    });
    $('.skills #icon-x-skill').click(function() {
        $('.skill-box.on').removeClass('on');
        $('.soft-box.on').removeClass('on');
        $('.tools-box').removeClass('on');
        $('.skills .skill-container.animate__animated.animate__backOutUp').removeClass('animate__animated animate__backOutUp');
    });
    // fare funzione apparire skills
    //fare funzione apparire soft 
    //fare funzione apparire tools
    // far riapparire le carte skill
    $('#icon-x-skill').click(function(){
        $('.skills #icon-x-skill').removeClass('on');
        $('.skills #skill-container').removeClass('off');
    });
    $('.works .book-container .book-card .details #extra-work').click(function(){
        $('.book-title').toggleClass('off');
        $('.book-container').toggleClass('animate__animated animate__backOutUp');
        window.setTimeout(function(){
            $('.book-container').toggleClass('off');
        },750);
        $('.works #icon-x').toggleClass('on');
        $('.works .accordion-box-1').toggleClass('on');
    });
    $('.works .book-container .book-card .details #prog-work').click(function(){
        $('.book-title').toggleClass('off');
        $('.book-container').toggleClass('animate__animated animate__backOutUp');
        window.setTimeout(function(){
            $('.book-container').toggleClass('off');
        },750);
        $('.works #icon-x').toggleClass('on');
        $('.works .accordion-box-2').toggleClass('on');
    });
    $('.works #icon-x').click(function() {
        $('.works #icon-x.on').removeClass('on');
        $('.works .accordion-box-1.on').removeClass('on');
        if($('.works .accordion-box-2.on')) {
            $('.works .accordion-box-2.on').removeClass('on');
        };
        $('.book-title.off').removeClass('off');
        $('.book-container.off').removeClass('off');
        $('.book-container.animate__animated.animate__backOutUp').removeClass('animate__animated animate__backOutUp');
        $('.book-container').toggleClass('animate__animated animate__backInDown');
        window.setTimeout(function(){
            $('.book-container.animate__animated.animate__backInDown').removeClass('animate__animated animate__backInDown');
        },750);
    });
   
    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
        $('header .theme-toggler span').removeClass('themeon');
    });
});

/* skills tab */
const tabs = document.querySelectorAll('[data-target]'),
      tabContent = document.querySelectorAll('[data-content]')
      
      tabs.forEach(tab => {
        tab.addEventListener('click',() => {
            const target = document.querySelector(tab.dataset.target)
            tabContent.forEach(tabContent => {
                tabContent.classList.remove('skill-active')
            })
            target.classList.add('skill-active')
            tab.forEach(tab => {
                tab.classList.remove('skill-active')
            })
            tab.classList.add('skill-active')
        })
      })

let themColor = document.querySelectorAll('.theme-toggler span');
themColor.forEach(color => color.addEventListener('click', () => {
    let background = color.style.background;
    //document.querySelector(':root').style.background = background;
    document.documentElement.style.setProperty('--yellow',background);
}));

const accordion = document.getElementsByClassName('contentbox');
for(i=0 ; i<accordion.length; i++) {
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    });
}

