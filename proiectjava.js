function openMeniu(){
	var meniu = document.getElementById('meniu');
	meniu.style.display = 'flex';
	
}
function closeMeniu(){
	var meniu = document.getElementById('meniu');
	meniu.style.display = 'none';
}
function closeChenar(){ 
   var chenar = document.getElementById('chenarop');
	chenar.style.display = 'none';
}	
function openPagina(){
	var pagina = document.getElementById('multopinie');
	pagina.style.display = 'flex';
}




const slides = document.querySelectorAll(".slide");
let counter = 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const goPrev = () => {
  counter--;
  if (counter < 0) {
    counter = slides.length - 1;
  }
  slideImage();
};

const goNext = () => {
  counter++;
  if (counter === slides.length) {
    counter = 0;
  }
  slideImage();
};

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

slideImage();
