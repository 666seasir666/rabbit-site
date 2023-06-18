// 轮播图

// 获取轮播图父级元素
// const xtx_carousel = document.querySelector('.xtx-carousel')

// 获取ul
// const carousel_body = document.querySelector('.carousel-body')

// 获取li
const carousel_item = document.querySelectorAll('.carousel-item')
// console.log(carousel_item);

for (let i = 0; i < carousel_item.length; i++) {
    carousel_item.style.display = none
    console.log(carousel_item);
}

//获取上一张按钮
const prev = document.querySelector('.prev')

//获取下一张按钮
const next = document.querySelector('.next')

let i = 0
// 添加点击事件  上一张
prev.addEventListener('click', function () {
    console.log(111);
})

// 添加点击事件  上一张
next.addEventListener('click', function () {
    console.log(222);
})