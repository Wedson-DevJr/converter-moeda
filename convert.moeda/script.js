

let res = document.querySelector('.resul-p')

function clicou(){
    let quantia = parseFloat(document.querySelector('#quantia').value)
    let Mmoeda1 = document.querySelector('#de').value
    let Mmoeda2 = document.querySelector('#para').value

    if(quantia.length == 0 || Number(quantia) < 0){
        alert('valor invalido')
    } else {
        /* pegar a  quantia
        pegar a moeda 1 e dividir pela moeda 2*/

        function coverteValor(moeda1, moeda2) {
            fetch(`https://economia.awesomeapi.com.br/json/last/${moeda1}-${moeda2}`)
            .then((r)=>r.json())
            .then((dado)=>{
            const cotacao = dado[`${moeda1}${moeda2}`];
            if (cotacao) {
                let _bid = Number(cotacao.bid)
                console.log(`Bid: ${_bid}`);

                let valor = quantia * _bid
                res.innerHTML = `${valor}`
            }
            })
        }
        coverteValor(`${Mmoeda1}`, `${Mmoeda2}`);
    }
}