var result_1;
//加法
function add() {
    var a = getFirstNumber();
    var b = getTwiceNumber();
    var re = Number(a) + Number(b);
    sendResult(re);
}

//减法
function subtract() {
    var a = getFirstNumber();
    var b = getTwiceNumber();
    var re = a - b;
    sendResult(re);
}

//乘法
function ride() {
    var a = getFirstNumber();
    var b = getTwiceNumber();
    var re = a * b;
    sendResult(re);
}

//除法
function devide() {
    var a = getFirstNumber();
    var b = getTwiceNumber();
    var re = a / b;
    sendResult(re);
}

//开方
function fang() {
    var a = getFirstNumber();
    var b = getTwiceNumber();
    var re = Math.pow(a, b);
    sendResult(re);
}

//平方根
function geng() {
    var a = getFirstNumber();
    var b = getTwiceNumber();
    var re = Math.sqrt(a, b);
    sendResult(re);
}

//给p标签传值
function sendResult(result_1) {
    var num = document.getElementById("result")
    num.innerHTML = result_1;
}

//获取第一位数字
function getFirstNumber() {
    var firstNumber = document.getElementById("first").value;
    return firstNumber;
}

//获取第二位数字
function getTwiceNumber() {
    var twiceNumber = document.getElementById("twice").value;
    return twiceNumber;
}

//显示日期
function date() {
    document.getElementById("result").innerHTML = Date();
}


var myVar = setInterval(function () { myTimer() }, 1000);
function myTimer() {
    var day = new Date();
    var t = day.toLocaleTimeString();
    var d = day.toLocaleDateString();
    document.getElementById("demo").innerHTML = d + " " + t;
}
