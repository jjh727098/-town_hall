/* 메인 슬라이드 */
const mainSlide = new Swiper('.main-slide',{
    autoplay:{
        delay : 3000
    },
    pagination:{
        el:".swiper-pagination",
        // type:"fraction"
    },
    navigation : {
		nextEl : '.swiper-button-next',
		prevEl : '.swiper-button-prev',
	},
    loop : true,
    on:{
        "init":function(){
            total = this.slides.length;
            curr = this.realIndex+1;

            $('.page-btn').text(curr+'/'+total);
        },
        "slideChange":function(){
            total = this.slides.length;
            curr = this.realIndex+1;
            $('.page-btn').text(curr+'/'+total);
        }
    }
});

/* 메인 슬라이드 시작 정지 버튼 */
$('.auto-stop').on('click', function(e){
    e.preventDefault();
    $('.main-slide').addClass('pause');

    if ($('.main-slide').hasClass('pause')) {
        mainSlide.autoplay.stop();
      }else {
        mainSlide.autoplay.start();
      }
  });
$('.auto-start').on('click', function(e){
    e.preventDefault();
    $('.main-slide').removeClass('pause');

    if ($('.main-slide').hasClass('pause')) {
        mainSlide.autoplay.stop();
      }else {
        mainSlide.autoplay.start();
      }
  });
  
/* 팝업존 슬라이드 시작 정지 버튼 */
$('.pop-stop').on('click', function(e){
    e.preventDefault();
    $('.allimi-area').addClass('pause');
    $('.pop-start').addClass('on');
    $('.pop-stop').addClass('hidden');

    if ($('.allimi-area').hasClass('pause')) {
        popSlide.autoplay.stop();
      }else {
        popSlide.autoplay.start();
      }
  });
$('.pop-start').on('click', function(e){
    e.preventDefault();
    $('.allimi-area').removeClass('pause');
    $('.pop-stop').removeClass('hidden');
    $('.pop-start').removeClass('on');

    if ($('.allimi-area').hasClass('pause')) {
        popSlide.autoplay.stop();
      }else {
        popSlide.autoplay.start();
      }
  });

/* 여행 슬라이드 시작 정지 버튼 */
$('.stop').on('click', function(e){
    e.preventDefault();
    $('.tour-group').addClass('pause');

    if ($('.tour-group').hasClass('pause')) {
        tourSlide.autoplay.stop();
      }else {
        tourSlide.autoplay.start();
      }
  });
$('.start').on('click', function(e){
    e.preventDefault();
    $('.tour-group').removeClass('pause');

    if ($('.tour-group').hasClass('pause')) {
        tourSlide.autoplay.stop();
      }else {
        tourSlide.autoplay.start();
      }
  });


  /* 배너 슬라이드 시작 정지 버튼 */
$('.btn-stop').on('click', function(e){
    e.preventDefault();
    $('.banner-area').toggleClass('pause');

    if ($('.banner-area').hasClass('pause')) {
        bannerSlide.autoplay.stop();
      }else {
        bannerSlide.autoplay.start();
      }
  });


/* 팝업존 슬라이드 */
const popSlide = new Swiper('.allimi-area',{
    autoplay:{
        delay : 3000
    },
    pagination:{
        el:".swiper-pagination",
        // type:"fraction"
    },
    navigation : {
		nextEl : '.pop-button-next',
		prevEl : '.pop-button-prev',
	},
    loop : true,
    on:{
        "init":function(){
            total = this.slides.length;
            curr = this.realIndex+1;

            $('.pop-page-btn').text(curr+'/'+total);
        },
        "slideChange":function(){
            total = this.slides.length;
            curr = this.realIndex+1;
            $('.pop-page-btn').text(curr+'/'+total);
        }
    }

});

/* 자주찾는 슬라이드 */
const oftenSlide = new Swiper('.often-slide',{
    slidesPerView: 11,
    navigation : {
		nextEl : '.often-button-next',
		prevEl : '.often-button-prev',
	},
    loop : true,
});

