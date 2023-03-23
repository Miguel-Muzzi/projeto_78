var familiaNome = ["Familia", "Vermelho", "Black", "Azul", "Amarelo", "Verde", "Rosa"];

var familiaFotos = [
    "https://i.postimg.cc/nVmmbY8D/Img1.jpg",
    "https://i.postimg.cc/bY1RHjwW/img2.jpg",
    "https://i.postimg.cc/7ZR7rBLS/img3.jpg",
    "https://i.postimg.cc/MHtMP54M/img4.jpg",
    "https://i.postimg.cc/85mjcwTK/img5.jpg",
    "https://i.postimg.cc/5yPyq0Y8/img6.jpg",
    "https://i.postimg.cc/VNy6F26Z/img7.jpg"
];

var i=0;
function proximo(){
    var numeroFamilia=7;
    if(i>numeroFamilia){
        i=0;
    }
    document.getElementById("membrosFamiliaImage").src=familiaFotos[i];
    document.getElementById("membrosFamiliaNome").innnerHTML=familiaNome[i];
    document.getElementById("audio").play();
    i++;
}

function stop(){
    document.getElementById("audio").pause();
}