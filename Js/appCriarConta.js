let infoUsuario = {
    id: '',
    Nome: '',
    Apelido: '',
    Genero: '',
    Imagem_de_perfil: '../Imagens/Capas/img_avatar.png',
    Data_de_nescimento: 'xx de mes de xxxx',
    Descricao: 'Ola , seja bem vindo no perfil ...',
    Pass: '',
    Gps: 'Ex: Luanda, Cazenga',
    Contatos: {
        Telefone: '9xx xxx xxx',
        Email: 'xxx@gamil.com',
        Facebook: '',
        Instagram: '',
        Twitter: '',
        WhatsApp: '',
    },
    Post: [],
    Seguindo: [],
    Seguidores: [],
}

const btnCriarConta = document.querySelector('#btn_criar_conta')

const inputNome = document.querySelector('#Input_nome')
const labelNome = document.querySelector('#Label_nome')
let estadoNome = false

const inputApelido = document.querySelector('#Input_apelido')
const labelApelido = document.querySelector('#Label_apelido')
let estadoApelido = false

const inputNumero = document.querySelector('#Input_numero')
const labelNumero = document.querySelector('#label_numero')
let estadoNumero = false

const inputPalavraPass = document.querySelector('#Input_palavra_Pass')
const labelPalavraPass = document.querySelector('#label_Palavra_Pass')
let estadoPalavraPass = false

const inputConfirmaPalavraPass = document.querySelector('#Input_Confirm_palavra_Pass')
const labelConfirmaPalavraPass = document.querySelector('#label_Confirm_Palavra_Pass')
let estadoConfirmaPalavraPass = false


const listaNumeros = [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9  ]
const iniciasContatos = [ 91 , 92 , 93 , 94 , 95 , 99 ]
const listaCaracterEspecias = [ '»', '«', 'ª', 'º', ',' ,'.' ,'/' ,'<' , '>' , '?', ';', ':', '"', '[', ']', '{', '}' ,'|', '=', '+', '-', '_', ')', '(', '*', '&', '^', '%', '$', '#', '@', '!', '`', '~' ]


inputNome.addEventListener( 'keyup' , () => {

    let numerosEncontrados = false
    let caracterEncontrados = false

    for ( let cadaLetra in inputNome.value ){

        listaNumeros.filter( cadaNumero => {
            if ( inputNome.value[cadaLetra] == cadaNumero ){
                numerosEncontrados = true
            }
        })

        listaCaracterEspecias.filter( cadaCaracter => {
            if ( inputNome.value[cadaLetra] == cadaCaracter ){
                caracterEncontrados = true
            }
        })

    }

    if ( inputNome.value.length < 2 || inputNome.value.length > 15 || numerosEncontrados || caracterEncontrados ){
        labelNome.innerHTML = 'Nome invalido!'
        labelNome.setAttribute( 'style' , 'color: #ea1d2c' )
        inputNome.setAttribute( 'style' , 'border: 1px solid #ea1d2c' )
        estadoNome = false
    }else{
        labelNome.innerHTML = 'Nome Valido !'
        labelNome.setAttribute( 'style' , 'color: green' )
        inputNome.setAttribute( 'style' , 'border: 1px solid green' )
        estadoNome = true
    }


    if ( inputNome.value === '' ){
        labelNome.innerHTML = 'Nome'
        labelNome.setAttribute( 'style' , 'color: #8e8e8e' )
        inputNome.setAttribute( 'style' , 'border: none' )
        estadoNome = false

    }

    if ( estadoNome && estadoApelido && estadoNumero && estadoPalavraPass && estadoConfirmaPalavraPass ){
        btnCriarConta.getElementsByClassName.display = 'flex'
    }else{
        btnCriarConta.getElementsByClassName.display = 'none'
    }

})

inputApelido.addEventListener( 'keyup' , () => {

    let numerosEncontrados = false
    let caracterEncontrados = false

    for ( let cadaLetra in inputApelido.value ){

        listaNumeros.filter( cadaNumero => {
            if ( inputApelido.value[cadaLetra] == cadaNumero ){
                numerosEncontrados = true
            }
        })

        listaCaracterEspecias.filter( cadaCaracter => {
            if ( inputApelido.value[cadaLetra] == cadaCaracter ){
                caracterEncontrados = true
            }
        })

    }

    if ( inputApelido.value.length < 2 || inputApelido.value.length > 15 || numerosEncontrados || caracterEncontrados ){
        labelApelido.innerHTML = 'Apelido invalido!'
        labelApelido.setAttribute( 'style' , 'color: #ea1d2c' )
        inputApelido.setAttribute( 'style' , 'border: 1px solid #ea1d2c' )
        estadoApelido = false
    }else{
        labelApelido.innerHTML = 'Apelido Valido !'
        labelApelido.setAttribute( 'style' , 'color: green' )
        inputApelido.setAttribute( 'style' , 'border: 1px solid green' )
        estadoApelido = true
    }

    if ( inputApelido.value === '' ){
        labelApelido.innerHTML = 'Apelido'
        labelApelido.setAttribute( 'style' , 'color: #8e8e8e' )
        inputApelido.setAttribute( 'style' , 'border: none' )
        estadoApelido = false

    }

    if ( estadoNome && estadoApelido && estadoNumero && estadoPalavraPass && estadoConfirmaPalavraPass ){
        btnCriarConta.getElementsByClassName.display = 'flex'
    }else{
        btnCriarConta.getElementsByClassName.display = 'none'
    }

})

