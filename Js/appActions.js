let contador = 0

function slideShow_proxima_caixa( Ul_das_caixas , Todas_as_li , tamanho ){
    const A_ul = document.querySelector( Ul_das_caixas )
    const As_li = document.querySelectorAll( Todas_as_li )

    if ( As_li[contador].id !== 'ultima_caixa' ){
        A_ul.style.transition = "transform 0.6s ease-in-out"
        contador ++
        A_ul.style.transform = 'translateX(' + ( - tamanho * contador ) + 'px)'
    }

}

function slideShow_caixa_anterior( Ul_das_caixas , Todas_as_li , tamanho ){
    const A_ul = document.querySelector( Ul_das_caixas )
    const As_li = document.querySelectorAll( Todas_as_li )

    if ( As_li[contador].id !== 'primeira_caixa' ){
        A_ul.style.transition = "transform 0.6s ease-in-out"
        contador --
        A_ul.style.transform = 'translateX(' + ( - tamanho * contador ) + 'px)'
    }

}
