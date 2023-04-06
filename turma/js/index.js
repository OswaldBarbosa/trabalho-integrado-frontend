'use strict'

import { getAlunos, getAlunosStatus } from "../js/main.js"

const nomeCurso = localStorage.getItem('nomeCurso')

const alunosCurso = await getAlunos('curso')
const alunosCursando = await getAlunosStatus('cursando')
const alunosFinalizado = await getAlunosStatus('finalizado')

const criarTitulo = () => {
    const containerTitulo = document.querySelector('.container-nome-curso')

    const titulo = document.createElement('h1')
    titulo.classList.add('nome-curso')
    titulo.textContent = nomeCurso

    containerTitulo.append(titulo)

    return containerTitulo
}

const criarCard = (aluno) => {
    const containerCard = document.createElement('div')
    containerCard.classList.add('container-card-alunos')

    const cardAluno = document.createElement('a')
    cardAluno.classList.add('card-alunos')
    cardAluno.href = '../alunos/index.html'

    const fotoAluno = document.createElement('img')
    fotoAluno.classList.add('foto-aluno')
    fotoAluno.src = `${aluno.foto}`
    fotoAluno.alt = 'Foto dos Alunos'

    const nomeAluno = document.createElement('p')
    nomeAluno.classList.add('nome-aluno')
    nomeAluno.textContent = aluno.nome.toUpperCase()

    containerCard.append(cardAluno)
    cardAluno.append(fotoAluno, nomeAluno)

    return cardAluno
}

const voltar = () => {
    const botaoVoltar = document.getElementById('voltar')
    botaoVoltar.onclick = () => {
        window.location.href = '../home/index.html'
    }
}

const carregarCard = () => {
    criarTitulo()
    const container = document.getElementById('container-card-alunos')
    const card = alunosCurso.alunos.map(criarCard)

    container.append(...card)
}

carregarCard()

voltar()