inputNumero.addEventListener( 'keyup' , () => {
    

    if ( inputNumero.value.length < 9 || inputNumero.value.length > 9 || !iniciasContatos.includes( Number(inputNumero.value.slice(0,2))) ){
        labelNumero.innerHTML = 'Numero invalido!'
        labelNumero.setAttribute( 'style' , 'color: #ea1d2c' )
        inputNumero.setAttribute( 'style' , 'border: 1px solid #ea1d2c' )
        estadoNumero = false
    }else{
        labelNumero.innerHTML = 'Numero Valido !'
        labelNumero.setAttribute( 'style' , 'color: green' )
        inputNumero.setAttribute( 'style' , 'border: 1px solid green' )
        estadoNumero = true
    }

    if ( inputNumero.value === '' ){
        labelNumero.innerHTML = 'Numero'
        labelNumero.setAttribute( 'style' , 'color: #8e8e8e' )
        inputNumero.setAttribute( 'style' , 'border: none' )
        estadoNumero = false

    }

    if ( estadoNome && estadoApelido && estadoNumero && estadoPalavraPass && estadoConfirmaPalavraPass ){
        btnCriarConta.getElementsByClassName.display = 'flex'
    }else{
        btnCriarConta.getElementsByClassName.display = 'none'
    }

})

inputPalavraPass.addEventListener( 'keyup' , () => {
    

    if ( inputPalavraPass.value.length < 8 || inputPalavraPass.value.length > 20 ){
        labelPalavraPass.innerHTML = 'Palavra passe invalido!'
        labelPalavraPass.setAttribute( 'style' , 'color: #ea1d2c' )
        inputPalavraPass.setAttribute( 'style' , 'border: 1px solid #ea1d2c' )
        estadoPalavraPass = false
    }else{
        labelPalavraPass.innerHTML = 'Palavra passe Valido !'
        labelPalavraPass.setAttribute( 'style' , 'color: green' )
        inputPalavraPass.setAttribute( 'style' , 'border: 1px solid green' )
        estadoPalavraPass = true
    }

    if ( inputPalavraPass.value === '' ){
        labelPalavraPass.innerHTML = 'Palavra passe'
        labelPalavraPass.setAttribute( 'style' , 'color: #8e8e8e' )
        inputPalavraPass.setAttribute( 'style' , 'border: none' )
        estadoPalavraPass = false

    }

    if ( estadoNome && estadoApelido && estadoNumero && estadoPalavraPass && estadoConfirmaPalavraPass ){
        btnCriarConta.getElementsByClassName.display = 'flex'
    }else{
        btnCriarConta.getElementsByClassName.display = 'none'
    }

})

inputConfirmaPalavraPass.addEventListener( 'keyup' , () => {
    

    if ( inputPalavraPass.value !== inputConfirmaPalavraPass.value || ( inputPalavraPass.value === '' && inputConfirmaPalavraPass.value === '' ) ){
        labelConfirmaPalavraPass.innerHTML = 'Confirmação Palavra passe invalido!'
        labelConfirmaPalavraPass.setAttribute( 'style' , 'color: #ea1d2c' )
        inputConfirmaPalavraPass.setAttribute( 'style' , 'border: 1px solid #ea1d2c' )
        estadoConfirmaPalavraPass = false
    }else{
        labelConfirmaPalavraPass.innerHTML = 'Confirmação Palavra passe Valido !'
        labelConfirmaPalavraPass.setAttribute( 'style' , 'color: green' )
        inputConfirmaPalavraPass.setAttribute( 'style' , 'border: 1px solid green' )
        estadoConfirmaPalavraPass = true
    }

    if ( inputConfirmaPalavraPass.value === '' ){
        labelPalavraPass.innerHTML = 'Confirma Palavra passe'
        labelPalavraPass.setAttribute( 'style' , 'color: #8e8e8e' )
        inputConfirmaPalavraPass.setAttribute( 'style' , 'border: none' )
        estadoConfirmaPalavraPass = false

    }

    if ( estadoNome && estadoApelido && estadoNumero && estadoPalavraPass && estadoConfirmaPalavraPass ){
        btnCriarConta.getElementsByClassName.display = 'flex'
    }else{
        btnCriarConta.getElementsByClassName.display = 'none'
    }

})




function criarConta(){
    
    const biolosBD = JSON.parse( localStorage.getItem('biolosBD') ) || []

    if ( estadoNome && estadoApelido && estadoNumero && estadoPalavraPass && estadoConfirmaPalavraPass ){
        infoUsuario.id = biolosBD.length
        infoUsuario.Nome = inputNome.value
        infoUsuario.Apelido = inputApelido.value    
        infoUsuario.Contatos.Telefone = inputNumero.value    
        infoUsuario.Pass = inputPalavraPass.value
        
        if ( !document.querySelector('#priv').checked ){
            if ( !document.querySelector('#masc').checked ){
                infoUsuario.Genero = 'Masculino'
            }
            infoUsuario.Genero = 'Femenino'
        }
        infoUsuario.Genero = 'Personalizado'

        if ( biolosBD.length === 0 ){
            biolosBD.push( infoUsuario )
            localStorage.setItem( 'biolosBD' , JSON.stringify( biolosBD ) )
            alert('Conta criada com sucesso !')
        }else{
            let verificandoNumero = biolosBD.some( (cadaUsuario) => cadaUsuario.Contatos.Telefone == inputNumero.value )
            if ( !verificandoNumero ){
                biolosBD.push( infoUsuario )
                localStorage.setItem( 'biolosBD' , JSON.stringify( biolosBD ) )
            }else{
                alert('O numero não é valido')
            }
        }


    }else{
        alert('Dados Invalidos')
    }


}

