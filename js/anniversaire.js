


$('.title').on('click', function(){
  $('.message1').css('display', 'flex')
});

$('.message1').on('click', function(){
  $('.message2').css('display', 'flex')
});

$('.message2').on('click', function(){
  $('.message3').css('display', 'flex')
});

$('.message3').on('click', function(){
  $('p').text('Joyeux Anniversaire!!!')
  // $('article').css('background-image', "url('../images/hiboux.jpg')");
});
