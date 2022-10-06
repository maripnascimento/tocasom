function tocaSom(seletorAudio) {

    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {  // != -> diferente  && -> and
        elemento.play();
    }
    else {
        alert('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

// é possível declarar a variável dentro dos parenteses
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string - faz uma abertura para o código JS dentro da string

    tecla.onclick = function () {
        tocaSom(idAudio)
    }
    
    // contador = contador + 1; -> mesma coisa do contador++ acima

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space'|| evento.code === 'Enter') {   // || -> mesma coisa de ou
            tecla.classList.add('ativa');
        }   
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
   
}
// boa prática deixar uma linha vazia no fim do arquivo