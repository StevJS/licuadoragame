var estadoLicuadora = "apagada";
var licuradora = document.getElementById("blender");
var sonidoLicuadora = document.getElementById("blender-sound");
var sonidoBotonLicuadora = document.getElementById("blender-button-sound");

function controlarLicuadora() {
    if (estadoLicuadora == "apagada") {
        estadoLicuadora = "encendido"
        hacerBrrBrr();
        licuradora.classList.add("active");
        // console.log("me prendiste xd");
    } else {
        estadoLicuadora = "apagada"
        hacerBrrBrr();
        licuradora.classList.remove("active")
        // console.log("me apagaste unu");
    }
}

function hacerBrrBrr() {
    if(sonidoLicuadora.paused) {
        sonidoBotonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        sonidoBotonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}