/**
 * Created by adu on 2017/10/21.
 */
$(document).ready(function() {
  $(.span-e).animate({top: '-200px'}, 800);
  var sTop;
  $(window).scroll(function () {
    sTop = $(this).scrollTop();
    var a = $(.span - b);
    if (sTop > 800)
      a.aniate({top: '-200px'}, 800)
  });
});
