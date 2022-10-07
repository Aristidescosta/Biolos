function Abrir_Local_de_pesquisa_geral( Sombras_Janelas_pesquisa_geral , Local_de_pesquisa_geral_para_abrir ){

    document.querySelector( Sombras_Janelas_pesquisa_geral ).style.display = 'flex'

    let contador_pesquisa_geral = 100

    while ( contador_pesquisa_geral > 0 ){
        setTimeout(() => {
            document.querySelector( Local_de_pesquisa_geral_para_abrir ).style.transform = `translateX(${contador_pesquisa_geral}%)`
        },200)

        contador_pesquisa_geral--
    }

}

function Fechar_Local_de_pesquisa_geral( Sombras_Janelas_pesquisa_geral , Local_de_pesquisa_geral_para_fechar ){

    let contador_pesquisa_geral = 1

    while ( contador_pesquisa_geral < 100 ){
        setTimeout(() => {
            document.querySelector( Local_de_pesquisa_geral_para_fechar ).style.transform = `translateX(${contador_pesquisa_geral}%)`
        },200)

        contador_pesquisa_geral++
    }

    document.querySelector( Sombras_Janelas_pesquisa_geral ).style.display = 'none'
    
}

const sombras_das_janelas = document.querySelector('#Sombras_Janelas')
function Abrir_jnls( jnl_para_abrir ){
    sombras_das_janelas.style.display = 'flex'
    document.querySelector( jnl_para_abrir ).style.display = 'flex'
}

function Fechar_jnls( jnl_para_fechar ){
    sombras_das_janelas.style.display = 'none'
    document.querySelector( jnl_para_fechar ).style.display = 'none'
}

function Abiri_imgs_negocios( img_para_abrir , jnls_imgs_negocios ){
    const Caminho_img_para_abrir = document.querySelector( img_para_abrir ).getAttribute('src')
    Abrir_jnls( jnls_imgs_negocios )
    document.querySelector( '.img_que_recebe_imagem_de_negocio' ).src = Caminho_img_para_abrir
}

function Abrir_Caixa_de_mensagens( caixa_de_chat ){

    let contador_de_caixa_de_chat = 100
    while ( contador_de_caixa_de_chat >= 0 ){
        setTimeout(() => {
            document.querySelector( caixa_de_chat ).style.transform = `translateX(${contador_de_caixa_de_chat}%)`
        },100)
        contador_de_caixa_de_chat--
    }

}

const btnMenuMensagens = document.querySelector('#mensagens')
const menuMensagens = document.querySelector('#sms_dropdown')

let contMenuMensagens = 0

btnMenuMensagens.addEventListener( 'click' , () => {

    menuMensagens.style.display = contMenuMensagens % 2 === 0 ? 'flex' : 'none'
    contMenuMensagens++
    
})


const btnMenuNovidd = document.querySelector('#news')
const menuNovidd = document.querySelector('#news_dropdown')

let contMenuNovidd = 0

btnMenuNovidd.addEventListener( 'click' , () => {

    menuNovidd.style.display = contMenuNovidd % 2 === 0 ? 'flex' : 'none'
    contMenuNovidd++
    
})

const btnMenuPerfil = document.querySelector('#abrir_menu_perfil_por_nome')
const menuPerfil = document.querySelector('#perfil_dropdown')

let contMenuPerfil = 0

btnMenuPerfil.addEventListener( 'click' , () => {

    menuPerfil.style.display = contMenuPerfil % 2 === 0 ? 'flex' : 'none'
    contMenuPerfil++
    
})

function abrirModaisDeAtualizarDados( modalParaAbrir ){
    document.querySelector( modalParaAbrir ).style.display = 'flex'
}

function fecharModaisDeAtualizarDados( modalParaAbrir ){
    document.querySelector( modalParaAbrir ).style.display = 'none'
}