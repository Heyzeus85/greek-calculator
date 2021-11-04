const calculator = document.querySelector('.calculator');
const display = document.querySelector('.display');
const operations = ['+', '-', '*', '/'];
const greek = {
    'α': 1, 'β': 2, 'γ': 3, 'δ': 4, 'ε': 5, 'ϛ': 6, 'ζ': 7, 'η': 8, 'θ': 9,
    'ι': 10, 'κ': 20, 'λ': 30, 'μ': 40, 'ν': 50, 'ξ': 60, 'ο': 70, 'π': 80, 'ϙ': 90,
    'ρ': 100, 'σ': 200, 'τ': 300, 'υ': 400, 'φ': 500, 'χ': 600, 'ψ': 700, 'ω': 800, 'ϡ': 900,
    '͵α': 1000, '͵β': 2000, '͵γ': 3000, '͵δ': 4000, '͵ε': 5000, '͵ϛ': 6000, '͵ζ': 7000, '͵η': 8000, '͵θ': 9000 
};

let displayText = '';

function updateScreen(input) {
    display.innerText = input;
};

function processInp(str) {
    let arr = str.split('');
    let num1 = arr.slice(0, arr.findIndex(a => operations.includes(a))).join('');
    let num2 = arr.slice(arr.findIndex(a => operations.includes(a)) + 1, arr.length).join('');
    let operation = arr.filter(a => operations.includes(a)).join('');
    let ansArr = [];
    ansArr.push(parseFloat(num1));
    ansArr.push(parseFloat(num2));
    ansArr.push(operation);
    return ansArr;
}

function calculate(arr) {
    if (arr[2] == '+') {
        return arr[0] + arr[1];
    } else if (arr[2] == '-') {
        return arr[0] - arr[1];
    } else if (arr[2] == '*') {
        return arr[0]*arr[1];
    } else if (arr[2] == '/') {
        return arr[0]/arr[1];
    }
}

function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}

function makeFraction(input) {
    function gcd(a, b) {
      if (!b) return a;
        a = parseInt(a);
        b = parseInt(b);
      return gcd(b, a % b);
    }
    
    let arr = [];

    let roundedInput = roundToTwo(input);
    
    const len = roundedInput.toString().length - 2;
    let denominator = Math.pow(10, len);
    let numerator = roundedInput*denominator;
    let divisor = gcd(numerator, denominator);
    
    numerator /= divisor;
    denominator /= divisor;
    
    arr.push(Math.floor(numerator));
    arr.push(Math.floor(denominator));
    
    return arr;
}

function makeGreek(input) {
    function turnGreek(num) {
        if (num === 0) return 'ουδεν';
        else if (num % 1 != 0) {
            let numDenom = makeFraction(num);
            let greekFrac = turnGreek(numDenom[0])+"'"+turnGreek(numDenom[1])+"''"+turnGreek(numDenom[1])+"''";
            return greekFrac;
        }
        else {
            let greekNum = '';
            let keys = Object.keys(greek);
            for (let i=keys.length; i>=0; i--) {
                while (num >= greek[keys[i]]) {
                greekNum += keys[i];
                num -= greek[keys[i]];
                }
            }
            return greekNum;
        }
    }

    if (input[2] === '') {
        let newGreek = turnGreek(input[1]);
        return newGreek;
    } else {
        let newerNum = turnGreek(input[0]) + input[2] + turnGreek(input[1]);
        return newerNum;
    }
}

calculator.addEventListener('click', (e) => {
    let midResult;
    let result;
    let screenGreek;
    
    displayText += e.target.value;
    updateScreen(displayText);

    if (e.target.value === '=') {
        displayText = displayText.slice(0, displayText.length - 1);
        midResult = processInp(displayText);
        result = calculate(midResult);
        updateScreen(result);
        displayText = result;
    }

    if (e.target.value === 'clear') {
        displayText = '';
        updateScreen(displayText);
    }

    if (e.target.value === 'greek') {
        midResult = processInp(displayText);
        screenGreek = makeGreek(midResult);
        updateScreen(screenGreek);
    }
})


