const drawerBtn = document.querySelector(".js-drawer-btn");
const drawer = document.querySelector(".js-drawer");
const headerHeight = document.querySelector(".l-header").clientHeight;
// drawer
function openDrawer() {
  this.classList.toggle("is-open");
  drawer.classList.toggle("is-open");
  document.querySelector("body").classList.toggle("is-open");
}

drawerBtn.addEventListener("click", openDrawer);

// smooth scroll - jquery

$(".js-drawer a[href^='#']").on("click", function () {
  $(".js-drawer-btn").removeClass("is-open");
  $(".js-drawer").removeClass("is-open");
});
$("a[href^='#']").on("click", function (e) {
  const id = $(this).attr("href");
  const target = $(id === "#" ? "html" : id);
  const position = target.offset().top - headerHeight;
  $("html,body").animate(
    {
      scrollTop: position,
    },
    500,
    "swing"
  );
});

// smooth scroll  - js

// document.querySelectorAll('.js-drawer a[href^="#"]').forEach((drawerLink) => {
//   drawerLink.addEventListener("click", (e) => {
//     drawerBtn.classList.remove("is-open");
//     drawer.classList.remove("is-open");
//   });
// });

// document.querySelectorAll('a[href^="#"]').forEach((link) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();
//     const id = link.getAttribute("href");
//     const target = id === "#" ? document.documentElement : document.querySelector(id);
//     const position = target.offsetTop - headerHeight;

//     window.scrollTo({
//       top: position,
//       behavior: "smooth",
//     });
//     // target.scrollIntoView({ //便利だが、ヘッダーの高さを考慮しない
//     //   behavior: "smooth",
//     //   block: "start",
//     // });
//   });
// });

// swiper
document.addEventListener("DOMContentLoaded", (event) => {
  const pickupSwiper = new Swiper(".js-pickup-swiper", {
    spaceBetween: 33,
    loop: true,
    slidesPerView: 1.3423,
    centeredSlides: true,
    cssmode: true,
    // autoplay: {
    //   delay: 0,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".p-pickup__pagination",
    },
    navigation: {
      nextEl: ".p-pickup__next",
      prevEl: ".p-pickup__prev",
    },

    breakpoints: {
      768: {
        slidesPerView: 2.5,
      },
      1000: {
        slidesPerView: 3.0,
      },
    },
  });
});

// custom select jquery version

const customSelectBtn = $(".js-custom-select");
const customSelectOptions = $(".js-custom-select-options");
const realSelect = $(".js-real-select");
customSelectBtn.on("click", function () {
  customSelectOptions.slideToggle(300);
  $(this).toggleClass("is-open");
});

$(".js-custom-select-options div").on("click", function () {
  const selectedValue = $(this).data("value");
  const selectedText = $(this).text();
  customSelectOptions.slideUp(300);
  realSelect.val(selectedValue);
  customSelectBtn.text(selectedText).css("color", "#202020");
  customSelectBtn.removeClass("is-open");
  // console.log(realSelect.val());
});

// accordion Jquery version

if (window.matchMedia("(max-width: 768px)").matches) {
  $(".js-qna-head").on("click", function () {
    const targetParent = $(this).closest(".js-qna-item");
    const targetBody = targetParent.find(".js-qna-body");

    if (targetParent.hasClass("is-open-qna")) {
      targetParent.removeClass("is-open-qna");
      targetBody.slideUp();
      return;
    }
    $(".js-qna-item").removeClass("is-open-qna");
    $(".js-qna-body").slideUp();

    targetParent.addClass("is-open-qna");
    targetBody.slideDown();
  });
}

// contact form validation
const contactInputs = Array.from(document.querySelectorAll(".js-contact-input"));
const contactSubmitBtn = document.querySelector(".js-contact-submit");

function checkValidation(input) {
  const inputItem = input.closest(".p-contact__input__item");
  if (!input.checkValidity()) {
    inputItem.classList.add("is-invalid");
  } else {
    inputItem.classList.remove("is-invalid");
  }
}

contactInputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    checkValidation(e.target);
  });
});

contactSubmitBtn.addEventListener("click", function (e) {
  contactInputs.forEach((input) => {
    checkValidation(input);
  });
});

// accordion JS version

// const qnaHeads = document.querySelectorAll(".js-qna-head");
// const qnaItem = document.querySelectorAll(".js-qna-item");
// function toggleQna() {
//   const targetParent = this.closest(".js-qna-item");
//   const targetBody = targetParent.querySelector(".js-qna-body");

//   if (targetParent.classList.contains("is-open-qna")) {
//     targetParent.classList.remove("is-open-qna");
//     targetBody.style.maxHeight = 0;
//     return;
//   }
//   qnaItem.forEach((item) => {
//     item.classList.remove("is-open-qna");
//     item.querySelector(".js-qna-body").style.maxHeight = 0;
//   });

//   targetParent.classList.toggle("is-open-qna");
//   targetBody.style.maxHeight = targetBody.scrollHeight + "px";
// }
// if (window.matchMedia("(max-width: 768px)").matches) {
//   qnaHeads.forEach((btn) => {
//     btn.addEventListener("click", toggleQna);
//   });
// }
