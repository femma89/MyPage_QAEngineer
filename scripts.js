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
    
    // Muestra el combo box solo si se hace clic en "Forjando el camino"
    if (projectId === 'proyecto1-info') {
        const selectTimeline = document.getElementById('select-way');
        selectTimeline.style.display = 'block'; // Muestra el combo box
        selectTimeline.classList.add('show'); // Asegura que esté visible
    } else {
        const selectTimeline = document.getElementById('select-way');
        selectTimeline.style.display = 'none'; // Oculta el combo box para otras secciones
        selectTimeline.classList.remove('show');
    }

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

function updateBannerTitle(sectionTitle) {
    const dynamicTitle = document.getElementById('dynamicTitle');
    dynamicTitle.textContent = sectionTitle;
}

document.getElementById('proyectos').addEventListener('click', function(event) {
    const clickedElement = event.target.textContent;
    if (clickedElement === 'Forjando el camino' || clickedElement === 'Proyectos') {
        updateBannerTitle(clickedElement);
        showBannerTitle();
    }
});

document.getElementById('habilidades').addEventListener('click', function(event) {
    const clickedElement = event.target.textContent;
    if (clickedElement === 'Trayectoria' || clickedElement === 'Habilidades') {
        updateBannerTitle(clickedElement);
        showBannerTitle();
    }
});

document.getElementById('personales').addEventListener('click', function(event) {
    const clickedElement = event.target.textContent;
    if (clickedElement === 'Perfil' || clickedElement === 'Referencias') {
        updateBannerTitle(clickedElement);
        showBannerTitle();
    }
});

document.getElementById('contactos').addEventListener('click', function(event) {
    const clickedElement = event.target.textContent;
    if (clickedElement === 'Enviar mensaje') {
        updateBannerTitle(clickedElement);
        showBannerTitle();
    }
});

function showBannerTitle() {
    const bannerTitle = document.getElementById('dynamicTitle');
    bannerTitle.style.display = 'block';
}

// Ocultar el título general al cargar la página
window.addEventListener('load', function() {
    const bannerTitle = document.getElementById('dynamicTitle');
    bannerTitle.style.display = 'none';
});


// Puedes seguir añadiendo más listeners para las otras secciones si las tienes

window.onload = function() {
    var presentacion = document.querySelector('.presentacion');
    presentacion.style.display = 'block';

    // Aplica la clase de animación a la presentación después de una pequeña demora
    setTimeout(function() {
        presentacion.classList.add('animated-presentation');
    }, 100); // Modificar esta cantidad para ajustar la demora, si es necesario
};

document.addEventListener('DOMContentLoaded', function () {
    const celdas = document.querySelectorAll('.celda');
    let timeout;

    celdas.forEach(celda => {
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.textContent = celda.getAttribute('data-tooltip');
        celda.appendChild(tooltip); // Adjuntamos el tooltip a la celda


        celda.addEventListener('mouseenter', function (event) {
            const rect = this.getBoundingClientRect();
            const isNearBottom = window.innerHeight - rect.bottom < 100;
            const isNearTop = rect.top < window.innerHeight / 2; // Verifica si está en la mitad superior

            if (isNearBottom) {
                tooltip.style.top = 'auto';
                tooltip.style.bottom = '100%';
                tooltip.style.transform = 'translate(50%, 20%)';
            } else if (isNearTop) {
                tooltip.style.top = '100%';
                tooltip.style.bottom = 'auto';
                tooltip.style.transform = 'translate(50%, -20%)'; // Modificación aquí
            } else {
                tooltip.style.top = 'auto';
                tooltip.style.bottom = 'auto';
                tooltip.style.transform = 'translate(-50%, 0)';
            }

            timeout = setTimeout(() => {
                tooltip.style.opacity = 1;
            }, 0);
        });

        celda.addEventListener('mouseleave', function (event) {
            clearTimeout(timeout);
            tooltip.style.opacity = 0;
        });

        tooltip.addEventListener('mouseenter', function (event) {
            clearTimeout(timeout);
        });

        tooltip.addEventListener('mouseleave', function (event) {
            tooltip.style.opacity = 0;
        });
    });
});

window.addEventListener('load', function() {
    // Oculta el combo box al cargar la página
    const selectTimeline = document.getElementById('select-way');
    selectTimeline.style.display = 'none';

    // Función para desplazar a la sección seleccionada en el timeline
    function scrollToElement(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    // Manejador de eventos para el cambio en el combo box
    selectTimeline.addEventListener('change', function() {
        const selectedValue = this.value;
        scrollToElement(selectedValue);
    });
});









