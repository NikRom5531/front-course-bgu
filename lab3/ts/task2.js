function isPowerOfTwo(n) {
    if (n <= 0) {
        return false;
    }
    return (n & (n - 1)) === 0;
}
function checkPower() {
    var numberInput = document.getElementById("numberInput");
    var resultDiv = document.getElementById("result");
    var n = parseInt(numberInput.value);
    if (isNaN(n)) {
        resultDiv.textContent = "Пожалуйста, введите действительное число.";
        return;
    }
    var isPower = isPowerOfTwo(n);
    if (isPower) {
        resultDiv.textContent = "".concat(n, " \u044D\u0442\u043E \u0447\u0438\u0441\u043B\u043E \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0442\u0435\u043F\u0435\u043D\u044C\u044E \u0447\u0438\u0441\u043B\u0430 2. boolean = True");
    }
    else {
        resultDiv.textContent = "".concat(n, " \u044D\u0442\u043E \u0447\u0438\u0441\u043B\u043E \u041D\u0415 \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u0441\u0442\u0435\u043F\u0435\u043D\u044C\u044E \u0447\u0438\u0441\u043B\u0430 2. boolean = False");
    }
}
