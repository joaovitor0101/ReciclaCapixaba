let coletas = [];
let proximoId = 1;

const formulario = document.getElementById('formulario-crud');
const nomeInput = document.getElementById('evento-nome');
const enderecoInput = document.getElementById('evento-endereco');
const dataInput = document.getElementById('evento-data');
const horarioInput = document.getElementById('evento-horario');
const materialInput = document.getElementById('evento-material');
const containerLista = document.getElementById('lista-coletas');
const idEdicaoInput = document.getElementById('id-edicao');
const botaoEnviar = document.getElementById('botao-enviar');
const botaoCancelar = document.getElementById('botao-cancelar');
const tituloFormulario = document.getElementById('titulo-formulario');

function renderizarLista() {
    containerLista.innerHTML = '';

    if (coletas.length === 0) {
        containerLista.innerHTML = '<p class="mensagem-vazia">Nenhuma coleta adicionada ainda.</p>';
        return;
    }

    for (let i = 0; i < coletas.length; i++) {
        const coleta = coletas[i];
        const itemHTML = `
            <div class="item-coleta">
                <div class="item-informacoes">
                    <h3>${coleta.nome}</h3>
                    <p><strong>Endereço:</strong> ${coleta.endereco}</p>
                    <p><strong>Data:</strong> ${coleta.data} às ${coleta.horario}</p>
                    <p><strong>Material:</strong> ${coleta.material}</p>
                </div>
                <div class="item-acoes">
                    <button class="botao-editar" onclick="prepararEdicao(${coleta.id})">Editar</button>
                    <button class="botao-apagar" onclick="apagarColeta(${coleta.id})">Apagar</button>
                </div>
            </div>
        `;
        containerLista.innerHTML += itemHTML;
    }
}

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = nomeInput.value;
    const endereco = enderecoInput.value;
    const data = dataInput.value;
    const horario = horarioInput.value;
    const material = materialInput.value;
    const idSendoEditado = idEdicaoInput.value;
    
    if (!nome || !endereco || !data || !horario || !material) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (idSendoEditado) {
        for (let i = 0; i < coletas.length; i++) {
            if (coletas[i].id == idSendoEditado) {
                coletas[i].nome = nome;
                coletas[i].endereco = endereco;
                coletas[i].data = data;
                coletas[i].horario = horario;
                coletas[i].material = material;
                break;
            }
        }
    } else {
        const novaColeta = {
            id: proximoId,
            nome: nome,
            endereco: endereco,
            data: data,
            horario: horario,
            material: material
        };
        coletas.push(novaColeta);
        proximoId++;
    }

    resetarFormulario();
    renderizarLista();
});

function apagarColeta(id) {
    if (confirm('Tem certeza que deseja apagar esta coleta?')) {
        const novoArrayColetas = [];
        for (let i = 0; i < coletas.length; i++) {
            if (coletas[i].id != id) {
                novoArrayColetas.push(coletas[i]);
            }
        }
        coletas = novoArrayColetas;
        renderizarLista();
    }
}

function prepararEdicao(id) {
    let coletaParaEditar = null;
    for (let i = 0; i < coletas.length; i++) {
        if (coletas[i].id == id) {
            coletaParaEditar = coletas[i];
            break;
        }
    }
    
    nomeInput.value = coletaParaEditar.nome;
    enderecoInput.value = coletaParaEditar.endereco;
    dataInput.value = coletaParaEditar.data;
    horarioInput.value = coletaParaEditar.horario;
    materialInput.value = coletaParaEditar.material;
    idEdicaoInput.value = coletaParaEditar.id;

    tituloFormulario.textContent = 'Editar Coleta';
    botaoEnviar.textContent = 'Salvar Alterações';
    botaoCancelar.style.display = 'block';
    window.scrollTo(0, 0);
}

botaoCancelar.addEventListener('click', function() {
    resetarFormulario();
});

function resetarFormulario() {
    formulario.reset();
    idEdicaoInput.value = '';
    tituloFormulario.textContent = 'Lançar Nova Coleta';
    botaoEnviar.textContent = 'Adicionar Coleta';
    botaoCancelar.style.display = 'none';
}

renderizarLista();