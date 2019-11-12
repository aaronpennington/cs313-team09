const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const funct = (param1, param2, operator) => {
    let result = 0;
    param1 *= 1;
    param2 *= 1;
    switch (operator) {
        case '+':
            result = param1 + param2;
            break;
        case '-':
            result = param1 - param2;
            break;
        case '*':
            result = param1 * param2;
            break;
        case '/':
            result = param1 / param2;
            break;
        default:
            return "Sorry, we don't support that operator";
    }
    return result;
}

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/math', (req, res) => {
    res.render('pages/math');
    let param1 = req.query.param1;
    let param2 = req.query.param2;
    let operator = req.query.operator;
    let result = funct(param1, param2, operator);
    console.log(param1 + " " + operator + " " + param2 + " = " + result);
    // res.send(param1 + " " + operator + " " + param2 + " = " + result);
})

  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
