/* UI */
if(typeof jQuery !== 'undefined'){
  $(document).ready(function(){

    $('a[data-layer], button[data-layer], img.slick[data-layer]').modalLayer();

    // init ezMark
    $('#register #regForm input[type=checkbox], #register #regForm input[type=radio]').ezMark();

    ezForm();

    $('#videoMain').cover({
      zoom:1.3                                  // 1.3미만은 고해상도에서 짤리는 문제 있음
    });

    var $carousel = $('.carousel');
    $carousel.slick({
      dots: true,
      infinite: true,
      mobileFirst: true
    }); 
  }); //document.ready
}


function ezForm(){
  if ( $('#regForm').length > 0 ){
    // input placeholder
    $('#regForm .inp_mail input').focus(function(){
      $(this).addClass('active');
    }).blur(function(){
      if($(this).val().length == 0){
        $(this).removeClass('active');
      }
    });
  }
}
