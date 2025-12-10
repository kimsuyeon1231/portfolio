const designBnr = new Swiper('#design .swiper',{
    spaceBetween : 30,
    slidesPerView : 5,
    loop : true,
    centeredSlides: false,
    navigation: {
        nextEl: '#design .swiper-button-next',
        prevEl: '#design .swiper-button-prev',
    },
    autoplay : {delay:3000,},
    })



// 오른쪽 리모컨
const sections = document.querySelectorAll("section"); //섹션 변수
const navLinks = document.querySelectorAll(".link_remocon a"); //버튼 변수

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.classList.add("active");
        }
        });
    }
    });
}, { threshold: 0.5 }); // 섹션이 50% 보일 때 active
sections.forEach(section => observer.observe(section));

/* 프로젝트 탭 버튼 */
const tabBtns = document.querySelectorAll('.tab_btn');
const contents = document.querySelectorAll('.content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {

    const tabId = btn.dataset.tab;  // "1", "2", "3", "4"

    // 1. 버튼 active 초기화
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // 2. content active 초기화
    contents.forEach(c => {
      if (c.dataset.tab === tabId) {
        c.classList.add('active');
      } else {
        c.classList.remove('active');
      }
    });

  });
});


/* 디자인팝업 */
const popup_bg = document.querySelector('.popup_bg')
const designProject = document.querySelectorAll('#design .swiper-slide img')

popup_bg.style.display = 'none'/* 팝업 초반 숨기기 */

for(let i of designProject){/* SNS디자인, 상세디자인 클릭 시 팝업 출력 JS */
    i.addEventListener('click',function(){
        popup_bg.style.display = 'flex'
        popup_bg.children[0].scrollTo(0,0);
        popup_bg.children[0].style.width = '800px';/* SNS,상세디자인 팝업 출력 크기 */
        popup_bg.children[0].style.height = '800px';
        popup_bg.children[0].children[0].src = i.src;
        wrap.mousewheel.disable();/* 마우스 휠 막기 */
    })
}

/* 팝업 클릭 시 숨기기 */
popup_bg.addEventListener('click',()=>{ popup_bg.style.display = 'none'; wrap.mousewheel.enable(); })/* 마우스 휠 풀기 */
