let input = document.querySelectorAll(".slider__input");
input.forEach(e => e.addEventListener('change', changeInput));
input.forEach(e => e.addEventListener('mousemove', changeInput));

function changeInput(){
    var suffix = this.name == "blur" ? "px": this.name == "base" ? "%": ""; 
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
