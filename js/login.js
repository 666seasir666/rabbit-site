// 获取按钮dom
// const loginBtn = document.querySelector('.login-btn')
// querySelector 只会获取第一个捕获的元素
// querySelectorAll 会捕获所有符合的元素，这个时候它获取到的是一个数组
// 为了分别控制用户和密码显示，这里最好分开操作样式
// 一起也可以，用index
const pwdWarn = document.querySelectorAll('.pwd-warn')
for (let i = 0; i < pwdWarn.length; i++) {
    pwdWarn[i].style.display = 'none'
}
const userInput = document.querySelector('.user-input')
// 监听失焦事件
// userInput.addEventListener('blur', function () {
//     let userMatch = /^[a-zA-Z][a-zA-Z0-9_]*$/
//     if (userMatch.test(userInput.value) && userInput.value.length >= 6 && userInput.value.length <= 20) {
//         pwdWarn[0].style.display = 'none'
//         userInput.style.border = '1px solid #cfcdcd'
//     } else {
//         pwdWarn[0].style.display = 'block'
//         userInput.style.border = '1px solid red'
//     }
// })



function validateUsername() {
  // TODO 在这里验证用户名
  let userMatch = /^[a-zA-Z][a-zA-Z0-9_]*$/
  if (userMatch.test(userInput.value) && userInput.value.length >= 6 && userInput.value.length <= 20) {
      pwdWarn[0].style.display = 'none'
      userInput.style.border = '1px solid #cfcdcd'
      return true
  } else {
      pwdWarn[0].style.display = 'block'
      userInput.style.border = '1px solid red'
      alert('用户名必须字母开头且6-20个字符')
      return false
  }
}

function validatePassword() {
    const passwordInput = document.getElementById("password");
    const minLength = 8;
    const maxLength = 20;
    const regexNumber = /\d/;
    const regexLowerCaseLetter = /[a-z]/;
    const regexUpperCaseLetter = /[A-Z]/;
  
    if (passwordInput.value.length < minLength || passwordInput.value.length > maxLength) {
      alert("密码长度必须在8到20个字符之间");
      return false;
    }
  
    if (!regexNumber.test(passwordInput.value)) {
      alert("密码必须包含数字");
      return false;
    }
  
    if (!regexLowerCaseLetter.test(passwordInput.value)) {
      alert("密码必须包含小写字母");
      return false;
    }
  
    if (!regexUpperCaseLetter.test(passwordInput.value)) {
      alert("密码必须包含大写字母");
      return false;
    }
  
    // alert("密码验证通过！");
    return true
  }

  function validateAgreement() {
    if (agreementInput.checked) {
      tipText.style.display = "none";
      // alert('已同意用户协议')
      return true
    } else {
      tipText.style.display = "block";
      alert('请先勾选用户协议')
      return false
    }
  }

  function login() {
    // 两个验证都通过提示登陆成功
    if (validateUsername() && validatePassword() && validateAgreement()) {
      alert('登录成功')
      window.location.href = 'index.html'
    }
  }


  // 判断用户勾选同意隐私协议
  // 该代码将获取页面中的复选框和提示文本
  // 然后添加一个事件监听器来检测复选框是否被勾选
  const agreementInput = document.getElementById("agreement");
  const tipText = document.getElementById("tip");
  
  agreementInput.addEventListener("change", function() {
    if (agreementInput.checked) {
  // 如果复选框被勾选，则提示文本将被隐藏（display:none）
      tipText.style.display = "none";
    } else {
      // 否则提示文本将被显示（display:block）
      tipText.style.display = "block";
    }
  });

// 监听按钮事件控制显示隐藏的元素
// 要显示的两个 box
const qrcodeBox = document.querySelector('.qrcode-box')
const accountBox = document.querySelector('.account-box')
// 要监听的两个按钮
const accountBtn = document.querySelector('.account-btn')//账号登录
const scanBtn = document.querySelector('.scan-btn')//扫码登录

accountBtn.addEventListener('click', function () {
  accountBox.style.display = 'block'
  qrcodeBox.style.display = 'none'
  scanBtn.style.color = 'gray'
})

scanBtn.addEventListener('click', function () {
  accountBox.style.display = 'none'
  qrcodeBox.style.display = 'block'
  accountBtn.style.color = 'red'
})
