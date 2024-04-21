function isPowerOfTwo(n: number): boolean {
    if (n <= 0) {
        return false;
    }
    return (n & (n - 1)) === 0;
}

function checkPower() {
    const numberInput = document.getElementById("numberInput") as HTMLInputElement;
    const resultDiv = document.getElementById("result");

    const n = parseInt(numberInput.value);
    if (isNaN(n)) {
        resultDiv.textContent = "Пожалуйста, введите действительное число.";
        return;
    }

    const isPower = isPowerOfTwo(n);
    if (isPower) {
        resultDiv.textContent = `${n} это число является степенью числа 2. boolean = True`;
    } else {
        resultDiv.textContent = `${n} это число НЕ является степенью числа 2. boolean = False`;
    }
}
