


function obterUsuario(){
    // SE TUDO OCORRER OK -> CHAMAMOS O RESOLVE
    // NOOK -> REJECT

    return new Promise((resolve, reject) =>{   
        setTimeout(function(){
            return resolve({
                id: 1,
                nome: 'Aladin',
                dataNascimento: new Date()
            })
        }, 1000)
    })
}

function obterTelefone(id){
    return new Promise((resolve, reject) =>{   
        setTimeout(() => {
            return resolve({
                telefone: '11973744577',
                ddd: '11'
            }) 
                
        }, 2000);
    })
}
  

function obterEndereco(id, callback){
    setTimeout(() => {
        return callback(null,  {
           rua: 'dos bobos',
           numero: 0
        }) 
            
    }, 2000);
}

function resolverUsuario(erro, usuario){
    console.log(usuario);
}

obterUsuario()
    .then(usuario => obterTelefone(usuario.id)
        .then(result => console.log(
            { 
                usuario: { 
                    nome: usuario.nome
                }, 
                telefone: result
            }
        )))
    .then(resultado => console.log('Resultado', resultado))
    .catch(err => console.log('Erro',err))


// obterUsuario(function resolverUsuario(err, usuario){
//     if(err){
//         console.error('DEU RUIM em USUARIO', err)
//         return;
//     }

//     obterTelefone(usuario.id, function(err1, telefone){
//         if(err1){
//             console.error('DEU RUIM em TELEFONE', err1)
//             return;
//         }

//         obterEndereco(usuario.id, function(err2, endereco){
//             if(err2){
//                 console.error('DEU RUIM em ENDERECO', err2)
//                 return;
//             }

//             console.log(`
//              Nome: ${usuario.nome},
//              Endereco: ${endereco.rua}, ${endereco.numero},
//              Telefone: (${telefone.ddd})${telefone.telefone}
//             `)
//         })
//     })

// })
