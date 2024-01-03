// Loading
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
    document.getElementById("loadingOverlay").style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 1000);
});

// Scroll Animation
const animationScroll = document.querySelectorAll('.animation');

function ScrollAnimation(){
  animationScroll.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    const Height = window.innerHeight;
    if(boxTop < Height){
      box.style.opacity = 1;
      box.style.transform = 'translateX(0)';
    }
  });
}
window.addEventListener('scroll', ScrollAnimation);
window.addEventListener('load', ScrollAnimation);

// PC
const pc = document.querySelector('.pc');
const mboard = document.querySelector('.btn-mboard'),
storage = document.querySelector('.btn-ssd'),
cpu = document.querySelector('.btn-cpu'),
ram = document.querySelector('.btn-ram'),
gpu = document.querySelector('.btn-gpu'),
liquidc = document.querySelector('.btn-liquidc'),
fans = document.querySelector('.btn-fans');

const toggleClass = (button, className) => {
  const isActive = pc.classList.contains(className);
  pc.classList.remove('move-mboard', 'move-ssd', 'move-cpu', 'move-ram', 'move-gpu', 'move-liquidc', 'move-fan');
  if (!isActive) {
    pc.classList.add(className);
  }
};

mboard.addEventListener('click', () => {
  toggleClass(mboard, 'move-mboard');
});
cpu.addEventListener('click', () => {
  toggleClass(cpu, 'move-cpu');
});
ram.addEventListener('click', () => {
  toggleClass(ram, 'move-ram');
});
gpu.addEventListener('click', () => {
  toggleClass(gpu, 'move-gpu');
});
liquidc.addEventListener('click', () => {
  toggleClass(liquidc, 'move-liquidc');
});
fans.addEventListener('click', () => {
  toggleClass(fans, 'move-fan');
});
storage.addEventListener('click', () => {
  toggleClass(storage, 'move-ssd');
});

// RGB
const btnRgb = document.querySelector('.btn-rgb'),
btnRed = document.querySelector('.btn-colorRed'),
btnGreen = document.querySelector('.btn-colorGreen'),
btnBlue = document.querySelector('.btn-colorBlue'),
btnOff = document.querySelector('.btn-off');

const toggleColor = (btn, className) => {
  const isActive = pc.classList.contains(className);
  pc.classList.remove('redColor-on', 'greenColor-on', 'blueColor-on', 'rgb-on');
  if (!isActive) {
    pc.classList.add(className);
  }
};

btnRed.addEventListener('click', () => {
  toggleColor(btnRed, 'redColor-on');
});
btnGreen.addEventListener('click', () => {
  toggleColor(btnGreen, 'greenColor-on');
});
btnBlue.addEventListener('click', () => {
  toggleColor(btnBlue, 'blueColor-on');
});
btnRgb.addEventListener('click', () => {
  toggleColor(btnRgb, 'rgb-on');
});
btnOff.addEventListener('click', () => {
  toggleColor();
});