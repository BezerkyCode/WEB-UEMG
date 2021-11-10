
const cartas = document.querySelectorAll('.carta');

    let cartaVirada = false;
    let primeiraCarta, segundaCarta;
    let travarCartas = false;


    function virarCarta()
    {
        if (travarCartas) return;
        if(this === primeiraCarta) return;

        this.classList.add('flip');

        if (!cartaVirada)
        {
            cartaVirada = true;
            primeiraCarta = this;
            return;
        }

        segundaCarta = this;

        verificarIguais();
    }

        function verificarIguais()
        {
            if(primeiraCarta.dataset.personagem === segundaCarta.dataset.personagem)
            {
                removeCarta();

                setTimeout(()=> 
                {
                    swal({
                    title: "PARABÉNS!!!",
                    text: "Você encontrou 2 Figuras Iguais!",
                    icon: "success",
                    button: "OK!",
                  })
                 }, 650);

                return;
            }
            
            setTimeout(()=> 
            {
                swal({
                title: "TENTE NOVAMENTE!",
                text: "Tente Novamente!",
                icon: "error",
                button: "OK!",
              })
            }, 650);
           
            naoViraCarta();
        }

        function removeCarta()
        {
            primeiraCarta.removeEventListener('click', virarCarta);
            segundaCarta.removeEventListener('click', virarCarta);
            resetarCartas();
        }
        
        function naoViraCarta()
        {
            travarCartas = true;

            setTimeout(()=> 
            {
                primeiraCarta.classList.remove('flip');
                segundaCarta.classList.remove('flip');
                
                resetarCartas();
            }, 1500);

        }

        function resetarCartas()
        {
            [cartaVirada, travarCartas] = [false,false];
            [primeiraCarta, segundaCarta] = [null, null];
        }

        function embaralha()
        {
            
                cartas.forEach(carta => 
            {
                let posicaoAleatoria = Math.floor(Math.random()*24);
                carta.style.order = posicaoAleatoria;
            });
            
        }    
    

    cartas.forEach(carta => carta.addEventListener('click', virarCarta));