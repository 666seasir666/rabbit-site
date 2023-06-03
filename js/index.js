// 定义定时器
let timer = null
let currentIndex = 0 // 这个 currentIndex 就是为了控制切换的图片，名字随便取得？

// 获取轮播图父盒子
const carouselBox = document.querySelector('.carousel-box')

// 获取上一张按钮元素
const prevBtn = document.querySelector('.icon-angle-left')

// 监听按钮点击事件 点击上一张按钮就会调用 clickPrevBtn 函数
prevBtn.addEventListener('click', clickPrevBtn)
function clickPrevBtn () {
    console.log('click prev btn');
    prev()
}

// 获取下一张按钮元素
const nextBtn = document.querySelector('.icon-angle-right') // nextBtn后面为什么要加btn 语义化 代表按钮 button 缩写

// 监听按钮点击事件 点击下一张按钮就会调用 clickNextBtn 函数
nextBtn.addEventListener('click', clickNextBtn)
function clickNextBtn () {
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
function clickitemsBox (e) {
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