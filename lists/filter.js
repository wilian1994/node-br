const { obterPessoas }  = require('./service'); //sacada do objeto que retorna eu quero que retorne somente o obterPessoa


async function main() {
    try{
        const {results} = await obterPessoas(`a`)

        const familiaLars = results.filter(function(item){
            // POR PADRÃO PRECISA RETORNA UM BOOLEANO
            // PARA INFORMAR SE DEVE MANTER OU REMOVER DA LISTA
            // TRAZ TOODO MUNDO QUE É DA FAMILIA
            const result = item.name.toLowerCase().indexOf('lars') !== -1
            return result;
        })

        const names = familiaLars.map(pessoa => pessoa.name);
        console.log(`Names: ${names}`)

    } catch (error){
        console.log('DEU RUIM', error)
    }
}

main()