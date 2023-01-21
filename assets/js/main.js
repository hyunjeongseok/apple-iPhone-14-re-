
$(function(){

  /**
   * @headerFix
   * lastScroll = 0 -> 초기화 시키기
   * gnb-header의 높이 44 보다 높을 때 scrollTop
   */
  let lastScroll = 0;
  $(window).scroll(function(){
    const current = $(this).scrollTop();
    if ($(this).scrollTop() > 44) {
      $('.pro-header').addClass('fixed');
    } else {
      $('.pro-header').removeClass('fixed');
    }
  });

  
  /**
   * @메인로고스크롤
   * gsap.to
   * yPercent
   */
  gsap.to('.sc-main .logo',{
    scrollTrigger:{
      trigger:".sc-main ",
      start:"0% 0%",
      end:"100% 50%",
      scrub:0
    },
    opacity:0,
    yPercent:-100
  })


  

  /**
   * @gsap고정영역
   * 메인애니메이션 전체를 감싸는 영역 고정시키기
   * 아이폰 인트로 애니메이션
   * @transformPerspective
   * 3d입체효과 연출
   */
  const sizePinMotion =  gsap.timeline({
    scrollTrigger:{
      trigger:".fix-spancer",
      start:"0% 0%",
      end:"100% 0%",
      scrub:0,
      pin:true,
    }
  })
  const sizeAniMotion =  gsap.timeline({
    scrollTrigger:{
      trigger:".sc-main-size .inner",
      start:"0% 100%",
      end:"100% 0%",
      scrub:0,
    }
  })
  sizeAniMotion
  .from('.sc-main-size .head-text',{ scale:0.2, yPercent:100 })
  .addLabel('a')
  .to('.sc-main-size .head-text',{ scale:0.2, yPercent:0 },'a')
  .to('.sc-main-size .img-wrapper',{ yPercent:-10},'a')
  .to('.sc-main-size .left-wrap .info-box',{xPercent:-110,rotateY:47, rotate:-10, skewY:-4 },'a')
  .to('.sc-main-size .right-wrap .info-box',{xPercent:110,rotateY:-47, rotate:10, skewY:4},'a')
  .addLabel('b')
  .to('.sc-main-size .left-wrap',{ scale:0.5,xPercent:-100 },'b')
  .to('.sc-main-size .right-wrap',{ scale:0.5,xPercent:100 },'b')
  .to('.sc-main-size .left-wrap .info-box',{xPercent:100 },'b')
  .to('.sc-main-size .right-wrap .info-box',{xPercent:-100},'b')
  .from('.sc-main-bat h2',{ opacity:0,scale:0},'b')
  .to('.sc-main-bat h2',{transform: 'perspective(500px) rotateX(0deg) rotateY(0deg)'},'b')
  .to('.sc-main-bat h2',{ 
    transform: 'perspective(500px) rotateX(20deg) rotateY(-40deg)'},'b+0.03')
  .to('.sc-main-bat h2',{transform: 'perspective(800px) rotateX(-10deg) rotateY(40deg)',yPercent:-100})
  
  const lightAniMotion =  gsap.timeline({
    scrollTrigger:{
      trigger:".sc-main-light",
      start:"0% 100%",
      end:"0% 50%",
      scrub:2,
    },
  })
  lightAniMotion
  .from('.sc-main-light .title',{
    transform: 'perspective(307px) rotateX(-16deg) rotateY(13deg)'
    // scale: 1.2
  })
  .to('.sc-main-light .title',{
    transform: 'perspective(307px) rotateX(-0deg) rotateY(13deg)',
    scale: 1
  })
  .to('.sc-main-light .title',{
    transform: 'perspective(307px) rotateX(-0deg) rotateY(0deg)',
    scale: 1
  })
  gsap.set('.sc-main-buy strong',{opacity:0})
  gsap.set('.sc-main-buy .img-box',{opacity:0})
  gsap.set('.sc-main-buy .price',{opacity:0})
  gsap.set('.sc-main-buy .link-box',{opacity:0})


  const buyTitleMotion =  gsap.timeline({
    scrollTrigger:{
      trigger:".sc-main-buy .title-wrap",
      start:"0% 50%",
      end:"100% 0%",
      scrub:0,
      
    },
  })
  buyTitleMotion
  .to('.sc-main-buy .title-wrap',{
    transform: 'perspective(350px) rotateX(-20deg) scale(2.5)'
  })
  .to('.sc-main-buy .title-wrap',{
    transform: 'perspective(350px) rotateX(0deg) scale(1)'
  })

    /**
     * 섹션 <구입하기>
     * @imagePositionMotion
     * 안보이는 영역에 동일위치에 있다가 스크롤 시, 흩어지면서 각자 위치로
     */
    const buyAniMotion =  gsap.timeline({
      scrollTrigger:{
        trigger:".sc-main-buy",
        start:"0% 0%",
        end:"+=200%",
        scrub:0,
        pin:true,
      },
    })

    buyAniMotion
    .to('.sc-main-buy .img-box',{opacity:1})
    .from('.sc-main-buy .img-star',{duration:0.5,x:0,y:800,scale:0.3})
    .from('.sc-main-buy .img-blue',{duration:0.5,x:260,y:760,scale:0.3})
    .from('.sc-main-buy .img-pur',{duration:0.5,x:-260,y:760,scale:0.3})
    .from('.sc-main-buy .img-mid',{duration:0.5,x:460,y:640,scale:0.3})
    .from('.sc-main-buy .img-red',{duration:0.5,x:-460,y:640,scale:0.3})
    .to('.sc-main-buy strong',{opacity:1})

    .to('.sc-main-buy .price',{opacity:1})
    .to('.sc-main-buy .link-box',{opacity:1})


    /**
     * 섹션 <gallery>
     * @gsapStagger
     * 스크롤 시, 순차적으로 박스 개개인 slideUp
     */
    gsap.from('.sc-gallery > *',{
      scrollTrigger:{
        trigger:".sc-gallery",
        start:"0% 80%",
        end:"30% 80%",
        scrub:0,
      },
      y:200,
      stagger:0.1

    })


    /**
     * 섹션 <battery>
     * @TextSlideUp
     */
    gsap.from('.sc-battery .info-area',{
      scrollTrigger:{
        trigger:".sc-battery",
        start:"0% 80%",
        end:"30% 80%",
        scrub:0,
      },
      y:100,
      stagger:0.1
    })

    
    /**
     * 섹션 <잠금화면>
     * @TextSlideStagger
     * 순차적인 텍스트 슬라이드
     */
    gsap.set('.sc-lock .title-box .title1',{opacity:0, y:100})
    gsap.set('.sc-lock .title-box .title2',{opacity:0, y:100})
    gsap.set('.sc-lock .title-box .title3',{opacity:0, y:100})
    gsap.set('.sc-lock .title-box .title4',{opacity:0, y:100})
    gsap.set('.sc-lock .desc-gray',{opacity:0, y:50})
    
    const lockAniMotion =  gsap.timeline({
      scrollTrigger:{
        trigger:".sc-lock",
        start:"0% 100%",
        end:"100% 100%",
        scrub:0,
      },
    })
    lockAniMotion
    .to('.sc-lock .title-box .title1',{opacity:1, y:0})
    .to('.sc-lock .title-box .title2',{opacity:1, y:0})
    .to('.sc-lock .title-box .title3',{opacity:1, y:0})
    .to('.sc-lock .title-box .title4',{opacity:1, y:0})
    .to('.sc-lock .desc-gray',{opacity:1, y:0})






    /**
     * 섹션<잠금화면>
     * @SlideButton
     * 버튼으로 슬라이드 이동
     * click()
     * next() nextAll()
     * ===
     */
    $('.sc-lock .btn-nav.prev').click(function(){
      idx = $('.sc-lock .swiper-slide.active').index()+1;
      if(idx === 1){
        return false;
      }
      gsap.to('.sc-lock .swiper-slide.active',{
        x:-392*(idx-1)+392,
      });
      next = $('.sc-lock .swiper-slide.active').next();
      gsap.to(next,{
        x:-392*(idx-1),
        //역순 인덱스 가져와야함.
      });
      console.log(idx);

      nextall = $('.sc-lock .swiper-slide.active').nextAll();
      $(nextall).each(function(i,l){
        // console.log(l.style.transform);
        target = $(this).css('transform');
        var sResult = target.split(',');
        var length = sResult.length;
        result = parseInt(sResult[length-2])



        gsap.to(l,{
          x:result+392,
          //역순 인덱스 가져와야함.
        });
      });

      console.log(idx);
      $('.sc-lock .swiper-slide.active').prev().addClass('active').removeClass('hide').siblings().removeClass('active');
    })

    $('.sc-lock .btn-nav.next').click(function(){
      idx = $('.sc-lock .swiper-slide.active').index()+1;
      if(idx === 6){
        return false;
      }
      $('.sc-lock .swiper-slide.active').addClass('hide');
      siblings = $('.sc-lock .swiper-slide.active').nextAll();
      gsap.to(siblings,{
        x:-392*idx,
      });
      $('.sc-lock .swiper-slide.active').next().addClass('active').siblings().removeClass('active');
    });

    


    /**
     * @TextSlideUp
     */
    gsap.set('.sc-crash .info-area .desc-gray',{opacity:0,y:100})
    const crashAnimation = gsap.timeline({
      scrollTrigger:{
        trigger:".sc-crash",
        start:"70% 80%",
        end:"100% 100%",
        scrub:0,
      },
    })
    crashAnimation
    .to('.sc-crash .info-area .desc-gray',{opacity:1,y:0})
    
    

    const batAniMotion = gsap.timeline({
      scrollTrigger:{
        trigger:".sc-battery",
        start:"60% 80%",
        end:"100% 100%",
        scrub:0,
      },
    })
    batAniMotion
    .from('.sc-battery .desc-bk',{opacity:0, yPercent:100})
    .to('.sc-battery .desc-bk',{opacity:1, yPercent:0})

    gsap.from('.sc-battery .info-area .info-box',{
      scrollTrigger:{
        trigger:".sc-battery",
        start:"70% 80%",
        end:"100% 100%",
        scrub:0,
      },
      opacity:0,
      yPercent:100,
      stagger:0.2
    })

    
    gsap.from('.sc-video .head-area .desc-gray',{
      scrollTrigger:{
        trigger:".sc-video",
        start:"0% 0%",
        end:"40% 100%",
        scrub:0
      },
      yPercent:100,
      opacity:0
    })
    
    const movidescmotion = gsap.timeline({
      scrollTrigger:{
        trigger:".sc-video .sub-area",
        start:"100% 80%",
        end:"100% 50%",
        scrub:0,
      },
    })
    movidescmotion
    .from('.sc-video .sub-area .desc-gray',{opacity:0,yPercent:100})
    .to('.sc-video .sub-area .desc-gray',{opacity:1,yPercent:0})
    .from('.sc-video .sub-area .info-box',{opacity:0,yPercent:100})
    .to('.sc-video .sub-area .info-box',{opacity:1,yPercent:0})

    
    const videoAniMotion =  gsap.timeline({
      scrollTrigger:{
        trigger:".sc-video",
        start:"0% 60%",
        end:"0% 0%",
        scrub:0,
      },
    })
    videoAniMotion
    .to('.sc-video .desc-gray',{opacity:1, y:0})
   

    /**
     * 섹션 <21% 더 커진 화면>
     * @TextSlideUp
     */
    const xdrAniMotion = gsap.timeline({
      scrollTrigger:{
        trigger:".sc-XDR",
        start: "20% 100%",
        end: "100% 70%",
        scrub:0,
      },
      duration:1
    })
    xdrAniMotion
    .from('.sc-XDR .head-area span',{opacity:0, y:100})
    .from('.sc-XDR .head-area strong',{opacity:0, y:100})
    .from('.sc-XDR .head-area .desc-bk',{opacity:0, y:100})
    .from('.sc-XDR .info-area .info-list .info-item1',{delay:5,opacity:0, y:100})
    .from('.sc-XDR .info-area .info-list .info-item2',{opacity:1, y:100})
    .from('.sc-XDR .info-area .info-list .info-item3',{opacity:1, y:100})
    .from('.sc-XDR .info-area .tip-box',{duration:1,opacity:0, y:100})
   

    /**
     * 섹션 <더욱 멋진 사진>
     * @TextRolling
     * 스크롤 트리거 도달 시, 텍스트 3가지 모션 구현
     */
    const cameraText = gsap.timeline({
      scrollTrigger:{
        trigger:'.sc-camera .info-area',
        start:"0% 100%",
        end:"100% 0%",  
      },
      ease:'power3'
    })
    cameraText
    .from('.sc-camera .info-area strong .roof1',{opacity:0,filter:'blur(10px)',y:100,duration:0.5})
    .to('.sc-camera .info-area strong .roof1',{filter:'none',delay:0.5})
    .addLabel('a')
    .to('.sc-camera .info-area strong .roof1',{y:-100, opacity:0},'a')
    .from('.sc-camera .info-area strong .roof2',{ opacity:0, y:100,color:'#000', duration:0.5},'a')
    .to('.sc-camera .info-area strong .roof2',{ delay:0.5})
    .addLabel('b')
    .to('.sc-camera .info-area strong .roof2',{y:-100, opacity:0},'b')
    .from('.sc-camera .info-area strong .roof3',{
      opacity:0,
      y:100,
      duration:0.5},'b')
    .to('.sc-camera .info-area strong .roof3',{y:-30,'font-size': '130px'})

    //sc-camera info
    gsap.set('.sc-camera .text-box .desc-gray',{opacity:0, y:100})
    gsap.set('.sc-camera .text-box .camera-item1',{opacity:0, y:100})
    gsap.set('.sc-camera .text-box .camera-item2',{opacity:0, y:100})
    const cameraAniMotion = gsap.timeline({
      scrollTrigger:{
        trigger:".sc-camera",
        start:"70% 80%",
        end:"100% 100%",
        scrub:0,
      },
    })
    .to('.sc-camera .text-box .desc-gray',{opacity:1, y:0})
    .to('.sc-camera .text-box .camera-item1',{opacity:1, y:0})
    .to('.sc-camera .text-box .camera-item2',{opacity:1, y:0})


    


    /**
     * 섹션 <셀피에 대한 생각을 뒤집다>
     * @videoGet
     * 비디오 반복재생 멈춤
     * 타이틀과 비디오 동시로 회전
     * 사이드 텍스트 slideUp
     */
    gsap.set('.sc-self .head-area .ic-self',{scale:0.9})
    gsap.set('.sc-self .head-area .title',{rotateY:180})
    $('.sc-self video').get(0).pause()
    const selfAniMotion = gsap.timeline({
      scrollTrigger:{
        trigger:".sc-self .grid-box",
        start:"0% 90%",
        end:"100% 100%",
        onEnter:function(){
          $('.sc-self video').get(0).play()
        }
      },
    })
    selfAniMotion
    .addLabel('a')
    .to('.sc-self .head-area .ic-self',{scale:1},'a')
    .to('.sc-self .head-area .title',{rotateY:0},'a')


    const selfinfomotion = gsap.timeline({
      scrollTrigger:{
        trigger:".sc-self",
        start:"40% 70%",
        end:"90% 100%",
        scrub:0,
      },
    })
    selfinfomotion
    .from('.sc-self .head-area .desc-gray',{opacity:0, yPercent:100})
    .to('.sc-self .head-area .desc-gray',{opacity:1, yPercent:0})
    .from('.sc-self .head-area .text',{opacity:0, yPercent:100})
    .to('.sc-self .head-area .text',{opacity:1, yPercent:0})


    /**
     * 섹션 <a15 Bionic>
     * @TextSlideUp
     */
    const a15AniMotion = gsap.timeline({
      scrollTrigger:{
        trigger:".sc-a15",
        start:"0% 80%",
        end:"100% 100%",
        scrub:0,
      },
    })
    a15AniMotion
    .from('.sc-a15 .title',{opacity:0, yPercent:100})
    .to('.sc-a15 .title',{opacity:1, yPercent:0})

    const a15infoAniMotion = gsap.timeline({
      scrollTrigger:{
        trigger:".sc-a15",
        start:"60% 80%",
        end:"100% 100%",
        scrub:0,
      },
    })
    a15infoAniMotion
    .from('.sc-a15 .info-box .desc-bk',{opacity:0, yPercent:100})
    .to('.sc-a15 .info-box .desc-bk',{opacity:1, yPercent:0})
    .from('.sc-a15 .info-box .desc-gray.fir',{opacity:0, yPercent:100})
    .to('.sc-a15 .info-box .desc-gray.fir',{opacity:1, yPercent:0})
    .from('.sc-a15 .info-box .desc-gray.sec',{opacity:0, yPercent:100})
    .to('.sc-a15 .info-box .desc-gray.sec',{opacity:1, yPercent:0})
    
    /**
     * 섹션 <무엇을 찍든 영화가 된다>
     * @텍스트아이콘rotate
     * 스크롤 영역에 닿았을 때 360도 회전
     * @비디오widthCover
     * 스크롤 영역에 닿았을 때 비디오 화면 채워짐
     */
    gsap.from('.sc-video .sub-area .ic-mv',{
      scrollTrigger:{
        trigger:".sc-video .sub-area",
        start:"0% 100%",
        end:"100% 100%",
      },
      duration:3,
      rotate:360
    })
    gsap.from('.sc-video .sub-area .cover-box',{
      scrollTrigger:{
        trigger:".sc-video .sub-area",
        start:"0% 100%",
        end:"20% 0%",
        scrub:true
      },
      width: 'calc(50vw - 490px)'
    })

    
    /**
     * @옆으로슬라이드common
     * @i - 인덱스
     * @element - 각각엘리먼트 .link-learn 개인
     */
    $('.link-learn').each(function(i,element){

      arrowEl = $(this).find('.arrow');
      textEl =$(this).find('.text');

      arrowMotion =  gsap.timeline({
        scrollTrigger:{
          trigger:element,
          start:"0% 80%",
          end:"100% 0%"
        },
      })
      arrowMotion
      .from(arrowEl,{
        xPercent:-600,
      })
      .from(textEl,{
        delay:0.2,
        opacity:0,
      })
    });


    /**
     * @비디오재생버튼common
     * each()으로 동일클래스명 적용
     * onclick
     * get(0) -> 비디오 재생
     */
    $('.btn-box').each(function(i,element){

      $('.btn-replay').on('click',function(){
        $('.btn-replay').hide();
        $('video').get(0).play();
        $('#movie').get(0).play();
        $('.btn-play').hide();
        $('.btn-stop').show();
      });
      $('.btn-play').on('click',function(){
        $('video').get(0).play();
        $('#movie').get(0).play();
        $('.btn-replay').hide();
        $('.btn-play').hide();
        $('.btn-stop').show();
      });
      $('.btn-stop').on('click',function(){
        $('video').get(0).pause();
        $('#movie').get(0).pause();
        $('.btn-replay').hide();
        $('.btn-play').show();
        $('.btn-stop').hide();
      });
      setInterval(function(){
        if($('video').prop("ended")){
          //영상종료 후 진행할 함수 입력
          $('.btn-replay').show();
          $('.btn-play').hide();
          $('.btn-stop').hide();
        }
      });
    });

    
    /**
     * @backgroundPositionX
     * @clipPath
     * 텍스트와 배터리이미지 스크롤 X축 애니메이션
     * text: backgroundPostion
     * image : clip-lath
     */
    const batteryColor = gsap.timeline({
      scrollTrigger:{
            trigger:".sc-battery",
            start:"0% 0%",
            end:"100% 0%"
          }
    })
    batteryColor
    .addLabel('a')
    .to('.sc-battery .title-big',{backgroundPositionX:'0%'},'a')
    .from('.sc-battery .head-area .thumb-box .bat-gr',{'clip-path': 'polygon(0 0, 0% 0, 0% 100%, 0% 100%)'},'a')


    /**
     *  섹션 <흔들려도 차분하게>
      * @SplitType텍스트슬라이드
      * words로 쪼개서 slideUp
      */
     const videoText = new SplitType('.sc-video .word', {types: 'words,chars'})
     gsap.from(videoText.chars, {
      scrollTrigger:{
        trigger:".sc-video",
        start:"0% 100%",
        end:"100% 0%"
      },
       duration: 1,
       yPercent: 100,
       opacity:0,
       ease: "power3",
       stagger: 0.1,
     })

    /**
   * @swiperNavigation
   */
   let enjoy = new Swiper(".enjoy", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    navigation: {
      nextEl: ".btn-nav.next",
      prevEl: ".btn-nav.prev",
    },
  })     
});