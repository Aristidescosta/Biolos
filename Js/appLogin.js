const inputNumeroLogin = document.querySelector('#Input_Numero_login')
const labelNumeroLogin = document.querySelector('#Label_Numero_login')

const inputPalavraPassLogin = document.querySelector('#Input_Palavra_pass_login')
const labelPalavraPassLogin = document.querySelector('#Label_Palavra_pass_login')

function login(){
    const biolosBD = JSON.parse( localStorage.getItem('biolosBD') )

    const usuarioLogadoBD = biolosBD.filter( cadaUsuario => 
        cadaUsuario.Contatos.Telefone == inputNumeroLogin.value && cadaUsuario.Pass == inputPalavraPassLogin.value
    )
        console.log(usuarioLogadoBD)
    if ( usuarioLogadoBD.length !== 0 ){
        alert("Sim")
        localStorage.setItem( 'usuarioLogadoBD' , JSON.stringify(usuarioLogadoBD) )
        // window.location.href = "/Users/KINKANI/Documents/Programação/Biolos/Usuario_logado/Index.html"
        window.open("/Users/KINKANI/Documents/Programação/Biolos/Usuario_logado/Index.html")
    }else{
        labelNumeroLogin.innerHTML = 'Numero invalido !'
        labelNumeroLogin.setAttribute( 'style' , 'color: #ea1d2c' )
        inputNumeroLogin.setAttribute( 'style' , 'border: 1px solid #ea1d2c' )

        labelPalavraPassLogin.innerHTML = 'Palavra pass invalido !'
        labelPalavraPassLogin.setAttribute( 'style' , 'color: #ea1d2c' )
        inputPalavraPassLogin.setAttribute( 'style' , 'border: 1px solid #ea1d2c' )
    }

}

inputNumeroLogin.addEventListener( 'keyup' , () => {
    if ( inputNumeroLogin.value === '' ){
        labelNumeroLogin.innerHTML = 'Numero'
        labelNumeroLogin.setAttribute( 'style' , 'color: #8e8e8e' )
        inputNumeroLogin.setAttribute( 'style' , 'border: none' )
    }

})

inputPalavraPassLogin.addEventListener( 'keyup' , () => {

    if ( inputPalavraPassLogin.value === '' ){
        labelPalavraPassLogin.innerHTML = 'Palavra pass'
        labelPalavraPassLogin.setAttribute( 'style' , 'color: #8e8e8e' )
        inputPalavraPassLogin.setAttribute( 'style' , 'border: none' )
    }

})
