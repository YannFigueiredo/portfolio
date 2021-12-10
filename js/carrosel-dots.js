function carroselDots(config){
    this.item = document.querySelectorAll(config.item);
    this.boxitem = document.querySelector(config.boxitem);
    this.dots = document.querySelector(config.dots);
    this.tipoDots = config.tipoDots;

    var _this = this;
    var listaDots;
    var tamanhoItem;
    var slideAuto = true;
    var slideAtual = 0;

    tamanhoItem = 300;

    criarDots();

    iniciarDots();

    slideShowAuto();

    listaDots.forEach(elemento => {
        elemento.addEventListener('click', function(e){
            slideShow(parseInt(e.target.classList));
            slideAuto = false;
        });
    });

    function slideShow(slideAlvo){
        document.querySelector(_this.tipoDots).classList.remove('ativo');
        _this.boxitem.style.marginLeft = -tamanhoItem*slideAlvo + 'px';
        listaDots[slideAlvo].classList.add('ativo');
        slideAtual = slideAlvo;
    }

    function criarDots(){
        for(var i = 0; i < _this.item.length; i++){
            var div = document.createElement('div');
            div.classList.add(i);
            _this.dots.appendChild(div);
        }
    }

    function iniciarDots(){
        listaDots = _this.dots.querySelectorAll('div');

        listaDots[0].classList.add('ativo');
    }

    function slideShowAuto(){
        setInterval(function(){
            console.log(slideAtual);
            if(slideAuto == true){
                if(slideAtual+1 > _this.item.length - 1){
                    slideShow(0);
                }else{
                    slideShow(slideAtual+1);
                }
            }else{
                slideAuto = true;
            }
        }, 5000);
    }
}