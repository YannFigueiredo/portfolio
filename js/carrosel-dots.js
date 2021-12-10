function carroselDots(config){
    this.item = document.querySelectorAll(config.item);
    this.boxitem = document.querySelector(config.boxitem);
    this.dots = document.querySelector(config.dots);

    var _this = this;
    var listaDots;
    var tamanhoItem;

    tamanhoItem = 300;

    criarDots();

    iniciarDots();

    listaDots.forEach(elemento => {
        elemento.addEventListener('click', function(e){
            console.log(e.target);
            slideShow(e.target.id);
        });
    });

    function slideShow(index){
        document.querySelector('.projetos .dots-front div.ativo').classList.remove('ativo');
        _this.boxitem.style.marginLeft = -tamanhoItem*index + 'px';
        listaDots[index].classList.add('ativo');
    }

    function criarDots(){
        for(var i = 0; i < _this.item.length; i++){
            var div = document.createElement('div');
            div.id = i;
            _this.dots.appendChild(div);
        }
    }

    function iniciarDots(){
        listaDots = _this.dots.querySelectorAll('div');

        listaDots[0].classList.add('ativo');
    }
}