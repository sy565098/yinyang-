// 新闻资讯
var swiper = new Swiper(".outNode", {
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
    disabledClass: 'my-button-disabled',
  },
});
// 阴阳师手帐
var account = new Swiper(".account_content", {
    slidesPerView: 4,
    loop : true,
    centeredSlides: true,
});
  // 平安世界
var world_tab_user_all = new Swiper(".world_tab_user_all", {
    pagination: {
      el: ".swiper-pagination-allUser",
      bulletClass:'world_tab_user_btn',
      bulletActiveClass:'world_tab_user_btn_acitve',
      clickable: true,
    },
});
// 平安世界式神录模块切换效果
$('.world_tab_user_all').hide().eq(0).show();
$('.world_tab_user_list li').on({
 "click":function(){
   $('.world_tab_user_list li').removeClass('active');
   $(this).addClass('active');
  //  点击切换显示主内容
   $('.world_tab_user_all').hide().eq($(this).index()).show();
  //切换主内容之后，自动回到第一页
    for(var i =0;i<world_tab_user_all.length;i++){
      world_tab_user_all[i].slideTo(0, 0, false);
    }
 }
});
// 主角录切换
// 数组存值
  var arrUserName =["晴明","神乐","源博雅","八百比丘尼"];
  var protagonist_content = new Swiper(".protagonist_content", {
    navigation: {
      nextEl: ".protagonist-button-next",
      prevEl: ".protagonist-button-prev",
    },
    loop:true,
    // 当内容发生改变时 el.realIndex为真是index值
    on:{
      "slideChange": function(el){
        $('.protagonist_list>li').removeClass('active');
        $('.protagonist_list>li').eq(el.realIndex).addClass('active');
        $('.text_left >.text_show').text(arrUserName[el.realIndex-1<0?arrUserName.length-1:el.realIndex-1]);
        $('.text_right >.text_show').text(arrUserName[(el.realIndex+1)%4]);
      }
    }
  });
// 导航点击切换
$('.protagonist_list>li').on({
  "click":function(){
    $('.protagonist_list>li').removeClass('active');
    $(this).addClass('active');
    // 主内容在点击时跳转的地方 $(this).index()当前的index值
    protagonist_content.slideTo($(this).index()+1, 500);
  }
})


setTimeout(function(){
  $('.protagonist_list>li').removeClass('active');
  $('.protagonist_list>li').eq(0).addClass('active');
},0)
// 平安世界导航切换
$('.world_tab_list li').on({
  "click":function(){
    $(".world_tab_list li").removeClass('active');
    $(this).addClass('active');
    $('.world_tab_page').removeClass('active');
    $('.world_tab_page').eq($(this).index()).addClass('active')
  }
})