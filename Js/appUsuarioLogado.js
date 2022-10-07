function carregarDadosUsuario(){
    const usuarioLogadoBD = JSON.parse( localStorage.getItem('usuarioLogadoBD') )

    const nomeUsuario = document.querySelectorAll('.nomeUsuario')
    const apelidoUsuario = document.querySelectorAll('.apelidoUsuario')
    const fotoPerfilUsuario = document.querySelectorAll('.fotoPerfilUsuario')
    const descricaoUsuario = document.querySelectorAll('.descricaoUsuario')
    const numeroTelefoneUsuario = document.querySelectorAll('.numeroTelefoneUsuario')
    const generoUsuario = document.querySelectorAll('.generoUsuario')
    const gpsUsuario = document.querySelectorAll('.gpsUsuario')
    const dataNascimentoUsuario = document.querySelectorAll('.dataNascimentoUsuario')
    const emailUsuario = document.querySelectorAll('.emailUsuario')


    for ( let cadaEspacoNome in nomeUsuario ){
        nomeUsuario[cadaEspacoNome].innerHTML = usuarioLogadoBD[0].Nome
    }

    for ( let cadaEspacoApelido in apelidoUsuario ){
        apelidoUsuario[cadaEspacoApelido].innerHTML = usuarioLogadoBD[0].Apelido
    }

    for ( let cadaEspacoDescricao in descricaoUsuario ){
        descricaoUsuario[cadaEspacoDescricao].innerHTML = usuarioLogadoBD[0].Descricao
    }

    for ( let cadaEspacoEmail in emailUsuario ){
        emailUsuario[cadaEspacoEmail].innerHTML = usuarioLogadoBD[0].Contatos.Email
    }

    for ( let cadaEspacoFoto in fotoPerfilUsuario ){
        fotoPerfilUsuario[cadaEspacoFoto].src = usuarioLogadoBD[0].Imagem_de_perfil
    }

    for ( let cadaEspacoNumero in numeroTelefoneUsuario ){
        numeroTelefoneUsuario[cadaEspacoNumero].innerHTML = usuarioLogadoBD[0].Contatos.Telefone
    }

    for ( let cadaEspacoGenero in generoUsuario ){
        generoUsuario[cadaEspacoGenero].innerHTML = usuarioLogadoBD[0].Genero
    }

    for ( let cadaEspacoGps in gpsUsuario ){
        gpsUsuario[cadaEspacoGps].innerHTML = usuarioLogadoBD[0].Gps
    }

    for ( let cadaEspacoDataNascimento in dataNascimentoUsuario ){
        dataNascimentoUsuario[cadaEspacoDataNascimento].innerHTML = usuarioLogadoBD[0].Data_de_nescimento
    }

}