function carroselDots(config){
    this.item = document.querySelectorAll(config.item);
    this.boxitem = document.querySelector(config.boxitem);
    this.dots = document.querySelector(config.dots);
    this.tipoDots = config.tipoDots;

    var _this = this;
    var listaDots;
    var tamanhoItem;

    tamanhoItem = 300;

    criarDots();

    iniciarDots();

    listaDots.forEach(elemento => {
        elemento.addEventListener('click', function(e){
            slideShow(e.target);
        });
    });

    function slideShow(slideAlvo){
        document.querySelector(_this.tipoDots).classList.remove('ativo');
        _this.boxitem.style.marginLeft = -tamanhoItem*parseInt(slideAlvo.classList) + 'px';
        listaDots[parseInt(slideAlvo.classList)].classList.add('ativo');
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
}