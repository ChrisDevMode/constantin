
const question = {
    title: '¿A quién ha doblado más veces Constantino Romero?',
    answers: [

        {
            label: "Clint Eastwood",
            id: "clint-eastwood",
            name: "actor",
            value: "clint-eastwood",
        },

        {
            label: "James Earl",
            id: "james-earl",
            name: "actor",
            value: "james-earl",
        },

        {
            label: "Roger Moore",
            id: "roger-moore",
            name: "actor",
            value: "roger-moore",
        },

        {
            label: "William Shatner",
            id: "william-shatner",
            name: "actor",
            value: "william-shatner",
        },

        {
            label: "Arnold Schwarzenegger",
            id: "arnold-schwarzenegger",
            name: "actor",
            value: "arnold-schwarzenegger",
        }

    ]
}


// Función para crear elementos html---------------------------------
function createElement(el) {
    let element = document.createElement(el);
    return element;
};


// Función para imprimir el título del formulario---------------------
function printTitle( question ) {

    // Creamos el elemento llamando a la función
    let title = createElement('p');

    // Insertamos nuestro elemento como hijo del body
    document.body.appendChild(title);

    // Creamos el texto que llevará el elemento creado
    let mainQuestion = document.createTextNode(question.title);

    // Asignamos el texto nodo como hijo del elemento que queramos que tenga dicho texto
    title.appendChild(mainQuestion);

    return title;
    
};


// MAIN FUNCTION---------------------------------------------------------------
function printAllAnswers( question ) {

    // Creamos el body
    const body = document.querySelector('body');

    // Guardamos en una variable el array de respuestas para no estar escribiendo question.answers todo el rato.
    let arrAns = question.answers;

    // Creamos el elemento form (llamando a la función externa)
    let form = createElement('form');

    // Metemos al form dentro del body como 'hijo'
    body.appendChild(form);

    // Creamos el título del formulario llamando a su función externa
    let titleHTML = printTitle(question);
    // Metemos la pregunta como hijo del form
    form.appendChild(titleHTML);
    

    // Labels & inputs

    // Creamos los arrays para almacenar todas las etiquetas y todos los inputs que vamos a crear
    let arrLabels = [];
    let arrInputs = [];

    // Creamos el bucle que utilizamos para crear todas las etiquetas y todos los inputs en sus respectivos arrays
    for(let i = 0; i < arrAns.length; i++) {

        // Metemos los elementos que vamos recorriendo del objeto llamando a la función que les corresponde:
            // printLabel para las etiquetas y printInput para los inputs.
        arrLabels[arrLabels.length] = printLabel(arrAns[i]);
        arrInputs[arrInputs.length] = printInput(arrAns[i]);

    };
       
    // Creamos un bucle para insertar como hijos del form todas las etiquetas e inputs creados en el paso anterior 
    for(let i = 0; i < arrLabels.length; i++) {
        form.appendChild(arrLabels[i]);
        form.appendChild(arrInputs[i]);
    };
    
};

printAllAnswers(question);


// Función para imprimir etiquetas
function printLabel( answer ) {

    // Creamos el elemento con la función externa
    let label = createElement('label');

    // Le añadimos el atributo 'for'
    label.setAttribute('for', answer.id);

    // Le pasamos el texto a mostrar como etiqueta y lo guardamos en una variable
    let labelText = document.createTextNode(answer.label);
    // Lo insertamos a su padre (label)
    label.appendChild(labelText);
    
    // devolvemos como resultado la variable label
    return label;
    
};


// Función para imprimir los inputs
function printInput( answer ) {

    // Creamos el elemento
    let input = createElement('input');

    // Le añadimos los atributos necesarios
    input.setAttribute('name', answer.name);
    input.setAttribute('type', 'radio');
    input.setAttribute('id', answer.id);
    input.setAttribute('id', answer.value);
    
    // Devolvemos la variable input.
    return input;
}







    

    









