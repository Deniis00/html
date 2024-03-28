// script.js

// Esta función abre el panel de subopciones y muestra las subopciones para la opción seleccionada
function openSuboptions(optionId) {
    // Asegúrate de que el objeto allSuboptions tenga entradas para todas tus opciones
    var allSuboptions = {
        'option1': ['Subopción 1a', 'Subopción 1b', 'Subopción 1c'],
        'option2': ['Subopción 2a', 'Subopción 2b', 'Subopción 2c'],
        'option3': ['Subopción 3a', 'Subopción 3b', 'Subopción 3c'],
        // Agrega aquí más opciones y subopciones según sea necesario
    };

    // Obtiene las subopciones para la opción seleccionada
    var suboptions = allSuboptions[optionId];

    // Obtiene el contenedor de subopciones en el DOM
    var suboptionsList = document.getElementById('suboptions-list');

    // Limpia cualquier subopción que se haya mostrado previamente
    suboptionsList.innerHTML = '';

    // Crea y agrega las nuevas subopciones al contenedor de subopciones
    suboptions.forEach(function(suboptionText) {
        var suboptionElement = document.createElement('div');
        suboptionElement.textContent = suboptionText;
        suboptionsList.appendChild(suboptionElement);
    });

    // Establece el ancho del panel de subopciones para mostrarlo
    document.getElementById('suboptions-panel').style.width = '250px';
}

// Esta función cierra el panel de subopciones
function closeSuboptions() {
    document.getElementById('suboptions-panel').style.width = '0';
}
