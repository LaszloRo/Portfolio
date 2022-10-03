$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    $('#icon-x').click(function(){
        $(this).toggleClass('icon_rotate');
        $('.works .container').toggleClass('workon');
    });
    $('#palette').click(function() {
        $(this).toggleClass('icon-rotate');
        $('header .theme-toggler span').toggleClass('themeon');
    });
    //funzione per far scomparire le carte skill 
    $('#click-skills, #click-soft, #click-tool').click(function() {
        $('.skills #icon-x-skill').toggleClass('on');
        $('.skills .skill-container').toggleClass('off');
    });
    $('#click-skills').click(function() {
        $('.skill-box').toggleClass('on');
    });
    $('#click-soft').click(function(){
        $('.soft-box').toggleClass('on');
    });
    $('#click-tool').click(function(){
        $('.tools-box').toggleClass('on');
    });
    $('.skills #icon-x-skill').click(function() {
        $('.skill-box.on').removeClass('on');
        $('.soft-box.on').removeClass('on');
        $('.tools-box').removeClass('on');
    });
   
    // fare funzione apparire skills
    //fare funzione apparire soft 
    //fare funzione apparire tools
    // far riapparire le carte skill
    $('#icon-x-skill').click(function(){
        $('.skills #icon-x-skill').removeClass('on');
        $('.skills #skill-container').removeClass('off');
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

