const abas = document.querySelectorAll('.aba-botao');
const conteudos = document.querySelectorAll('.aba-conteudo');

for (let i = 0; i < abas.length; i++) {
    const aba = abas[i];
    aba.addEventListener('click', function() {
        for (let j = 0; j < abas.length; j++) {
            abas[j].classList.remove('ativo');
            conteudos[j].classList.remove('ativo');
        }

        const idAlvo = aba.getAttribute('data-target');
        const conteudoAlvo = document.getElementById(idAlvo);

        aba.classList.add('ativo');
        conteudoAlvo.classList.add('ativo');
    });
}

// LÓGICA DO ORGANIZADOR DE EVENTO (Antigo formulário empresa)
const formularioOrganizador = document.getElementById('formulario-empresa');
if (formularioOrganizador) {
    formularioOrganizador.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('empresa-email').value;
        const senha = document.getElementById('empresa-senha').value;
        const mensagemErro = document.getElementById('erro-empresa');

        // MUDANÇA: Validação do Organizador
        if (email === 'organizador@email.com' && senha === '123456') {
            // Vai para a tela de LANÇAR (CRUD), pois o organizador cria os eventos
            window.location.href = 'lancar_coleta.html';
        } else {
            mensagemErro.textContent = 'Usuário ou senha inválidos.';
        }
    });
}

// LÓGICA DA ONG (Antigo formulário coletor)
const formularioOng = document.getElementById('formulario-coletor');
if (formularioOng) {
    formularioOng.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('coletor-email').value;
        const senha = document.getElementById('coletor-senha').value;
        const mensagemErro = document.getElementById('erro-coletor');
        
        // MUDANÇA: Validação da ONG
        if (email === 'reciclacapixaba@email.com' && senha === '123456') {
            // Vai para o DASHBOARD (Visualização), para ver onde precisa coletar
            window.location.href = 'coletor_dashboard.html';
        } else {
            mensagemErro.textContent = 'Usuário ou senha inválidos.';
        }
    });
}
