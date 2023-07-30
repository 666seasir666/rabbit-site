// 主页轮播图
(function () {
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
        // console.log('鼠标进入');
        timer && stop()
    })
    // 监听轮播图父盒子鼠标移出事件
    carouselBox.addEventListener('mouseleave', function () {
        // console.log('鼠标离开', !timer);
        !timer && swipe()
    })

    function swipe() {
        // console.log('启动计时器');
        timer = setInterval(() => {
            // 每隔一秒执行
            next()
        }, 3000);
    }

    // 停止轮播
    function stop() {
        // console.log('停止计时器');
        clearInterval(timer)
        timer = null
    }

    swipe();    //加分号，否则报错！！！
})();

// 渲染"新鲜好物"的li
(function () {
    // 1.储存数组
    let data = [
        {
            src: './images/new_goods_1.jpg',
            title: '睿米无线吸尘器F8',
            num: 899
        },
        {
            src: './images/new_goods_2.jpg',
            title: '智能环绕3D空调',
            num: 1299
        },
        {
            src: './images/new_goods_3.jpg',
            title: '广东软软糯米煲仔饭8',
            num: 129
        },
        {
            src: './images/new_goods_4.jpg',
            title: '罗西机械智能手表',
            num: 1299
        },
    ]
    // 2.获取新鲜好物 - 内容 - 区域
    const ul = document.querySelector('.clearfix ul')
    // 3.开始for循环。根据数组的个数，创建对应的小li
    for (let i = 0; i < data.length; i++) {
        // 创建新的小li
        const li = document.createElement('li')
        // ul追加li
        ul.appendChild(li)
        // 把内容给创建好的li
        li.innerHTML = `
            <a href="#" class="router-link-active">
                <img src=${data[i].src} alt="#">
                <p class="name">${data[i].title}</p>
                <p class="desc">¥
                <span class="commodity">${data[i].num}</span>
                </p>
                <b>新品</b>
            </a>`
    }
})();

// 渲染"人气推荐"的li
(function () {
    // 1.储存数组
    let data = [
        {
            src: './images/popular_1.jpg',
            uname: '特惠推荐',
            desc: '它们最实惠'
        },
        {
            src: './images/popular_2.jpg',
            uname: '爆款推荐',
            desc: '它们最受欢迎'
        },
        {
            src: './images/popular_3.jpg',
            uname: '一站买全',
            desc: '使用场景下精心优选'
        },
        {
            src: './images/popular_4.jpg',
            uname: '领券中心',
            desc: '更多超值优惠券'
        },
    ]
    // 2.获取人气推荐 - 内容 - 区域
    const ul = document.querySelector('.popularity ul')
    // 3.开始for循环。根据数组的个数，创建对应的小li
    for (let i = 0; i < data.length; i++) {
        // 创建新的小li
        const li = document.createElement('li')
        // ul追加li
        ul.appendChild(li)
        // 把内容给创建好的li
        li.innerHTML = `
            <a href="#" class="router-link-active">
                <img src=${data[i].src}
                alt="#">
                <p class="name">${data[i].uname}</p>
                <p class="desc">${data[i].desc}</p>
                <b>新品</b>
            </a>`
    }
})();

// 渲染"热门品牌"的li
(function () {
    let data = [
        {
            src: './images/Popular_brands_1.jpg',
            uname: '特惠推荐',
            desc: '它们最实惠'
        },
        {
            src: './images/Popular_brands_2.jpg',
            uname: '特惠推荐',
            desc: '它们最实惠'
        },
        {
            src: './images/Popular_brands_3.jpg',
            uname: '特惠推荐',
            desc: '它们最实惠'
        },
        {
            src: './images/Popular_brands_4.jpg',
            uname: '特惠推荐',
            desc: '它们最实惠'
        },
        {
            src: './images/Popular_brands_5.jpg',
            uname: '特惠推荐',
            desc: '它们最实惠'
        },
    ]

    const ul = document.querySelector('.box .list')
    // 3.开始for循环。根据数组的个数，创建对应的小li
    for (let i = 0; i < data.length; i++) {
        // 创建新的小li
        const li = document.createElement('li')
        // ul追加li
        ul.appendChild(li)
        // 把内容给创建好的li
        li.innerHTML = `
            <a href="#">
                <img src=${data[i].src} alt="#">
            </a>`
    }
})();

