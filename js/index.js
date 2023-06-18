// 定义定时器
let timer = null
let currentIndex = 0 // 这个 currentIndex 就是为了控制切换的图片

// 获取轮播图父盒子
const carouselBox = document.querySelector('.carousel-box')

// 获取上一张按钮元素
const prevBtn = document.querySelector('.icon-angle-left')

// 监听按钮点击事件 点击上一张按钮就会调用 clickPrevBtn 函数
prevBtn.addEventListener('click', clickPrevBtn)
function clickPrevBtn() {
    console.log('click prev btn');
    prev()
}

// 获取下一张按钮元素
const nextBtn = document.querySelector('.icon-angle-right') // nextBtn后面为什么要加btn 语义化 代表按钮 button 缩写

// 监听按钮点击事件 点击下一张按钮就会调用 clickNextBtn 函数
nextBtn.addEventListener('click', clickNextBtn)
function clickNextBtn() {
    console.log('click next btn');
    next()
}

// 获取中间圆点 dom
// 获取 ol 元素
const itemsBox = document.querySelector('.carousel-indicator').querySelector('ol')
// 获取多个小圆点列表
const items = itemsBox.querySelectorAll('li')
// 监听小圆点父元素点击事件
itemsBox.addEventListener('click', clickitemsBox)
function clickitemsBox(e) {
    // 清除上一个类名 直接在 currentIndex 修改前移除
    items[currentIndex].classList.remove('current')
    currentIndex = e.target.dataset.index
    items[currentIndex].classList.add('current')
    carouselBox.style.transform = `translateX(-${currentIndex * 100}%)`
}

// 下一张
function next() {
    // 清除上一个类名 直接在 currentIndex 修改前移除
    items[currentIndex].classList.remove('current')
    // 添加过渡
    carouselBox.style.transition = '2s'
    if (currentIndex >= 4) {
        currentIndex = 0
        // 这里取消过渡是为了在最后一张不会慢慢飘回第一张
        carouselBox.style.transition = '0s'
    } else {
        currentIndex++
    }
    items[currentIndex].classList.add('current')
    carouselBox.style.transform = `translateX(-${currentIndex * 100}%)` // `string类型${这花括号里的 js 代码会处理}`
    // 'translateX(-' + currentIndex * 100 + ')' 两种写法结果一样
}

// 上一张
function prev() {
    // 清除上一个类名 直接在 currentIndex 修改前移除
    items[currentIndex].classList.remove('current')
    // 添加过渡
    carouselBox.style.transition = '2s'
    // 如果是第一张就跳到最后一站
    if (currentIndex == 0) {
        // 不取消过渡就会慢慢飘过去
        carouselBox.style.transition = '0s'
        currentIndex = 4
    } else {
        currentIndex--
    }
    items[currentIndex].classList.add('current')
    carouselBox.style.transform = `translateX(-${currentIndex * 100}%)` // cv工程师
}

// 监听轮播图父盒子鼠标进入事件
carouselBox.addEventListener('mouseover', function () {
    console.log('鼠标进入');
    timer && stop()
})
// 监听轮播图父盒子鼠标移出事件
carouselBox.addEventListener('mouseleave', function () {
    console.log('鼠标离开', !timer);
    !timer && swipe()
})

function swipe() {
    console.log('启动计时器');
    timer = setInterval(() => {
        // 每隔一秒执行
        next()
    }, 3000);
}

// 停止轮播
function stop() {
    console.log('停止计时器');
    clearInterval(timer)
    timer = null
}

swipe()


    //第一大模块，页面滑动可以显示和隐藏
    // 获取电梯父级元素
    // const elevator = document.querySelector('.xtx-elevator')
    // // 获取轮播图距离页面顶部位置
    // const home_entry = document.querySelector('.home-entry')
    // // 1.当页面滚动大于300像素，就显示电梯导航
    // // 2.给页面添加滚动事件
    // window.addEventListener('scroll', function () {
    //     const n = document.documentElement.scrollTop
    //     // if (n >= 300) {
    //     //     elevator.style.opacity = 1
    //     // } else {
    //     //     elevator.style.opacity = 0
    //     // }
    //     //三元运算符-简写
    //     elevator.style.opacity = n >= home_entry.offsetTop ? 1 : 0
    // })

    // // 点击返回页面顶部
    // // 1.获取返回按钮
    // const backTop = document.querySelector('#backTop')
    // // 2.添加返回点击事件
    // backTop.addEventListener('click', function () {
    //     document.documentElement.scrollTop = 0
    // })

    // (function () {
    //     const elevator = document.querySelector('.xtx-elevator')
    //     // 获取轮播图距离页面顶部位置
    //     const home_entry = document.querySelector('.home-entry')
    //     // 1.当页面滚动大于300像素，就显示电梯导航
    //     // 2.给页面添加滚动事件
    //     window.addEventListener('scroll', function () {
    //         const n = document.documentElement.scrollTop
    //         // if (n >= 300) {
    //         //     elevator.style.opacity = 1
    //         // } else {
    //         //     elevator.style.opacity = 0
    //         // }
    //         //三元运算符-简写
    //         elevator.style.opacity = n >= home_entry.offsetTop ? 1 : 0
    //     })

    //     // 点击返回页面顶部
    //     // 1.获取返回按钮
    //     const backTop = document.querySelector('#backTop')
    //     // 2.添加返回点击事件
    //     backTop.addEventListener('click', function () {
    //         document.documentElement.scrollTop = 0
    //     })
    // })()