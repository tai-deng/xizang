$(function() {
  //点击显示弹窗
  $('.details_main_right4_body ul li').click(function() {
    $('.container').removeClass('hidden')
    $('.container').addClass('show')
  })
  //点击关闭弹窗
  $('.del').click(function(){
    $('.container').removeClass('show')
    $('.container').addClass('hidden')
  })
  //左侧箭头跳转评分排行榜
  $('.left_arrow_active').click(function() {
    window.location.href = "../commission/commission.html"
  })
  //右侧箭头跳转评分排行榜
  $('.right_arrow_active').click(function() {
    window.location.href = "../ranking-list/ranking-list_two.html"
  })
  //返回主平台
  $('.return').click(function(){
    location.href='../../index.html';
  })
})
