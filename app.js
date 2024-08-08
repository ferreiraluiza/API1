import express from 'express'
const servidor = express();

servidor.listen(5050, () => console.log(`SUBIU CARALHOOOOO`))

servidor.get('/calculator/somar/:n1/:n2',(rep,resp) => {
    let n1 = Number(rep.params.n1)
    let n2 = Number(rep.params.n2)
    let soma = n1-n2;

    resp.send('a subtração é '+ soma )
})