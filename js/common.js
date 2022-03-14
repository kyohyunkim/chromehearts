$('header').load('inc.html header > div', function(){
    cross_img.addEventListener('click',function(){
        cross_img.classList.toggle('active');
        big_ul.classList.toggle('active');
    });
    shop_btn.addEventListener('click',function(){
        small_ul.classList.toggle('active');
    });

})
//header inc


//footer inc
$('footer').load('inc.html footer > .footer_wrap ',function(){
})

