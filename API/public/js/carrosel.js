const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)


const fotos = document.querySelectorAll('.foto');
const botaoVoltar = document.getElementById('botao-voltar');
const botaoProximo = document.getElementById('botao-proximo');

let fotoAtual = 0;

function esconderFotos() {
  fotos.forEach(item => item.classList.remove('ativa'));
}

function mostrarFoto() {
  fotos[fotoAtual].classList.add('ativa');
}

function proximaFoto() {
  esconderFotos();
  if (fotoAtual === fotos.length - 1) {
    fotoAtual = 0;
  } else {
    fotoAtual++;
  }
  mostrarFoto();
}

function voltarFoto() {
  esconderFotos();
  if (fotoAtual === 0) {
    fotoAtual = fotos.length - 1;
  } else {
    fotoAtual--;
  }
  mostrarFoto();
}

botaoProximo.addEventListener('click', proximaFoto);
botaoVoltar.addEventListener('click', voltarFoto);
