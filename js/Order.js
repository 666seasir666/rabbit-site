// var arr = ['https://yanxuan-item.nosdn.127.net/7170d6147878a099914b7bb7ce21773f.png', '	https://yanxuan-item.nosdn.127.net/6d8d6772df51fa60c2e899a16ac34718.png', 'https://yanxuan-item.nosdn.127.net/ea1ec719c9a860eedb0cb7ef31ada4af.png', 'https://yanxuan-item.nosdn.127.net/c3b4e3640f77bb72ec4d043ef2e2a0cd.png']

// var img = document.querySelectorAll('.carousel-item')
// console.log(img);

// var index = 0;
// setInterval(function () {
//     index = ++index === arr.length ?  0 : index;
//         img.src = arr[index];

// }, 1000)

//猜你喜欢
(function () {
    let data = [
        {
            src0: ['https://yanxuan-item.nosdn.127.net/6d8d6772df51fa60c2e899a16ac34718.png'],
            src1: ['https://yanxuan-item.nosdn.127.net/7170d6147878a099914b7bb7ce21773f.png'],
            src2: ['https://yanxuan-item.nosdn.127.net/c3b4e3640f77bb72ec4d043ef2e2a0cd.png'],
            src3: ['https://yanxuan-item.nosdn.127.net/4e1cc37a232f1ae4e6fa61287c06f76f.png'],
            uname: '儿童多色圆领印花短袖T恤110-160cm',
            money: '139.0'
        },
        {
            src0: ['https://yanxuan-item.nosdn.127.net/767fc11b88b1e7b795319cd78c65f72f.png'],
            src1: ['https://yanxuan-item.nosdn.127.net/4b515f173e3e2a9b8ba5a6b41e6d2566.png'],
            src2: ['https://yanxuan-item.nosdn.127.net/930cac1a40b3979a25d55df8c5d8870d.png'],
            src3: ['https://yanxuan-item.nosdn.127.net/09ae7983369f9ddfba6ea96670ca84a7.png'],
            uname: '儿童多色圆领印花短袖T恤110-160cm',
            money: '149.0'
        },
        {
            src0: ['https://yanxuan-item.nosdn.127.net/efcbdbe9a56035d74cb3f48a0c5e8e87.png'],
            src1: ['https://yanxuan-item.nosdn.127.net/4998286ca091b2809e85c7f3cd062c37.png'],
            src2: ['https://yanxuan-item.nosdn.127.net/6ede0ef5cda2a9425713e4fc7f6cc604.png'],
            src3: ['https://yanxuan-item.nosdn.127.net/ea1ec719c9a860eedb0cb7ef31ada4af.png'],
            uname: '儿童多色圆领印花短袖T恤110-160cm',
            money: '159.0'
        },
        {
            src0: ['https://yanxuan-item.nosdn.127.net/6aefeb26228f4dbd09c18f7501c854a0.png'],
            src1: ['https://yanxuan-item.nosdn.127.net/4d825431a3587edb63cb165166f8fc76.jpg'],
            src2: ['https://yanxuan-item.nosdn.127.net/637cca030b42a0f9bcb315d1150b0a9d.jpg'],
            src3: ['https://yanxuan-item.nosdn.127.net/7ce1695c9540786d0a8bb302f40fddd3.png'],
            uname: '儿童多色圆领印花短袖T恤110-160cm',
            money: '169.00'
        },
    ]



    // const ul = document.querySelector('.carousel-body')
    for (let i = 0; i < data.length; i++) {
        const ul = document.querySelector('.carousel-body')
        const li = document.createElement('li')
        li.classList.add("active")
        ul.appendChild(li)
        li.innerHTML = `
    <div class="slider">
        <a href="http://erabbit.itheima.net/#/product/4004328">
            <img src=${data[i].src0} alt="#">
            <p class="name ellipsis">${data[i].uname}</p>
            <p class="price">¥${data[i].money}</p>
        </a>
        <a href="http://erabbit.itheima.net/#/product/4004328">
            <img src=${data[i].src1} alt="#">
            <p class="name ellipsis">${data[i].uname}</p>
            <p class="price">¥${data[i].money}</p>
        </a>
        <a href="http://erabbit.itheima.net/#/product/4004328">
            <img src=${data[i].src2} alt="#">
            <p class="name ellipsis">${data[i].uname}</p>
            <p class="price">¥${data[i].money}</p>
        </a>
        <a href="http://erabbit.itheima.net/#/product/4004328">
            <img src=${data[i].src3} alt="#">
            <p class="name ellipsis">${data[i].uname}</p>
            <p class="price">¥${data[i].money}</p>
        </a>
    </div>`
    }

    //获取所有的li元素  创建要追加的新元素
    const li = document.querySelectorAll('.carousel-body .active')

    // //获取要追加到的父元素
    // const carousel_body = document.querySelector('.carousel-body')

    // //将新元素追加为父元素的子元素
    // carousel_body.appendChild(li);

    // 定义函数来隐藏所有li元素
    function hideAllElements() {
        for (let i = 0; i < li.length; i++) {
            li[i].style.display = "none";
        }
    }

    // 显示第一个元素
    function showElement(index) {
        hideAllElements(); //调用函数隐藏所有元素
        if (li[index]) {
            li[index].style.display = "block";
        }
    }
    showElement(0);  //显示第一个元素
})();

