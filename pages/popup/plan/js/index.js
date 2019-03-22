(function($,d){
    // 隐藏
    $('.del').on('click',function(){
        $('.container').removeClass('show')
        $('.container').addClass('hidden')
    })
    // 显示
    function show(){
        $('.container').removeClass('hidden')
        $('.container').addClass('show')
    }
})(jQuery,document)