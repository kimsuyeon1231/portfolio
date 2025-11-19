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