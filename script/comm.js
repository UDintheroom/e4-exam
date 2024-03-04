$(function() {
  // slide
  let now = 0;
  const slideCount = $('.slides li').length
  const slideList = $('.slides')
  setInterval(function() {
    now = (now + 1) % slideCount
    slideList.css("left", 100 * -now + '%')
  },3000)

  // modal
  $('.list-bbs li').on('click', function() {
    $('#modal').css('display', 'flex')
  })
  $('.btnClose').on('click', function() {
    $('#modal').hide()
  })

  //tabs
$('.tab-tit').on('click', function(event) {
  event.preventDefault()
  $('.tab').removeClass('active')
  $(this).parents('.tab').addClass('active')
})

  // JQ ready - !!!never delete!!!
})