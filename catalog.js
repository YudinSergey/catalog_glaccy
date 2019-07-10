let rngOne = document.querySelector("#rng1");
let rngTwo  = document.querySelector("#rng2");

rngOne.addEventListener("input",()=>{
    let spanOne = document.querySelector("#price_out1");
    spanOne.innerHTML=rngOne.value;
});

rngTwo.addEventListener("input",()=>{
    let spanTwo = document.querySelector("#price_out2");
    spanTwo.innerHTML=rngTwo.value;
});

$('.product_1').on('mouseenter', ()=>{
    $('.product_1 .product_view').css({"display":"block"});
});

$('.product_2').on('mouseenter', ()=>{
    $('.product_2 .product_view').css({"display":"block"});
});

$('.product_3').on('mouseenter', ()=>{
    $('.product_3 .product_view').css({"display":"block"});
});

$('.product_4').on('mouseenter', ()=>{
    $('.product_4 .product_view').css({"display":"block"});
});

$('.product_5').on('mouseenter', ()=>{
    $('.product_5 .product_view').css({"display":"block"});
});

$('.product_6').on('mouseenter', ()=>{
    $('.product_6 .product_view').css({"display":"block"});
});

$('.product_7').on('mouseenter', ()=>{
    $('.product_7 .product_view').css({"display":"block"});
});

$('.product_8').on('mouseenter', ()=>{
    $('.product_8 .product_view').css({"display":"block"});
});

$('.product_9').on('mouseenter', ()=>{
    $('.product_9 .product_view').css({"display":"block"});
});

$('.product_10').on('mouseenter', ()=>{
    $('.product_10 .product_view').css({"display":"block"});
});

$('.product_11').on('mouseenter', ()=>{
    $('.product_11 .product_view').css({"display":"block"});
});

$('.product_12').on('mouseenter', ()=>{
    $('.product_12 .product_view').css({"display":"block"});
});

$('.product').on('mouseleave', ()=>{
    $('.product_view').css({"display":"none"});
});

$('.paginator_right_row').on('click',()=>{
   event.preventDefault();
   let old_active_elem = document.querySelector('.active_page');
   let old_active_index = Array.prototype.indexOf.call(document.querySelector('.paginator').children, old_active_elem);
   if(old_active_index<5){
       document.querySelector('.paginator').children[old_active_index].classList.remove('active_page');
       document.querySelector('.paginator').children[old_active_index+1].classList.add('active_page');
   }
});

$('.paginator_right_row').on('click', ()=>{
    let old_active_elem = document.querySelector('.active_page');
    let old_active_index = Array.prototype.indexOf.call(document.querySelector('.paginator').children, old_active_elem);
    if(old_active_index>1){
        document.querySelector('.paginator_left_row').style.backgroundImage='url(catalog_img/paginator_right_row.png)';
        document.querySelector('.paginator_left_row').style.transform='rotate(180deg)';
    }
});

$('.paginator_right_row').on('click',()=>{
    let old_active_elem = document.querySelector('.active_page');
    let old_active_index = Array.prototype.indexOf.call(document.querySelector('.paginator').children, old_active_elem);
    if(old_active_index>4){
        document.querySelector('.paginator_right_row').style.backgroundImage='url(catalog_img/paginator_left_row.png)';
        document.querySelector('.paginator_right_row').style.transform='rotate(180deg)';
    }

});

