const Operators = {
    ['+']: {prioryty: 1, func: (a,b) => a + b},
    ['-']: {prioryty: 1, func: (a,b) => a - b},
    ['*']: {prioryty: 2, func: (a,b) => a * b},
   ['/']: {prioryty: 2, func: (a,b) => a / b},
}

let OperatorsArr = [] // стек с операторами
let NumsOutput = [] // массив строки вывода

function reverseToPolish(inputString) { // принимает строку пользователя, возвращает массив в ОПЗ
    inputString.split('').forEach(element => {
        if(element in Operators) {
            while (OperatorsArr.length != 0 && Operators[OperatorsArr[0]]['prioryty'] >= Operators[element]['prioryty']) {
                NumsOutput.push(OperatorsArr.shift()) 
            }
            OperatorsArr.unshift(element)
        } else {
            NumsOutput.push(element)
        }   
    })
    while (OperatorsArr.length != 0) {
        NumsOutput.push(OperatorsArr.shift())
    }
    return NumsOutput
}

let inputString = prompt()
alert(reverseToPolish(inputString))
