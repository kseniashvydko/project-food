
// Открыть модальное окно
jQuery(".open-modal-btn").click (function(e) {
  document.getElementById("my-modal").classList.add("open")
})

jQuery(".open-modal-btn-two").click (function(e) {
    document.getElementById("my-modal-two").classList.add("open")
  })

jQuery(".open-modal-btn-tel").click (function(e) {
    document.getElementById("my-modal-tel").classList.add("open")
})
jQuery(".open-modal-btn-check").click (function(e) {
    document.getElementById("my-modal-check").classList.add("open")
})
jQuery(".open-modal-btn-subscribe").click (function(e) {
    document.getElementById("my-modal-subscribe").classList.add("open")
})
// Закрыть модальное окно
document.getElementById("close-my-modal-btn").addEventListener("click", function() {
    document.getElementById("my-modal").classList.remove("open")
  }); 

document.getElementById("close-my-modal-btn-two").addEventListener("click", function() {
    document.getElementById("my-modal-two").classList.remove("open")
}); 

document.getElementById("close-my-modal-btn-tel").addEventListener("click", function() {
    document.getElementById("my-modal-tel").classList.remove("open")
});  
document.getElementById("close-my-modal-btn-check").addEventListener("click", function() {
    document.getElementById("my-modal-check").classList.remove("open")
}); 
document.getElementById("close-my-modal-btn-subscribe").addEventListener("click", function() {
    document.getElementById("my-modal-subscribe").classList.remove("open")
});   
// Закрыть модальное окно при нажатии на Esc
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
      document.getElementById("my-modal").classList.remove("open")
  }
});

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal-two").classList.remove("open")
    }
});

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal-tel").classList.remove("open")
    }
});
window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        document.getElementById("my-modal-subscribe").classList.remove("open")
    }
});
// Закрыть модальное окно при клике вне его
document.querySelector("#my-modal .modal__box").addEventListener('click', event => {
  event._isClickWithInModal = true;
});
document.getElementById("my-modal").addEventListener('click', event => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove('open');
});

document.querySelector("#my-modal-two .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
  });
  document.getElementById("my-modal-two").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});
document.querySelector("#my-modal-tel .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
  });
document.getElementById("my-modal-tel").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});
document.querySelector("#my-modal-check .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
  });
document.getElementById("my-modal-check").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});
document.querySelector("#my-modal-subscribe .modal__box").addEventListener('click', event => {
    event._isClickWithInModal = true;
  });
document.getElementById("my-modal-subscribe").addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

/* аккордеон faq*/
document.querySelectorAll('.js-faq-trigger').forEach(function(trigger) {
    // Получаем родителя, элемент аккордеона
    var parent = trigger.closest('.js-faq');
    
    // клик по шапке
    trigger.addEventListener('click', function(e) {
        
        // если при клике у него уже есть активный класс 
        if (parent.classList.contains('is-active')) {
            // то мы его удаляем
            parent.classList.remove('is-active');
        } 
        // если при клике мы не нашли у элемента активный класс
        else {
            // удаляем у всех элементов активный класс
            document.querySelectorAll('.js-faq').forEach(function(item) {
                item.classList.remove('is-active');
            });            
            // добавляем класс тому элементу, по которому кликнули
            parent.classList.add('is-active');
        }
    })
});

//калькулятор калорий

let result = document.querySelector(".description__form-res");

let sex, height, weight, age, ratio;

function calcTotal() {
    if (!sex || !height || !weight || !age || !ratio) {
        result.textContent = "____";
        return;
    }


    if (sex === 'female') {
        result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
    } else {
        result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
    }
}

calcTotal()

function getStaticInformation(parentSelector, activeClass){
    let elements = document.querySelectorAll(`${parentSelector} div`);

    document.querySelector(parentSelector).addEventListener("click", (e) => {
        if (e.target.getAttribute('data-ratio')) {
            ratio = +e.target.getAttribute('data-ratio');
        } else {
            sex = e.target.getAttribute('id')
        }
        console.log(ratio, sex);

        elements.forEach(elem => {
            elem.classList.remove(activeClass)
        });

        e.target.classList.add(activeClass)
        calcTotal()
    });
    
}
getStaticInformation('#gender', '.description__form-item-active')
getStaticInformation('.description__form-choose', '.description__form-activity')

function getInputInformation(selector){
    const input = document.querySelector(selector);

    input.addEventListener('input', () => {
        switch(input.getAttribute('id')) {
            case 'height' :
                height = +input.value;
                break;
            case 'weight':
                weight = +input.value;
                break;
            case 'age':
                age = +input.value;
                break;
        }
        calcTotal()
    })
}
getInputInformation('#height');
getInputInformation('#weight');
getInputInformation('#age');


$('#choose .description__form-activity').on("click",function(){
    $("#choose .description__form-activity.activity-active").removeClass('activity-active');
    $(this).addClass("activity-active");
});

$('#gender .description__form-gender').on("click",function(){
    $("#gender .description__form-gender.gender-active").removeClass('gender-active');
    $(this).addClass("gender-active");
});

$('#calorie .program__calorie-item').on("click",function(){
    $("#calorie .program__calorie-item.program__calorie-active").removeClass('program__calorie-active');
    $(this).addClass("program__calorie-active");
});

$('#period .program__period-item').on("click",function(){
    $("#period .program__period-item.period__active").removeClass('period__active');
    $(this).addClass("period__active");
});

$('#program-days .program__days-btn').on("click",function(){
    $("#program-days .program__days-btn.program-days-active").removeClass('program-days-active');
    $(this).addClass("program-days-active");
});

$('#example .example__btn').on("click",function(){
    $("#example .example__btn.example-active").removeClass('example-active');
    $(this).addClass("example-active");
});

$('#faq .faq__btn').on("click",function(){
    $("#faq .faq__btn.faq-active").removeClass('faq-active');
    $(this).addClass("faq-active");
});

// faq переключа

$(".link").click(function(e){
    e.preventDefault();
    let target = $(this).attr('href');
    $(target).addClass('show')
             .siblings().removeClass('show');
  });


let btn1 = document.querySelector('#faq__products');
let items = document.querySelector('.faq-hide');

let btn2 = document.querySelector('#faq__programs');
let items2 = document.querySelector('.faq-hide2');

let btn3 = document.querySelector('#faq__delivery');
let items3 = document.querySelector('.faq-hide3');

btn1.addEventListener('click', function() {
  if (items.style.display === "none") {
    items.style.display = "block";
  } else {
    items.style.display = "none";
  }
})


btn2.addEventListener('click', function() {
    if (items2.style.display === "none") {
      items2.style.display = "block";
    } else {
      items2.style.display = "none";
    }
})

btn3.addEventListener('click', function() {
    if (items3.style.display === "none") {
      items3.style.display = "block";
    } else {
        items3.style.display = "none";
      }
})  

$(function() {
    $('.faq__btn').on('click', function(e) {
        e.preventDefault();
        var block = $(this).attr('id');
        $(block).css('display', 'block');
        $('.faq__items').each(function() {
            $(this).css('display', 'none');
        });
        
    });
});

/* mask for tel*/ 

$(document).ready(function() {
    $(".tel").mask("+7(999) 999-9999");
})
$(document).ready(function() {
    $(".modal-tel").mask("+7(999) 999-9999");
})





