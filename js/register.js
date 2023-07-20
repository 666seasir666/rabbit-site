(function () {
    // 短信验证码

    // 获取发送验证码元素
    var code = document.querySelector('.code')
    //通过一个变量来控制
    var flag = true

    code.addEventListener('click', function () {
        if (flag) {
            flag = false
            // 定义倒计时变量
            var i = 6
            // 开启定时器
            var timerID = setInterval(function () {
                i--
                code.innerHTML = `0${i}秒后重新获取`
                if (i === 0) {
                    // 判断计时器为0则停止计时器
                    clearInterval(timerID)
                    code.innerHTML = `重新获取`
                    // 时间到了开启flag
                    flag = true
                }
            }, 1000)
        }
    })
})();


// 获取用户名表单元素
var username = document.querySelector('[name=username]')
username.addEventListener('change', verifyName)

//封装verifyName函数
function verifyName() {
    //获取返回指定元素之后的下一个兄弟元素
    // （相同节点树层中的下一个元素节点）
    var span = username.nextElementSibling
    // 定义用户名规则
    var reg = /^[a-zA-Z0-9-_]{6,10}$/
    if (!reg.test(username.value)) {
        span.innerText = '输入不合法，请输入6~10位'
        // alert('请输入正确的用户名！');
        // 判断用户名是否合法，不合法则不再执行
        return false
    }

    // 用户名符合则清空span提示
    span.innerText = ''
    return true

}

//验证手机号
//获取手机号表单元素
var phone = document.querySelector('[name=phone]')

phone.addEventListener('change', verifyPhone)

//封装verifyIPhon函数
function verifyPhone() {
    //获取返回指定元素之后的下一个兄弟元素
    // （相同节点树层中的下一个元素节点）
    var span = phone.nextElementSibling
    // 定义手机号规则
    var reg = /^1((34[0-8])|(8\d{2})|(([35][0-35-9]|4[579]|66|7[35678]|9[1389])\d{1}))\d{7}$/
    if (!reg.test(phone.value)) {
        span.innerText = '请输入11位数的手机号'
        // alert('请输入正确的手机号！');
        // 判断手机号是否合法，不合法则不再执行
        return false
    }

    // 手机号符合则清空span提示
    span.innerText = ''
    return true
}


//验证短信验证码
//获取短信验证码表单元素
var code = document.querySelector('[name=code]')

code.addEventListener('change', verifyCode)

//封装verifyCode函数
function verifyCode() {
    //获取返回指定元素之后的下一个兄弟元素
    // （相同节点树层中的下一个元素节点）
    var span = code.nextElementSibling
    // 定义手机号规则
    var reg = /^\d{6}$/
    if (!reg.test(code.value)) {
        span.innerText = '请输入6位数的验证码'
        // alert('请输入正确的短信验证码！');
        // 判断短信验证码是否合法，不合法则不再执行
        return false
    }

    // 短信验证码符合则清空span提示
    span.innerText = ''
    return true
}


//获取密码表单元素
var password = document.querySelector('[name=password]')

password.addEventListener('change', verifyPassword)

//封装verifyPassword函数
function verifyPassword() {
    //获取返回指定元素之后的下一个兄弟元素
    // （相同节点树层中的下一个元素节点）
    var span = password.nextElementSibling
    // 定义密码规则
    var reg = /^[a-zA-Z0-9-_]{6,20}$/
    if (!reg.test(password.value)) {
        span.innerText = '输入不合法，请输入6~20位密码'
        // alert('请输入正确的密码！');
        // 判断密码是否合法，不合法则不再执行
        return false
    }

    // 密码符合则清空span提示
    span.innerText = ''
    return true
}


//获取再次验证密码
var confirm = document.querySelector('[name=confirm]')

confirm.addEventListener('change', verifyConfirm)

//封装verifyConfirm函数
function verifyConfirm() {
    //获取返回指定元素之后的下一个兄弟元素
    // （相同节点树层中的下一个元素节点）
    var span = confirm.nextElementSibling
    // 判断再次输入的密码是否上面的不相等

    if (confirm.value !== password.value) {
        span.innerText = '两次输入的密码不一致!'
        // 判断两次输入的密码不一致是否合法，不合法则不再执行
        return false
    }

    // "两次输入的密码不一致"合则清空span提示
    span.innerText = ''
    return true
}

var queren = document.querySelector('.icon-queren')
queren.addEventListener('click', function () {
    this.classList.toggle('icon-queren2')
})


var form = document.querySelector('form')

form.addEventListener('submit', function (e) {
    if (!queren.classList.contains('icon-queren2')) {
        e.preventDefault()
        alert('请勾选用户服务协议!')
    }

    if (!verifyName()) e.preventDefault()
    if (!verifyPhone()) e.preventDefault()
    if (!verifyCode()) e.preventDefault()
    if (!verifyPassword()) e.preventDefault()
    if (!verifyConfirm()) e.preventDefault()
})


