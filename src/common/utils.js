// 工具类.字符串解析，文档解析工具之类
// 防抖动（防止重复执行一个函数的称呼）函数
export function debouch(func, delay) {
    let timer = null
    return function(...args) {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}