/* 여행영역 슬라이드 */
const tourSlide = new Swiper('.tour-group',{
    autoplay:{
        delay : 3000
    },
    effect:'fade',

    pagination:{
        el:".swiper-pagination",
    },
    navigation : {
		nextEl : '.tour-button-next',
		prevEl : '.tour-button-prev',
	},
    loop : true,
    on:{
        "init":function(){
            total = this.slides.length;
            curr = this.realIndex+1;

            $('.tour-page-btn').text(curr+'/'+total);
        },
        "slideChange":function(){
            total = this.slides.length;
            curr = this.realIndex+1;
            $('.tour-page-btn').text(curr+'/'+total);
        }
    }

});

/* 배너 슬라이드 */
const bannerSlide = new Swiper('.banner-area',{
    autoplay:{
        delay: 1,
    },
    speed: 1000,
    slidesPerView: 7,
    navigation : {
		nextEl : '.banner-btn-next',
		prevEl : '.banner-btn-prev',
	},
    loop : true,
});

/* 탭메뉴 */
$('.notice-item a').click(function(e){
    e.preventDefault();

    $(this).parent().addClass('active').siblings().removeClass('active');

})

/* gnb */
$('.gnb-item').hover(function(){
    // 
    $(this).find('.gnb-sub').addClass('show');
},function(){
    // 
    $(this).find('.gnb-sub').removeClass('show');
})

/* 미세먼지 */
$('.weather-dust').hover(function(){
    // 
    $('.weather-group').find('.weather-dust-pop').addClass('show');
},function(){
    // 
    $('.weather-group').find('.weather-dust-pop').removeClass('show');
})

/* 상단 언어영역 */
$('.lang').click(function(e){
    e.preventDefault();
    $('.lang-list').toggleClass('on');
})
$('.searchMain-select').click(function(){
    $('.searchMain-list').toggleClass('on');
})

/* 챗봇 */
$('.chat-btn-close').click(function(){
    $('.chatbot-group').addClass('hidden');
})

$('#chat-close').click(function(){
    $('.chatbot-group').addClass('hidden');
})


/* 팝업존 모아보기 */
$('.all-btn').click(function(){
    $('.popup-all-group').addClass('on');
})
$('#popup-all-closeBtn').click(function(e){
    e.preventDefault();

    $('.popup-all-group').removeClass('on');
})

/* 메인배너 모아보기 */
$('.main-all-btn').click(function(){
    $('.mainpop-all-group').addClass('on');
})
$('#mainpop-all-closeBtn').click(function(e){
    e.preventDefault();

    $('.mainpop-all-group').removeClass('on');
})

/* 검색 버튼 */
$('.open').click(function(e){
    e.preventDefault();

    $('.btn-search > .close').addClass('on');
    $('.search-group').addClass('on');
    $('.open').addClass('hidden');
})
$('.close').click(function(e){
    e.preventDefault();

    $('.open').removeClass('hidden');
    $('.search-group').removeClass('on');
    $('.btn-search > .close').addClass('on');
})

/* 상단 스크롤시 팝업 */
$(window).on("wheel", function(event){

    delta = event.originalEvent.deltaY;

    if(delta > 0 ){ 
        $('#top_popup').slideUp();
    } else {
        if($(window).scrollTop() == 0){
            $('#top_popup').slideDown();
        }
    }
});
$('#close').click(function(){
    $('#top_popup').addClass('hidden');
});

/* 검색영역 텍스트 바뀜 및 열림버튼 */
$('.form-area').click(function(){
    $('.search-list').toggleClass('active');
    $('.search-list a').toggleClass('active');
});

$('.form-area .search-list li').click(function(e){
    e.preventDefault();

    text2 =  $(this).text();

    $('.form-area .select-open').text(text2);

});

$('.searchMain-list li').click(function(e){
    e.preventDefault();

    text =  $(this).text();

    $('.searchMain-group .select-open').text(text);

});
