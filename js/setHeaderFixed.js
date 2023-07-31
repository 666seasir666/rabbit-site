

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

// (function () {
//     // 点击页面可以滑动
//     // 2.获取右侧导航栏li的父元素
//     const list = document.querySelector('.xtx-elevator-list')
//     list.addEventListener('click', function (e) {
//         if (e.target.tagName === 'A' && e.target.dataset.name) {
//             console.log(e.target.tagName);
//             // 本身没有active类名,先获取这个类名
//             const old = document.querySelector('.xtx-elevator-list .active')
//             // console.log(old);  //会找不到这个类名 返回null
//             // 找不到在进行判断
//             if (old) old.classList.remove('active')
//             // 如果原来有active类的对象，就移出类；如果开始就没有对象，就不删除，所以不报错
//             //old找不到后面的判断则不执行！
//             // 当前元素添加active类
//             e.target.classList.add('active')  //事件委托
//             // console.log(e.target);
//             console.log(e.target.dataset.name);  //获取自定义属性
//             const top = (document.querySelector(`.home-${e.target.dataset.name}`).offsetTop); //获取对应大盒子的offsetTop
//             // 让页面滚动到对应的位置
//             // document.documentElement.offsetTop = top
//             console.log(top);
//             console.log(document.querySelector(`.home-${e.target.dataset.name}`));
//             document.querySelector(`.home-${e.target.dataset.name}`).scrollIntoView({ behavior: 'smooth' })
//         }
//     })

//     // 3.页面滚动，可以根据大盒子 选 小盒子li 添加active 类
//     window.addEventListener('scroll', function () {
//         // 3.1 先移出类
//         // 本身没有active类名,先获取这个类名
//         const old = document.querySelector('.xtx-elevator-list .active')
//         // console.log(old);  //会找不到这个类名 返回null
//         // 找不到在进行判断
//         if (old) old.classList.remove('active')
//         // 3.2判断页面当前滑动的位置,选择小盒子li

//         // 获取4给大盒子
//         const news = document.querySelector('.home-new')
//         const popular = document.querySelector('.home-popular')
//         const banner = document.querySelector('.home-banner')
//         const topic = document.querySelector('.home-topic')
//         const n = this.document.documentElement.scrollTop
//         if (n >= news.offsetTop && n < popular.offsetTop) {
//             // 选择第一个小盒子li
//             document.querySelector('[data-name=new]').classList.add('active')
//         } else if (n >= popular.offsetTop && n < banner.offsetTop) {
//             document.querySelector('[data-name=popular]').classList.add('active')
//         } else if (n >= banner.offsetTop && n < topic.offsetTop) {
//             document.querySelector('[data-name=banner]').classList.add('active')
//         } else if (n >= topic.offsetTop) {
//             document.querySelector('[data-name=topic]').classList.add('active')
//         }
//     })
// })();


(function () {
    // 获取右侧导航栏li的父元素
    const list = document.querySelector('.xtx-elevator-list');
    const links = list.querySelectorAll('a');

    // 事件委托处理点击事件
    list.addEventListener('click', function (e) {
        const clickedLink = e.target.closest('a');
        if (clickedLink && clickedLink.dataset.target) {
            const target = clickedLink.dataset.target;
            const targetSection = document.querySelector(`.home-${target}`);

            // 移除当前拥有 .active 类的链接的 .active 类
            const oldActiveLink = list.querySelector('.active');
            if (oldActiveLink) {
                oldActiveLink.classList.remove('active');
            }

            // 当前元素添加 .active 类
            clickedLink.classList.add('active');

            // 让页面滚动到对应的位置
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // 节流函数，用于优化滚动事件的性能
    function throttle(func, delay) {
        let timer = null;
        return function () {
            const context = this;
            const args = arguments;
            if (!timer) {
                timer = setTimeout(() => {
                    func.apply(context, args);
                    timer = null;
                }, delay);
            }
        };
    }

    // 页面滚动，更新导航栏链接的 .active 类
    function updateActiveLink() {
        const scrollPosition = window.scrollY || window.pageYOffset;
        const sections = document.querySelectorAll('[class^="home-"]');
        let activeLink = links[links.length - 1]; // Default to the last link

        sections.forEach((section) => {
            if (scrollPosition >= section.offsetTop - 100) {
                const target = section.className.split(' ')[0].substring(5);
                activeLink = list.querySelector(`[data-target="${target}"]`);
            }
        });

        // 移除当前拥有 .active 类的链接的 .active 类
        const oldActiveLink = list.querySelector('.active');
        if (oldActiveLink) {
            oldActiveLink.classList.remove('active');
        }

        // 当前元素添加 .active 类
        activeLink.classList.add('active');
    }

    // 页面滚动事件进行节流处理
    const throttledUpdateActiveLink = throttle(updateActiveLink, 100);
    window.addEventListener('scroll', throttledUpdateActiveLink);
})();