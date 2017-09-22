$(document).ready(function() {
  var scroll = $(document).scrollTop();

  if ($('body').attr('class') == 'index') {
    if (0 <= scroll && scroll <= 500) {
      // banner
      $('.banner, .banner .intro .logo-white, .banner .intro > p, .banner .intro .get-ticket, .banner .intro .logo').addClass('active');
    } else {
      // banner
      $('.banner .intro .logo-white, .banner .intro > p, .banner .intro .get-ticket, .banner .intro .logo').removeClass('active');
    }

    if (200 <= scroll && scroll <= 1300) {
      // article1
      $('.section .article1 .title, .section .article1 h2, .section .article1 ul, .section .article1 .table-footer').addClass('active');
    } else {
      // article1
      $('.section .article1 .title, .section .article1 h2, .section .article1 ul, .section .article1 .table-footer').removeClass('active');
    }

    if (900 <= scroll && scroll <= 2100) {
      // etc
      $('.section .etc h2:first-of-type, .section .etc .praise, .section .etc .desc, .section .etc ul:first-of-type').addClass('active');
    } else {
      // etc
      $('.section .etc h2:first-of-type, .section .etc .praise, .section .etc .desc, .section .etc ul:first-of-type').removeClass('active');
    }

    if (1600 <= scroll) {
      // etc
      $('.section .etc h2:nth-of-type(2), .section .etc .rock-on, .section .etc ul:nth-of-type(2)').addClass('active');
    } else {
      // etc
      $('.section .etc h2:nth-of-type(2), .section .etc .rock-on, .section .etc ul:nth-of-type(2)').removeClass('active');
    }

    if (2100 <= scroll) {
      // last-article
      $('.section .last-article .logo, .section .last-article .saturn').addClass('active');
    } else {
      // last-article
      $('.section .last-article .logo, .section .last-article .saturn').removeClass('active');
    }

    $(document).scroll(function() {
      scroll = $(document).scrollTop();
      console.log(scroll);

      if (0 <= scroll && scroll <= 500) {
        // banner
        $('.banner, .banner .intro .logo-white, .banner .intro > p, .banner .intro .get-ticket, .banner .intro .logo').addClass('active');
      } else {
        // banner
        $('.banner .intro .logo-white, .banner .intro > p, .banner .intro .get-ticket, .banner .intro .logo').removeClass('active');
      }

      if (200 <= scroll && scroll <= 1300) {
        // article1
        $('.section .article1 .title, .section .article1 h2, .section .article1 ul, .section .article1 .table-footer').addClass('active');
      } else {
        // article1
        $('.section .article1 .title, .section .article1 h2, .section .article1 ul, .section .article1 .table-footer').removeClass('active');
      }

      if (900 <= scroll && scroll <= 2100) {
        // etc
        $('.section .etc h2:first-of-type, .section .etc .praise, .section .etc .desc, .section .etc ul:first-of-type').addClass('active');
      } else {
        // etc
        $('.section .etc h2:first-of-type, .section .etc .praise, .section .etc .desc, .section .etc ul:first-of-type').removeClass('active');
      }

      if (1600 <= scroll) {
        // etc
        $('.section .etc h2:nth-of-type(2), .section .etc .rock-on, .section .etc ul:nth-of-type(2)').addClass('active');
      } else {
        // etc
        $('.section .etc h2:nth-of-type(2), .section .etc .rock-on, .section .etc ul:nth-of-type(2)').removeClass('active');
      }

      if (2100 <= scroll) {
        // last-article
        $('.section .last-article .logo, .section .last-article .saturn').addClass('active');
      } else {
        // last-article
        $('.section .last-article .logo, .section .last-article .saturn').removeClass('active');
      }
    });
  }

  else if ($('body').attr('class') == 'program') {
    if (0 <= scroll && scroll <= 1000) {
      $('.program .banner .intro h2, .program .banner .intro p, .program .section .article1').addClass('active');
    } else {
      $('.program .banner .intro h2, .program .banner .intro p, .program .section .article1').removeClass('active');
    }

    if (900 <= scroll && scroll <= 2100) {
      // etc
      $('.section .etc h2:first-of-type, .section .etc .praise, .section .etc .desc, .section .etc ul:first-of-type').addClass('active');
    } else {
      // etc
      $('.section .etc h2:first-of-type, .section .etc .praise, .section .etc .desc, .section .etc ul:first-of-type').removeClass('active');
    }

    if (1600 <= scroll) {
      // etc
      $('.section .etc h2:nth-of-type(2), .section .etc .rock-on, .section .etc ul:nth-of-type(2)').addClass('active');
    } else {
      // etc
      $('.section .etc h2:nth-of-type(2), .section .etc .rock-on, .section .etc ul:nth-of-type(2)').removeClass('active');
    }

    if (2100 <= scroll) {
      // last-article
      $('.section .last-article .logo, .section .last-article .saturn').addClass('active');
    } else {
      // last-article
      $('.section .last-article .logo, .section .last-article .saturn').removeClass('active');
    }

    $(document).scroll(function() {
      scroll = $(document).scrollTop();
      console.log(scroll);

      if (0 <= scroll && scroll <= 1000) {
        $('.program .banner .intro h2, .program .banner .intro p, .program .section .article1').addClass('active');
      } else {
        $('.program .banner .intro h2, .program .banner .intro p, .program .section .article1').removeClass('active');
      }

      if (900 <= scroll && scroll <= 2100) {
        // etc
        $('.section .etc h2:first-of-type, .section .etc .praise, .section .etc .desc, .section .etc ul:first-of-type').addClass('active');
      } else {
        // etc
        $('.section .etc h2:first-of-type, .section .etc .praise, .section .etc .desc, .section .etc ul:first-of-type').removeClass('active');
      }

      if (1600 <= scroll) {
        // etc
        $('.section .etc h2:nth-of-type(2), .section .etc .rock-on, .section .etc ul:nth-of-type(2)').addClass('active');
      } else {
        // etc
        $('.section .etc h2:nth-of-type(2), .section .etc .rock-on, .section .etc ul:nth-of-type(2)').removeClass('active');
      }

      if (2100 <= scroll) {
        // last-article
        $('.section .last-article .logo, .section .last-article .saturn').addClass('active');
      } else {
        // last-article
        $('.section .last-article .logo, .section .last-article .saturn').removeClass('active');
      }
    });
  }

  else if ($('body').attr('class') == 'after-party') {
    if (400 <= scroll && scroll <= 1800) {
      // etc
      $('.section .etc h2:first-of-type, .section .etc .praise, .section .etc .desc, .section .etc ul:first-of-type').addClass('active');
    } else {
      // etc
      $('.section .etc h2:first-of-type, .section .etc .praise, .section .etc .desc, .section .etc ul:first-of-type').removeClass('active');
    }

    if (1100 <= scroll) {
      // etc
      $('.section .etc h2:nth-of-type(2), .section .etc .rock-on, .section .etc ul:nth-of-type(2)').addClass('active');
    } else {
      // etc
      $('.section .etc h2:nth-of-type(2), .section .etc .rock-on, .section .etc ul:nth-of-type(2)').removeClass('active');
    }

    if (1600 <= scroll) {
      // etc
      $('.section .etc h2:nth-of-type(2), .section .etc .rock-on, .section .etc ul:nth-of-type(2)').addClass('active');
    } else {
      // etc
      $('.section .etc h2:nth-of-type(2), .section .etc .rock-on, .section .etc ul:nth-of-type(2)').removeClass('active');
    }

    $(document).scroll(function() {
      scroll = $(document).scrollTop();
      // console.log(scroll);

      if (400 <= scroll && scroll <= 1800) {
        // etc
        $('.section .etc h2:first-of-type, .section .etc .praise, .section .etc .desc, .section .etc ul:first-of-type').addClass('active');
      } else {
        // etc
        $('.section .etc h2:first-of-type, .section .etc .praise, .section .etc .desc, .section .etc ul:first-of-type').removeClass('active');
      }

      if (1100 <= scroll) {
        // last-article
        $('.section .last-article .logo, .section .last-article .saturn').addClass('active');
      } else {
        // last-article
        $('.section .last-article .logo, .section .last-article .saturn').removeClass('active');
      }
    });
  }

  else if ($('body').attr('class') == 'speakers') {
    
  }

  else if ($('body').attr('class') == 'experience') {

  }


});
