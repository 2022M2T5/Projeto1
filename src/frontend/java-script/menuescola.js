const DBPATH = 'banco.db';
var dataNotes = [];
const CHART = document.getElementById("myChart");

//Pega idGestor
sessionStorage.setItem("gestorId", 1);

$.ajaxSetup({async:false});
$(document).ready(function (){
    $.get("http://127.0.0.1:3082/Respostas/"+ sessionStorage.getItem("gestorId") +"/1", function(resultado) {
        dataNotes.push(resultado[0].notaTotal);
        sessionStorage.setItem("gestorId", resultado[0].idGestor);
    })

    $.get("http://127.0.0.1:3082/Respostas/"+ sessionStorage.getItem("gestorId") +"/2", function(resultado) {
        dataNotes.push(resultado[0].notaTotal);
    })

    $.get("http://127.0.0.1:3082/Respostas/"+ sessionStorage.getItem("gestorId") +"/3", function(resultado) {
        dataNotes.push(resultado[0].notaTotal);
    })

    $.get("http://127.0.0.1:3082/Respostas/"+ sessionStorage.getItem("gestorId") +"/4", function(resultado) {
        dataNotes.push(resultado[0].notaTotal);
    })

    console.log(dataNotes)

    const myChart = new Chart(CHART, {
        type: 'radar',
        data: {
            labels: ['Eixo 1', 'Eixo 2', 'Eixo 3', 'Eixo 4'],
            datasets: [{
                label: 'Escola',
                data: dataNotes,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    

})