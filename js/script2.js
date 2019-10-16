$(document).ready(function(){

var classList = ["dayneris","cercys","enano"];
var gotHeroSlider = new Swiper(".got-container .swiper-container", {
loop: false,
slidesPerview:1,
autoplay:true,
pagination:{
    el:'.got-container .swiper-pagination',
    type:'bullets',
    clickable: true
},
on: {

    init:function(){
        var index= this.activeIndex;
        $(".got-container")
        .removeClass(classList)
        .addClass(classList[index]);
        $(".got-container .img-wrapper")
        .removeClass("active")
        .eq(index)
        .addClass("active");
    }
}
}).on('slideChange', function(){
    var index= this.activeIndex;
    $(".got-container")
    .removeClass(classList)
    .addClass(classList[index]);

    $(".got-container .img-wrapper")
    .removeClass("active")
    .eq(index)
    .addClass("active");

});

});