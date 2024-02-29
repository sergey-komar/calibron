$(function () {
  $(".slider-block__inner").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  });

  $(".reviews-slider__inner").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    appendArrows: '.reviews-slider__arrows',
  });


  //ACCARDION
  $(".questions-accardion__btn").on("click", function () {
    $(this).next().slideToggle(500);
  });
});




window.addEventListener("DOMContentLoaded", () => {
  const headerSerch = document.querySelector(".header-bottom__search");
  const headerSearchOpen = document.querySelector(".header-bottom__box-img");
  const headerSearchClose = document.querySelector(
    ".header-bottom__form-close"
  );

  headerSearchOpen.addEventListener("click", () => {
    headerSerch.classList.add("searh-hidden");
  });

  headerSearchClose.addEventListener("click", () => {
    headerSerch.classList.remove("searh-hidden");
  });



  //TEXT
  const text = document.querySelector(".text p");
  if(text){
    text.innerHTML = text.innerText
    .split("")
    .map(
      (char, i) =>
        ` <span style="transform: rotate(${i * 13.9}deg);">${char}</span>`
    )
    .join("");
  }
  
//ACC
const questionsWrapper = document.querySelectorAll('.questions__wrapper');


if(questionsWrapper){
  questionsWrapper.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('open')
    })
  })
}





//TABS
const tabsItem = document.querySelector('.tabs__item');
const tabsItemBtn = document.querySelectorAll('.tabs__item-btn');
const tabsContent = document.querySelectorAll('.tabs__content');

function tabsHide(){
    tabsContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show');
    });

    tabsItemBtn.forEach(btn =>{
        btn.classList.remove('tabs-active');
    })
}
function tabsShow(i){
    tabsContent[i].classList.add('show');
    tabsContent[i].classList.remove('hide');
    tabsItemBtn[i].classList.add('tabs-active');
}


if(tabsItem && tabsContent && tabsItemBtn){
  tabsItem.addEventListener('click', (e)=>{
    const target = e.target;
    
    if(target && target.classList.contains('tabs__item-btn')){
        tabsItemBtn.forEach((item, i)=>{
            if(target == item){
                tabsHide();
                tabsShow(i);
            }
           
        })
       
    }
})

tabsHide();
tabsShow(0);
}//if

const tabsItemModernization = document.querySelector('.modernization-tabs__item');
const tabsItemBtnModernization = document.querySelectorAll('.modernization-tabs__item-btn');
const tabsContentModernization = document.querySelectorAll('.modernization-tabs__content');

function tabsHideModernization(){
    tabsContentModernization.forEach(item => {
        item.classList.add('hide-modernization');
        item.classList.remove('show-modernization');
    });

    tabsItemBtnModernization.forEach(btn =>{
        btn.classList.remove('modernization-tabs-active');
    })
}
function tabsShowModernization(i){
    tabsContentModernization[i].classList.add('show-modernization');
    tabsContentModernization[i].classList.remove('hide-modernization');
    tabsItemBtnModernization[i].classList.add('modernization-tabs-active');
}


if(tabsItemModernization && tabsContentModernization && tabsItemBtnModernization){
  tabsItemModernization.addEventListener('click', (e)=>{
    const target = e.target;
    
    if(target && target.classList.contains('modernization-tabs__item-btn')){
        tabsItemBtnModernization.forEach((item, i)=>{
            if(target == item){
                tabsHideModernization();
                tabsShowModernization(i);
            }
           
        })
       
    }
})

tabsHideModernization();
tabsShowModernization(0);
}//if







});