$('.paginator_left_row').on('click',()=>{
    let old_active_elem = document.querySelector('.active_page');
    let old_active_index = Array.prototype.indexOf.call(document.querySelector('.paginator').children, old_active_elem);
    if(old_active_index>2){
        document.querySelector('.paginator').children[old_active_index].classList.remove('active_page');
        document.querySelector('.paginator').children[old_active_index-1].classList.add('active_page');
        document.querySelector('.paginator_left_row').style.backgroundImage='url(catalog_img/paginator_right_row.png)';
        document.querySelector('.paginator_left_row').style.transform='rotate(180deg)';
        document.querySelector('.paginator_right_row').style.backgroundImage='url(catalog_img/paginator_right_row.png)';
        document.querySelector('.paginator_right_row').style.transform='rotate(0deg)';
    }else if (old_active_index==2){
        document.querySelector('.paginator_left_row').style.backgroundImage='url(catalog_img/paginator_left_row.png)';
        document.querySelector('.paginator_left_row').style.transform='rotate(0deg)';
        document.querySelector('.paginator').children[old_active_index].classList.remove('active_page');
        document.querySelector('.paginator').children[old_active_index-1].classList.add('active_page');
    }else{
        document.querySelector('.paginator_left_row').style.backgroundImage='url(catalog_img/paginator_left_row.png)';
        document.querySelector('.paginator_left_row').style.transform='rotate(0deg)';
    }
    event.preventDefault();
});

$('.page_number').on('click', ()=>{
    let old_active_elem = document.querySelector('.active_page');
    event.preventDefault();
    if(event.target.classList.contains('active_page')==false){
        event.target.classList.add('active_page');
        old_active_elem.classList.remove('active_page');
    }
});

$('.page_number').on('click', ()=>{
   let index =  Array.prototype.indexOf.call(document.querySelector('.paginator').children, event.target);
   if(index==document.querySelector('.paginator').children.length-2){
       document.querySelector('.paginator_right_row').style.backgroundImage='url(catalog_img/paginator_left_row.png)';
       document.querySelector('.paginator_right_row').style.transform='rotate(180deg)';
       console.log(5);
   }else{
       document.querySelector('.paginator_right_row').style.backgroundImage='url(catalog_img/paginator_right_row.png)';
       document.querySelector('.paginator_right_row').style.transform='rotate(0deg)';
   }
});

$('.page_number').on('click', ()=>{
    let index =  Array.prototype.indexOf.call(document.querySelector('.paginator').children, event.target);
    if(index==document.querySelector('.paginator').children.length-6){
        document.querySelector('.paginator_left_row').style.backgroundImage='url(catalog_img/paginator_left_row.png)';
        document.querySelector('.paginator_left_row').style.transform='rotate(0deg)';
        console.log(1);
    }else{
        document.querySelector('.paginator_left_row').style.backgroundImage='url(catalog_img/paginator_right_row.png)';
        document.querySelector('.paginator_left_row').style.transform='rotate(180deg)';
    }
});

$('#sorting_method').on('change', ()=>{
    $('#sorting_method').blur();
    $('#sorting_method option').attr('disabled', false);
    let a = $('#sorting_method option:selected').text();
    if($(window).width()>=1200 && a=='сначала не дорогие'){
        $('#sorting_method').css({"font-size": "15px"});
    }else if($(window).width()>=1200 && a!='сначала не дорогие'){
        $('#sorting_method').css({"font-size": "16px"});
    }else if($(window).width()<1200 && a=='сначала не дорогие'){
        $('#sorting_method').css({"font-size": "13px"});
        $('#sorting_method').css({"padding-left": "10px"});
    }else if($(window).width()<1200 && a!='сначала не дорогие'){
        $('#sorting_method').css({"font-size": "14px"});
        $('#sorting_method').css({"padding-left": "14px"});
    }
});

$('#sorting_method').on('click', ()=>{
    $('#sorting_method option:selected').attr('disabled', true);
});

$(window).on("wheel",()=>{
    if($(window).width()>=1200 && a=='сначала не дорогие'){
        $('#sorting_method').css({"font-size": "15px"});
    }else if($(window).width()>=1200 && a!='сначала не дорогие'){
        $('#sorting_method').css({"font-size": "16px"});
    }else if($(window).width()<1200 && a=='сначала не дорогие'){
        $('#sorting_method').css({"font-size": "13px"});
        $('#sorting_method').css({"padding-left": "10px"});
    }else if($(window).width()<1200 && a!='сначала не дорогие'){
        $('#sorting_method').css({"font-size": "14px"});
        $('#sorting_method').css({"padding-left": "14px"});
    }
});