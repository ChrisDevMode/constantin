
// const question = {
//     title: '¿A quién ha doblado más veces Constantino Romero?',
//     answers: [

//         {
//             label: "Clint Eastwood",
//             id: "clint-eastwood",
//             name: "actor",
//             value: "clint-eastwood",
//         },

//         {
//             label: "James Earl",
//             id: "james-earl",
//             name: "actor",
//             value: "james-earl",
//         },

//         {
//             label: "Roger Moore",
//             id: "roger-moore",
//             name: "actor",
//             value: "roger-moore",
//         },

//         {
//             label: "William Shatner",
//             id: "william-shatner",
//             name: "actor",
//             value: "william-shatner",
//         },

//         {
//             label: "Arnold Schwarzenegger",
//             id: "arnold-schwarzenegger",
//             name: "actor",
//             value: "arnold-schwarzenegger",
//         }

//     ]
// }

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
        },

        {
            label: "Manolo Escobar",
            id: "manolo-escobar",
            name: "cantante",
            value: "manolo-escobar",
        }

    ]
}








const body = document.querySelector('body');

// Función para crear elementos html
function createElement(el) {
    let element = document.createElement(el);
    return element;
}

function printTitle( question ) {
    // Creamos el elemento llamando a su función
    let title = createElement('p');

    // Insertamos nuestro elemento como hijo del body
    document.body.appendChild(title);

    // Creamos el texto que llevará el elemento creado
    let mainQuestion = document.createTextNode(question.title);

    // Asignamos el texto nodo como hijo del elemento que queramos que tenga dicho texto
    title.appendChild(mainQuestion);

    return title;
    
};


// MAIN FUNCTION
function printAllAnswers( question ) {


    // Recogemos el array de respuestas
    let arrAns = question.answers;

    // Creamos el elemento form
    let form = createElement('form');

    // Metemos al form dentro del body como 'hijo'
    body.appendChild(form);

    // Metemos la pregunta dentro del form
    let titleHTML = printTitle(question);
    form.appendChild(titleHTML)
    

    // Labels
    let arrLabels = [];
    let arrInputs = [];
    for(let i = 0; i < arrAns.length; i++) {
        arrLabels[arrLabels.length] = printLabel(arrAns[i]);
        arrInputs[arrInputs.length] = printInput(arrAns[i]);
    }
        
        

    for(let i = 0; i < arrLabels.length; i++) {
        form.appendChild(arrLabels[i]);
        form.appendChild(arrInputs[i]);
    }
    

    console.log(arrLabels);
    console.log(arrInputs);
}

printAllAnswers(question);


function printLabel( answer ) {
    // Creamos el elemento
    let label = createElement('label');

    // Le seteamos el atributo for
    label.setAttribute('for', answer.id);

    // Le pasamos el texto a mostrar como etiqueta
    label.textContent = answer.label;
    


    return label;
}


// imprimeInput: Recibe una respuesta e imprime un string con las propiedades id, name y value en una etiqueta input del tipo "radio".
function printInput( answer ) {
    // Creamos el elemento
    let input = createElement('input');

    // Le seteamos el atributo for
    input.setAttribute('name', answer.name);
    input.setAttribute('type', 'radio');
    input.setAttribute('id', answer.id);
    input.setAttribute('id', answer.value);
    
    return input;
}

// console.log(printInput(question.answers))







    

    









