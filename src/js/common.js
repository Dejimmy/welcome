// スクロールをスムーズに
$(function () {
  $('a[href*=\\#]:not([href=\\#])').click(function () {
    const speed = 500;
    const href = $(this).attr("href");
    const target = $(href === "#" || href === "" ? 'html' : href);
    const position = target.offset().top;
    $('body,html').animate({scrollTop: position}, speed, 'swing');
    return false;
  });
});
