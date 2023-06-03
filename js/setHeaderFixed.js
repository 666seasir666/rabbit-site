// 常量 类名  文件  查询选择器
const appHeaderBox = document.querySelector('.app-header-box')
const appHeader = appHeaderBox.querySelector('.app-header')

// 窗口滚动 添加事件侦听器  纸卷？  手动滚动
window.addEventListener('scroll', watchScroll)

// 作用  滚动
function watchScroll() {
    // 获取绑定客户端Rect
    const { top } = appHeaderBox.getBoundingClientRect()
    console.log(top);
    // 类列表  固定的 top小于等于0
    appHeader.classList.toggle("fixed", top <= 0 );
}