$('header').load('inc.html header > div', function(){
    cross_img.addEventListener('click',function(){
        cross_img.classList.toggle('active');
        big_ul.classList.toggle('active');
    });
    shop_btn.addEventListener('click',function(){
        small_ul.classList.toggle('active');
    });



    window.addEventListener('scroll',function(){
        cross_img.style = `transform:rotate(${this.scrollY / 7}deg);transition:unset;`;
    });

})
//header inc


//footer inc
$('footer').load('inc.html footer > .footer_wrap ',function(){
})

