const router = require('express').Router();

function fat (n) {
    var result = 1;

    if((n == 0) || (n == 1)){

        return result;

    }else{
        for(var i = n; i > 1; i--){
            result *= i;
        }
    }

    return result;
}

function fib (n) {
  if (n <= 1){
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
}

router.post('/fat', (req, res) => {
  const {n} = req.body;

  if (!n) {
    res.sendStatus(400);
  }

  res.json({result: fat(n)});
});

router.post('/fib', (req, res) => {
  const {n} = req.body;

  if (!n) {
    res.sendStatus(400);
  }

  res.json({result: fib(n)});
  
});

module.exports = router;