// 居家、美食、服饰、母婴 
(function () {
    // 居家
    (function () {
        let data = [
            {
                src: './images/Home1.jpg',
                uname: '日式黑陶茶具枯山水茶具礼盒装',
                desc: '经典枯山水造型极简别致礼盒礼袋装',
                price: '218.00'
            },
            {
                src: './images/Home2.jpg',
                uname: '魔术盒快客杯旅行盖碗茶具套装',
                desc: '轻松收纳携带方便随时随地品茶',
                price: '148.00'
            },
            {
                src: './images/Home3.jpg',
                uname: '日式黑陶功夫茶组双侧把茶具礼盒装',
                desc: '日式风格单把设计防烫隔热美观大气',
                price: '288.00'
            },
            {
                src: './images/Home4.jpg',
                uname: '大师监制龙泉青瓷茶叶罐',
                desc: '世界非遗|青瓷世家出品|釉润如玉',
                price: '139.00'
            },
            {
                src: './images/Home5.jpg',
                uname: '古法温酒汝瓷酒具套装白酒杯莲花温酒器',
                desc: '以汝瓷为载体制作的温酒器套组，酒器精美，酒杯玲珑、淡淡的天青釉色，足以让酒席上，再添几分色彩。',
                price: '488.00'
            },
            {
                src: './images/Home6.jpg',
                uname: '智能温控细嘴流速刚刚好咖啡手冲壶电热水壶',
                desc: '智能温控出水流畅，容易操控',
                price: '389.00'
            },
            {
                src: './images/Home7.jpg',
                uname: '竹制干泡茶盘正方形沥水茶台品茶盘',
                desc: '干泡蓄水拆洗方便轻便实用',
                price: '109.00'
            },
            {
                src: './images/Home8.jpg',
                uname: '称心如意手摇咖啡磨豆机咖啡豆研磨机',
                desc: '随时随地享受自然美味',
                price: '289.00'
            },
        ]

        const ul = document.querySelector('.box .At-home')
        // 3.开始for循环。根据数组的个数，创建对应的小li
        for (let i = 0; i < data.length; i++) {
            // 创建新的小li
            const li = document.createElement('li')
            // ul追加li
            ul.appendChild(li)
            // 把内容给创建好的li
            li.innerHTML = `
                <div class="goods-item">
                    <a href="" class="image">
                        <img src=${data[i].src} alt="#">
                    </a>
                    <p class="name">${data[i].uname}</p>
                    <p class="desc ellipsis">${data[i].desc}</p>
                    <p class="price">¥${data[i].price}</p>

                    <div class="extra">
                        <a href="#">
                            <span>找相似</span>
                            <span>发现现多宝贝 ></span>
                        </a>
                    </div>
                </div>`
        }
    })();
    // 美食
    (function () {
        let data = [
            {
                src: './images/fine_food1.jpg',
                uname: '网易味央黑猪五花肉330g*1袋',
                desc: '安心黑猪甄选好礼',
                price: '50.00'
            },
            {
                src: './images/fine_food2.jpg',
                uname: '网易味央黑猪里脊200g*1袋',
                desc: '安心黑猪甄选好礼',
                price: '49.90'
            },
            {
                src: './images/fine_food3.jpg',
                uname: '网易味央黑猪猪蹄330g*1袋',
                desc: '安心黑猪甄选好礼',
                price: '38.90'
            },
            {
                src: './images/fine_food4.jpg',
                uname: '网易味央黑猪猪肘330g*1袋',
                desc: '安心黑猪甄选好礼',
                price: '37.00'
            },
            {
                src: './images/fine_food5.jpg',
                uname: '古法温酒汝瓷酒具套装白酒杯莲花温酒器',
                desc: '以汝瓷为载体制作的温酒器套组，酒器精美，酒杯玲珑、淡淡的天青釉色，足以让酒席上，再添几分色彩。',
                price: '218.00'
            },
            {
                src: './images/fine_food6.jpg',
                uname: '网易味央黑猪去骨蹄膀500g*1袋',
                desc: '安心黑猪甄选好礼',
                price: '65.00'
            },
            {
                src: './images/fine_food7.jpg',
                uname: '网易味央黑猪大排330g*1袋',
                desc: '安心黑猪甄选好礼',
                price: '37.00'
            },
            {
                src: './images/fine_food8.jpg',
                uname: '个大体肥，冷冻对虾400g',
                desc: '新鲜优质虾品，星级享受',
                price: '39.90'
            },
        ]

        const ul = document.querySelector('.box .delicacy')
        // 3.开始for循环。根据数组的个数，创建对应的小li
        for (let i = 0; i < data.length; i++) {
            // 创建新的小li
            const li = document.createElement('li')
            // ul追加li
            ul.appendChild(li)
            // 把内容给创建好的li
            li.innerHTML = `
                <div class="goods-item">
                    <a href="" class="image">
                        <img src=${data[i].src} alt="#">
                    </a>
                    <p class="name">${data[i].uname}</p>
                    <p class="desc ellipsis">${data[i].desc}</p>
                    <p class="price">¥${data[i].price}</p>

                    <div class="extra">
                        <a href="#">
                            <span>找相似</span>
                            <span>发现现多宝贝 ></span>
                        </a>
                    </div>
                </div>`
        }
    })();
    // 服饰
    (function () {
        let data = [
            {
                src: './images/adornment1.jpg',
                uname: '男女经典两带式软木拖鞋',
                desc: '经典两带式，舒适不过时',
                price: '79.00'
            },
            {
                src: './images/adornment2.jpg',
                uname: 'KENROLL室外防滑男女运动拖鞋',
                desc: '潮流外穿，运动鞋型',
                price: '39.90'
            },
            {
                src: './images/adornment3.jpg',
                uname: 'KENROLL吾皇潮趣男女室外拖鞋',
                desc: '潮流吾皇万睡',
                price: '139.00'
            },
            {
                src: './images/adornment4.jpg',
                uname: 'KENROLL男女简洁多彩一片式室外拖',
                desc: '多彩多色，夏日出行防护',
                price: '99.00'
            },
            {
                src: './images/adornment5.jpg',
                uname: 'Kenroll女士防滑夏季人字沙滩拖鞋',
                desc: '清爽人字拖鞋，轻松夏日出行',
                price: '99.00'
            },
            {
                src: './images/adornment6.jpg',
                uname: '情侣款经典帆布鞋',
                desc: '元气满满，玩味经典',
                price: '76.00'
            },
            {
                src: './images/adornment7.jpg',
                uname: '情侣款经典小白鞋',
                desc: '一双胜十双的穿搭利器',
                price: '359.00'
            },
            {
                src: './images/adornment8.jpg',
                uname: '深船型两带式可外穿软弹拖鞋',
                desc: '软弹如云朵般，开天窗版透气',
                price: '27.50'
            },
        ]

        const ul = document.querySelector('.box .dress')
        // 3.开始for循环。根据数组的个数，创建对应的小li
        for (let i = 0; i < data.length; i++) {
            // 创建新的小li
            const li = document.createElement('li')
            // ul追加li
            ul.appendChild(li)
            // 把内容给创建好的li
            li.innerHTML = `
                <div class="goods-item">
                    <a href="" class="image">
                        <img src=${data[i].src} alt="#">
                    </a>
                    <p class="name">${data[i].uname}</p>
                    <p class="desc ellipsis">${data[i].desc}</p>
                    <p class="price">¥${data[i].price}</p>

                    <div class="extra">
                        <a href="#">
                            <span>找相似</span>
                            <span>发现现多宝贝 ></span>
                        </a>
                    </div>
                </div>`
        }
    })();
    // 母婴
    (function () {
        let data = [
            {
                src: './images/Mother1.jpg',
                uname: '儿童字母纯棉POLO衫73-130cm',
                desc: '甄选100%纯棉面料，手感细腻柔软，穿着舒适透气。',
                price: '99.00'
            },
            {
                src: './images/Mother2.jpg',
                uname: '科技凉感抗菌面料，男童短袖polo衫',
                desc: '科技凉感抗菌面料，凉爽舒适',
                price: '69.90'
            },
            {
                src: './images/Mother3.jpg',
                uname: 'KENROLL吾皇潮趣男女室外拖鞋',
                desc: '潮流吾皇万睡',
                price: '139.00'
            },
            {
                src: './images/Mother4.jpg',
                uname: '索罗娜面料，圆领印花插肩袖T恤110-160cm',
                desc: '索罗娜玉米纤维，杜邦新科技面料，绵软干爽舒适',
                price: '59.00'
            },
            {
                src: './images/Mother5.jpg',
                uname: '儿童多色圆领印花短袖T恤110-160cm',
                desc: '40S精梳棉面料，手感柔软细腻，舒适透气，耐洗耐穿',
                price: '59.00'
            },
            {
                src: './images/Mother6.jpg',
                uname: '2023春季新品，宝宝四季连体哈衣59-90cm',
                desc: '不同开襟方式，穿出更多花样',
                price: '55.00'
            },
            {
                src: './images/Mother7.jpg',
                uname: '2023年春季新品，儿童纯棉长袖T恤73-130cm',
                desc: '多色可选，童趣别致',
                price: '59.00'
            },
            {
                src: './images/Mother8.jpg',
                uname: '打翻春天调色盘，儿童印花套头卫衣5-16岁',
                desc: '色彩丰富，落肩款自带时髦感',
                price: '86.00'
            },
        ]

        const ul = document.querySelector('.box .mother-and-baby')

        // 3.开始for循环。根据数组的个数，创建对应的小li
        for (let i = 0; i < data.length; i++) {
            // 创建新的小li
            const li = document.createElement('li')
            // ul追加li
            ul.appendChild(li)
            // 把内容给创建好的li
            li.innerHTML = `
                <div class="goods-item">
                    <a href="" class="image">
                        <img src=${data[i].src} alt="#">
                    </a>
                    <p class="name">${data[i].uname}</p>
                    <p class="desc ellipsis">${data[i].desc}</p>
                    <p class="price">¥${data[i].price}</p>

                    <div class="extra">
                        <a href="#">
                            <span>找相似</span>
                            <span>发现现多宝贝 ></span>
                        </a>
                    </div>
                </div>`
        }
    })();
    // 生鲜
    (function () {
        let data = [
            {
                src: './images/fresh_goods_1.jpg',
                uname: '美威 智利原味三文鱼排 240g/袋 4片装',
                desc: '海鲜年货',
                price: '59.00'
            },
            {
                src: './images/fresh_goods_2.jpg',
                uname: '红功夫 麻辣小龙虾1.5kg 4-6钱/25-32只',
                desc: '海鲜年货',
                price: '79.90'
            },
            {
                src: './images/fresh_goods_3.jpg',
                uname: '三都港 冷冻无公害黄花鱼 700g 2条 袋装',
                desc: '海鲜水产',
                price: '49.00'
            },
            {
                src: './images/fresh_goods_4.jpg',
                uname: '渔公码头 大连鲜食入味 即食海参 辽参刺参',
                desc: '调味海',
                price: '899.00'
            },
            {
                src: './images/fresh_goods_5.jpg',
                uname: '越南白心火龙果4个装 标准果400-550g',
                desc: '新鲜水果',
                price: '20.00'
            },
            {
                src: './images/fresh_goods_6.jpg',
                uname: '广西沃柑 新鲜水果 柑橘1.5kg ',
                desc: '新鲜水果',
                price: '10.00'
            },
            {
                src: './images/fresh_goods_7.jpg',
                uname: '进口 牛油果 6个装 单果重约130-180g',
                desc: '新鲜水果',
                price: '50.00'
            },
            {
                src: './images/fresh_goods_8.jpg',
                uname: '泰国进口山竹5A级 500g',
                desc: '新鲜水果',
                price: '60.00'
            },
        ]

        const ul = document.querySelector('.box .mother-and-baby')
        // 3.开始for循环。根据数组的个数，创建对应的小li
        for (let i = 0; i < data.length; i++) {
            // 创建新的小li
            const li = document.createElement('li')
            // ul追加li
            ul.appendChild(li)
            // 把内容给创建好的li
            li.innerHTML = `
                <div class="goods-item">
                    <a href="" class="image">
                        <img src=${data[i].src} alt="#">
                    </a>
                    <p class="name">${data[i].uname}</p>
                    <p class="desc ellipsis">${data[i].desc}</p>
                    <p class="price">¥${data[i].price}</p>

                    <div class="extra">
                        <a href="#">
                            <span>找相似</span>
                            <span>发现现多宝贝 ></span>
                        </a>
                    </div>
                </div>`
        }
    })();
})();

