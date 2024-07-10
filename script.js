// // script.js
// function calculateResult() {
//     const answers = {};
//     const formElements = document.getElementById('personality-test').elements;

//     for (let i = 0; i < formElements.length; i++) {
//         const element = formElements[i];
//         if (element.type === 'radio' && element.checked) {
//             const name = element.name;
//             const value = element.value;

//             if (!answers[name]) {
//                 answers[name] = value;
//             }
//         }
//     }

//     const counts = {a: 0, b: 0, c: 0, d: 0};

//     for (let key in answers) {
//         counts[answers[key]]++;
//     }

//     const maxCount = Math.max(counts.a, counts.b, counts.c, counts.d);
//     let result = '';

//     if (counts.a === maxCount) {
//         result = "Mayoría de A's: Personalidad Mar (Color Celeste). Eres tranquilo/a y soñador/a, y te encanta la sensación de libertad y la vastedad del océano.";
//     } else if (counts.b === maxCount) {
//         result = "Mayoría de B's: Personalidad Flor (Color Violeta). Eres creativo/a y delicado/a, y disfrutas de la belleza y el crecimiento constante de las flores.";
//     } else if (counts.c === maxCount) {
//         result = "Mayoría de C's: Personalidad Árbol (Color Verde). Eres fuerte y protector/a, y te sientes en casa rodeado/a de la naturaleza y la solidez de los árboles.";
//     } else if (counts.d === maxCount) {
//         result = "Mayoría de D's: Personalidad Corazón (Color Rosa). Eres cariñoso/a y empático/a, y valoras profundamente las relaciones y el bienestar de los demás.";
//     }

//     document.getElementById('result').innerText = result;
// }

document.getElementById('startButton').addEventListener('click', function() {
    window.location.href = 'form.html'; // Cambia esto a la URL de la página a la que quieres redirigir
});

function calculateResult() {
    const form = document.forms['personalityTest'];
    const answers = {
        a: 0,
        b: 0,
        c: 0,
        d: 0
    };

    for (let i = 1; i <= 10; i++) {
        const answer = form[`q${i}`].value;
        if (answer) {
            answers[answer]++;
        }
    }

    let maxAnswer = 'a';
    for (let key in answers) {
        if (answers[key] > answers[maxAnswer]) {
            maxAnswer = key;
        }
    }

    // Redirige a la página de resultados con la respuesta mayoritaria
    window.location.href = `resultado.html?result=${maxAnswer}`;
}