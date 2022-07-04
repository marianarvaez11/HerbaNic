var activar = "";

function overlay_on(activar) {
    document.getElementById("overlay").style.display = "block";
    if (activar == "inicio-sesion") {
        document.getElementById("inicio-sesion").style.display = "block";
    } else {
        document.getElementById("registro").style.display = "block";
    }
}

function overlay_off() {
    document.getElementById("overlay").style.display = "none";
    if (document.getElementById("inicio-sesion").style.display == "block") {
        document.getElementById("inicio-sesion").style.display = "none";
    } else {
        document.getElementById("registro").style.display = "none";
    }
}

var activo = "";

function change(activo) {
    switch (activo) {
        case "inicio-sesion":
            document.getElementById("inicio-sesion").style.display = "none";
            document.getElementById("registro").style.display = "block";
            break;

        case "registro":
            document.getElementById("registro").style.display = "none";
            document.getElementById("inicio-sesion").style.display = "block";
            break;
    }
}