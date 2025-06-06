function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

const relogio = document.querySelector('.relogio');

let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = getTimeFromSeconds(segundos);
    }, 1000);
}

document.addEventListener('click', function (e) {
    const el = e.target;

    // Remove a classe 'ativo' de todos os botões antes de adicionar no clicado
    document.querySelectorAll('button').forEach(btn => btn.classList.remove('ativo'));

    if (el.classList.contains('zerar')) {
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
        relogio.classList.remove('pausado');
        el.classList.add('ativo');
    }
    if (el.classList.contains('iniciar')) {
        el.classList.add('ativo');
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciaRelogio();
    }
    if (el.classList.contains('pausar')) {
        el.classList.add('ativo');
        clearInterval(timer);
        relogio.classList.add('pausado');
    }
});
