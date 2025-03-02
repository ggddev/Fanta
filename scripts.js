var tl= gsap.timeline({
    scrollTrigger:{
        trigger: '.two',
        start: '0% 95%',
        end: '70% 50%',
        scrub: true,
        markers: false,//depuracao
    }
});

tl.to(
    '#fanta',
    {
        top: '115%',
        left: '0%',
    },
    'orange'
);

tl.to(
    '#laranja-cortada',
    {
        top: '160%',//move o elemento id laranja-cortada para 160% do topo
        left: '23%',//move o elemento para 23% da esquerda
        rotate: '360deg',//rotaciona em 360graus
    },
    'orange'
);//nomeando esse trecho de animação de 'orange' para sincronização

tl.to(
    '#laranja',
    {
        width: '15%',//reduz a largura da laranja para 15%
        top: '162%',//move o elemento id laranja para 160% do topo
        right: '10%',//move o elemento par 23% da esquerda
    },
    'orange'
);//nomeando esse trecho de animação de 'orange' para sincronização

tl.to(
    '#folha',
    {
        top: '110%',//move o elemento id folha para 110% do topo
        rotate: '490deg',//rotaciona em 490 graus
        left: '70%',//move o elemento para 23% da esquerda
    },
    'orange'
);//nomeando esse trecho de animação de 'orange' para sincronização

tl.to(
    "#folha2",
    {
        top: '110%',// move o elemento eid folha para 110% do topo
        rotate: '490deg',// rotaciona em 130 graus
        left: '0%',//move o elemento para 23% da esquerda
    },
);//nomeando esse trecho de animação de 'orange' para sincronização

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: '.three',
        start: '10% 95%',
        end: '20% 50%',
        scrub: true,
        markers: false, //depuração
    }
});

tl2.from(
    '.lemon1',
    {
        top: '110%',////inicia o elemento abaixo da tela (110% do topo)
        rotate: '-450deg',//inicia o elemento rotacionando em -450 graus
        left: '-100%',  //inicia o elemento fora da tela, à esquerda (-100%)
    },
    'ca'
);//nomeando esse trecho de animação de 'orange' para sincronização

tl2.from(
    '#cocacola',
    {
        top: '110%',//inicia o elemento abaixo da tela (110% do topo)
        rotate: '-90deg',//inicia o elemento rotacionando em -90graus
        left: '100%',//inicia o elemento fora da tela, à esquerda (-100%)
    },
    'ca'  
);//nomeando esse trecho de animação de 'orange' para sincronização

tl2.from(
    '.lemon2',
    {
        top: '110%',//inicia o elemento abaixo da tela (110% do topo)
        rotate: '-450deg',//inicia o elemento rotacionando em -450 graus
        left: '100%',//inicia o elemento fora da tela, à esquerda (-100%)
    },
    'ca'
);//nomeando esse trecho de animação de 'orange' para sincronização

tl2.from(
    '#pepsi',
    {
        top: '110%',//inicia o elemento abaixo da tela (110% do topo)
        rotate: '90deg',//inicia o elemento rotacionando em -450 graus
        left: '100%',//inicia o elemento fora da tela, à  esquerda (-100%)
    }, 
    'ca'
);//nomeando esse trecho de animação de 'orange' para sincronização

tl2.to(
    '#laranja-cortada',
    {
        width: '18%',//aumenta a largura para 18%
        top: '204%',//move o elemento para 204% do topo 
        left: '42%',//move o elemento para 42% da esquerda
        rotate: '0deg',//rotaciona em 130 graus
    },
    'ca'
);//nomeando esse trecho de animação de 'orange' para sincronização

tl2.to(
    '#fanta',
    {
        width: '30%',//aumenta a largura 35%
        left: '36%',//move o elemento para 42% da esquerda
        top: '211%',//move o elemento para 211% do topo
    },
    'ca'
);//nomeando esse trecho de animação de 'orange' para sincronização