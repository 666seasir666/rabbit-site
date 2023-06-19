
const appHeaderBox = document.querySelector('.app-header-box')
const appHeader = appHeaderBox.querySelector('.app-header')

// 窗口滚动 添加事件侦听器 
window.addEventListener('scroll', watchScroll)

//
function watchScroll() {
    // 获取绑定客户端Rect
    const { top } = appHeaderBox.getBoundingClientRect()
    console.log(top);
    // 类列表  固定的 top小于等于0
    appHeader.classList.toggle("fixed", top <= 0);
}

(function () {
    const elevator = document.querySelector('.xtx-elevator')
    // 获取轮播图距离页面顶部位置
    const home_entry = document.querySelector('.home-entry')
    // 1.当页面滚动大于300像素，就显示电梯导航
    // 2.给页面添加滚动事件
    window.addEventListener('scroll', function () {
        const n = document.documentElement.scrollTop
        // if (n >= 300) {
        //     elevator.style.opacity = 1
        // } else {
        //     elevator.style.opacity = 0
        // }
        //三元运算符-简写
        elevator.style.opacity = n >= home_entry.offsetTop ? 1 : 0
    })

    // 点击返回页面顶部
    // 1.获取返回按钮
    const backTop = document.querySelector('#backTop')
    // 2.添加返回点击事件
    backTop.addEventListener('click', function () {
        document.documentElement.scrollTop = 0
    })
})();

(function () {
    // 点击页面可以滑动
    // 2.获取右侧导航栏li的父元素
    const list = document.querySelector('.xtx-elevator-list')
    list.addEventListener('click', function (e) {
        if (e.target.tagName === 'A' && e.target.dataset.name) {
            // 本身没有active类名,先获取这个类名
            const old = document.querySelector('.xtx-elevator-list .active')
            // console.log(old);  //会找不到这个类名 返回null
            // 找不到在进行判断
            if (old) old.classList.remove('active')
            // 如果原来有active类的对象，就移出类；如果开始就没有对象，就不删除，所以不报错
            //old找不到后面的判断则不执行！
            // 当前元素添加active类
            e.target.classList.add('active')  //事件委托
            // console.log(e.target);
            console.log(e.target.dataset.name);  //获取自定义属性
            const top = (document.querySelector(`.home-${e.target.dataset.name}`).offsetTop); //获取对应大盒子的offsetTop
            // 让页面滚动到对应的位置
            document.documentElement.offsetTop = top
            console.log(top);
        }
    })

    // 3.页面滚动，可以根据大盒子 选 小盒子li 添加active 类
    window.addEventListener('scroll', function () {
        // 3.1 先移出类
        // 本身没有active类名,先获取这个类名
        const old = document.querySelector('.xtx-elevator-list .active')
        // console.log(old);  //会找不到这个类名 返回null
        // 找不到在进行判断
        if (old) old.classList.remove('active')
        // 3.2判断页面当前滑动的位置,选择小盒子li

        // 获取4给大盒子
        const news = document.querySelector('.home-new')
        const popular = document.querySelector('.home-popular')
        const banner = document.querySelector('.home-banner')
        const topic = document.querySelector('.home-topic')
        const n = this.document.documentElement.scrollTop
        if (n >= news.offsetTop && n < popular.offsetTop) {
            // 选择第一个小盒子li
            document.querySelector('[data-name="new]').classList.add('active')
        } else if (n >= popular.offsetTop && n < banner.offsetTop) {
            document.querySelector('[data-name="popular"]').classList.add('active')
        } else if (n >= banner.offsetTop && n < topic.offsetTop) {
            document.querySelector('[data-name="banner"]').classList.add('active')
        } else if (n >= topic.offsetTop) {
            document.querySelector('[data-name="topic"]').classList.add('active')
        }
    })
})();