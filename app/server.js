const restify = require('restify')
const porta = 8080

const servidor = restify.createServer()

servidor.get('/Fruit/Long.json', (req, res) => {
    res.send([{fruit: "long 1"}, {fruit: "long 2"}, {fruit: "long 3"}])
})

servidor.get('/Fruit/Round.json', (req, res) => {
    res.send([{fruit: "round 1"}, {fruit: "round 2"}, {fruit: "round 3"}])
})

servidor.get('/Fruit/Orange.json', (req, res) => {
    res.send([{fruit: "orange 1"}, {fruit: "orange 2"}, {fruit: "orange 3"}])
})

servidor.listen(porta, () => {
    console.log(`Servidor de pé em http://localhost:${porta}`)
    console.log('Pra derrubar o servidor: ctrl + c')
})

servidor.use(
    function crossOrigin(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        return next();
    }
);