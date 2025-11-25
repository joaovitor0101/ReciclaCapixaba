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

const formularioEmpresa = document.getElementById('formulario-empresa');
if (formularioEmpresa) {
    formularioEmpresa.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('empresa-email').value;
        const senha = document.getElementById('empresa-senha').value;
        const mensagemErro = document.getElementById('erro-empresa');

        // ATUALIZADO: E-mail agora reflete o nome da ONG
        if (email === 'cooperativas@reciclacapixaba.com.br' && senha === '123456') {
            window.location.href = 'lancar_coleta.html';
        } else {
            mensagemErro.textContent = 'Usuário ou senha inválidos.';
        }
    });
}

const formularioColetor = document.getElementById('formulario-coletor');
if (formularioColetor) {
    formularioColetor.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('coletor-email').value;
        const senha = document.getElementById('coletor-senha').value;
        const mensagemErro = document.getElementById('erro-coletor');
        
        // ATUALIZADO: E-mail agora reflete o nome da ONG
        if (email === 'admin@reciclacapixaba.com.br' && senha === '123456') {
            window.location.href = 'coletor_dashboard.html';
        } else {
            mensagemErro.textContent = 'Usuário ou senha inválidos.';
        }
    });
}