function toggleContent(id) {
    var contenido = document.getElementById(id);
    var otrosIds = ['proyectos', 'habilidades', 'personales', 'contactos'];

    // Oculta el footer antes de mostrar el contenido
    var footer = document.querySelector('.footer');
    footer.style.display = 'Block';

    // Calcula la altura del contenido para el despliegue suave
    var height = contenido.scrollHeight + 'px';

    // Si el contenido actual ya está visible, lo oculta
    if (contenido.classList.contains('contenido-visible')) {
        contenido.style.maxHeight = '0';
        contenido.classList.remove('contenido-visible');
    } else {
        // Si no, oculta los otros contenidos y muestra el actual
        otrosIds.forEach(function(otroId) {
            var otroContenido = document.getElementById(otroId);
            if (otroId !== id) {
                otroContenido.style.maxHeight = '0';
                otroContenido.classList.remove('contenido-visible');
            }
        });

        contenido.style.maxHeight = height;
        contenido.classList.add('contenido-visible');

        // Muestra el footer respectivo cuando se expande la sección
        footer.style.display = 'none';
    }
}


function showProjectDetails(projectId) {
    var proyectosInfo = document.querySelectorAll('.proyecto-info');
    proyectosInfo.forEach(function(proyecto) {
        proyecto.style.display = 'none';
    });

    var proyectoToShow = document.getElementById(projectId);
    proyectoToShow.style.display = 'block';
    proyectoToShow.classList.add('animated-section');
    proyectoToShow.style.animation = 'fade 1.5s ease-in-out'; // Aplica la animación al mostrar la sección
    hidePresentation();
}

function hidePresentation() {
    var presentacion = document.querySelector('.presentacion');
    presentacion.style.display = 'none';
}

function hideAllContent() {
    var proyectosInfo = document.querySelectorAll('.proyecto-info');
    proyectosInfo.forEach(function(proyecto) {
        proyecto.style.display = 'none';
    });

    var habilidadesInfo = document.querySelectorAll('.habilidad-info');
    habilidadesInfo.forEach(function(habilidad) {
        habilidad.style.display = 'none';
    });

    var presentacion = document.querySelector('.presentacion');
    presentacion.style.display = 'none';
}

function showPresentation() {
    var presentacion = document.querySelector('.presentacion');

    // Aplica la clase de animación a la presentación
    presentacion.classList.add('animated-presentation');

    // Muestra la presentación después de una pequeña demora (opcional)
    setTimeout(function() {
        presentacion.style.display = 'block';
    }, 100); // Modificar esta cantidad para ajustar la demora, si es necesario
}

window.onload = function() {
    var presentacion = document.querySelector('.presentacion');
    presentacion.style.display = 'block';

    // Aplica la clase de animación a la presentación después de una pequeña demora
    setTimeout(function() {
        presentacion.classList.add('animated-presentation');
    }, 100); // Modificar esta cantidad para ajustar la demora, si es necesario
};