//渲染用户登录的用户名和退出登录
(function () {
    //获取"请先登录"li元素
    const pleaseLoginFirst = document.querySelector('.container li:first-child')
    //获取"请先注册"li元素
    const PleaseRegisterFirst = pleaseLoginFirst.nextElementSibling

    function render() {
        //从本地存储中获取用户名赋值给unama变量
        const uname = localStorage.getItem('xtx-uname')
        if (uname) {
            pleaseLoginFirst.innerHTML = `<a href="javascript:;"><i class="iconfont icon-user">${uname}</i></a>`

            PleaseRegisterFirst.innerHTML = `<a href="javascript:;">退出登录</a>`
        } else {
            pleaseLoginFirst.innerHTML = `<a href="./login.html">请先登录</a>`

            PleaseRegisterFirst.innerHTML = `<a href="./register.html">免费注册</a>`
        }
    }
    render() //调用函数

    // 2.点击退出登录
    PleaseRegisterFirst.addEventListener('click', function () {
        localStorage.removeItem('xtx-uname')
        render()  //重新渲染
    })
})();


(function () {
    // 处理点击事件的函数
    function handleClick(event) {
        // 获取点击的SVG元素
        var svgElement = event.target;

        // 在点击的SVG元素内找到第一个<a>元素，并获取其"href"属性值
        var href = svgElement.querySelector("a").getAttribute("href");

        // 将用户重定向到"href"属性指定的URL
        window.location.href = href;
    }

    // 获取带有类名"svg-bilibili"的SVG元素
    var bilibiliSvgElement = document.querySelector(".svg-bilibili");

    // 为"bilibiliSvgElement"添加点击事件监听器，当被点击时调用"handleClick"函��
    bilibiliSvgElement.addEventListener("click", handleClick);

    // 获取带有类名"svg-douyin"的SVG元素
    var douyinSvgElement = document.querySelector(".svg-douyin");

    // 为"douyinSvgElement"添加点击事件监听器，当被点击时调用"handleClick"函数
    douyinSvgElement.addEventListener("click", handleClick);
})();
