(function(){
    var carroselProjetosFront = new carroselDots({
        boxitem: '.projetos-front .boxitem',
        item: '.projetos-front article',
        dots: '.projetos-front .dots-front',
        tipoDots: '.projetos .dots-front div.ativo'
    });

    var carroselOutrosProjetos = new carroselDots({
        boxitem: '.outros-projetos .boxitem',
        item: '.outros-projetos article',
        dots: '.outros-projetos .dots-outros',
        tipoDots: '.projetos .dots-outros div.ativo'
    });

    window.addEventListener('resize', function(){
        console.log(window.innerWidth);
    });
}());