//渲染用户登录的用户名和退出登录
(function () {
    //获取"请先登录"li元素
    const pleaseLoginFirst = document.querySelector('.wrapper li:first-child')
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




// 封装立即执行函数，避免全局命名冲突
(function () {
    // 获取上一张按钮
    const BtnPrev = document.querySelector('.carousel-btn.prev');

    // 获取下一张按钮
    const BtnNext = document.querySelector('.carousel-btn.next');

    // 获取幻灯片元素
    function getSlides() {
        return document.querySelectorAll('.carousel-body li');
    }

    // 获取小圆点元素
    function getIndicators() {
        return Array.from(document.querySelectorAll('.carousel-indicator span')).map((indicator, i) => {
            indicator.setAttribute('data-index', i);
            return indicator;
        });
    }

    const slides = getSlides();
    const indicators = getIndicators();
    let currentIndex = 0;

    // 更新小圆点的显示
    function updateIndicators() {
        indicators.forEach((indicator, i) => {
            if (i === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    // 显示指定索引的幻灯片，隐藏其他幻灯片
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
        updateIndicators(); // 更新小圆点显示
    }

    // 显示下一张幻灯片
    function showNextSlide() {
        slides[currentIndex].style.display = 'none';
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].style.display = 'block';
        updateIndicators(); // 更新小圆点显示
    }

    // 显示上一张幻灯片
    function showPrevSlide() {
        slides[currentIndex].style.display = 'none';
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        slides[currentIndex].style.display = 'block';
        updateIndicators(); // 更新小圆点显示
    }

    // 给按钮添加点击事件监听器
    BtnNext.addEventListener('click', showNextSlide);
    BtnPrev.addEventListener('click', showPrevSlide);

    // 给小圆点添加点击事件监听器
    indicators.forEach((indicator, i) => {
        indicator.addEventListener('click', () => {
            showSlide(i);
        });
    });

    // 显示初始幻灯片和小圆点
    showSlide(currentIndex);
})();

(function () {
    // 获取小圆点元素
    function getIndicators() {
        return Array.from(document.querySelectorAll('.carousel-indicator span')).map((indicator, i) => {
            indicator.setAttribute('data-index', i);
            return indicator;
        });
    }

    // 获取小圆点元素
    const indicators = getIndicators();

    // 给小圆点添加点击事件监听器
    indicators.forEach((indicator) => {
        indicator.addEventListener('click', () => {
            // 获取点击的索引值
            const clickedIndex = parseInt(indicator.getAttribute('data-index'));

            // 移除所有索引的active类名
            indicators.forEach((ind) => {
                ind.classList.remove('active');
            });

            // 添加点击的索引的active类名
            indicator.classList.add('active');

            // 显示点击索引对应的幻灯片
            // showSlide(clickedIndex);
        });
    });
})();