const planetas = document.getElementById("planetas");
const pegada_carbono = document.getElementById("pegada_carbono");
const alimentacao = document.getElementById("alimentacao");
const habitacao = document.getElementById("habitacao");
const mobilidade = document.getElementById("mobilidade");
const bens = document.getElementById("bens");
const servicos = document.getElementById("servicos");
const areas_construidas = document.getElementById("areas_construidas");
const areas_cultivo = document.getElementById("areas_cultivo");
const areas_pastagem = document.getElementById("areas_pastagem");
const areas_pesca = document.getElementById("areas_pesca");
const areas_florestais = document.getElementById("areas_florestais");


const database = firebase.database().ref("resultados");


/*-------------------------Grafico----------------------------------------------------------*/
var ctx = document.getElementById('tab1').getContext('2d');
var tab1 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Alimentação', 'Habitação', 'Mobilidade', 'Bens', 'Serviços'],
        datasets: [{
            data: [],
            backgroundColor: [
                '#C8E8E4',
                '#C8E8E4',
                '#C8E8E4',
                '#C8E8E4',
                '#C8E8E4'
            ],
            borderColor: [
                '#85CAC3',
                '#85CAC3',
                '#85CAC3',
                '#85CAC3',
                '#85CAC3'
            ],
            borderWidth: 2,
            hoverBackgroundColor: '#85CAC3',
            hoverBorderColor: '#85CAC3',
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    display: false,
                    beginAtZero: true

                },
                gridLines: {
                    display: false,
                    drayBorder: false
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false,
                    drayBorder: false
                },
                ticks: {
                    autoSkip: false,
                    maxRotation: 0,
                    minRotation: 0
                },
            }]
        },
        legend: {
            display: false
        },
        tooltips: {
            displayColors: false,
            backgroundColor: '#313333',
            title: null,
            titleFontColor: '#F5F6F5',
            bodyFontColor: '#F5F6F5',
            callbacks: {
                title: function () { }
            }
        }

    }
})

Chart.defaults.global.defaultFontSize = 10;

var ctx = document.getElementById('tab2').getContext('2d');
var tab2 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [
            ['Áreas', 'Construídas'],
            ['Áreas', 'de', 'Cultivo'],
            ['Áreas', 'de', 'Pastagem'],
            ['Áreas', 'de', 'Pesca'],
            ['Áreas', 'Florestais']
        ],
        datasets: [{
            data: [],
            backgroundColor: [
                '#C8E8E4',
                '#C8E8E4',
                '#C8E8E4',
                '#C8E8E4',
                '#C8E8E4',
            ],
            borderColor: [
                '#85CAC3',
                '#85CAC3',
                '#85CAC3',
                '#85CAC3',
                '#85CAC3',
            ],
            borderWidth: 2,
            hoverBackgroundColor: '#85CAC3',
            hoverBorderColor: '#85CAC3',
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    display: false,
                    beginAtZero: true
                },
                gridLines: {
                    display: false,
                    drayBorder: false
                }
            }],
            xAxes: [{
                gridLines: {
                    display: false,
                    drayBorder: false
                },
                ticks: {
                    autoSkip: false,
                    maxRotation: 0,
                    minRotation: 0
                }
            }]
        },
        legend: {
            display: false,
        },
        tooltips: {
            displayColors: false,
            backgroundColor: '#313333',
            title: null,
            titleFontColor: '#F5F6F5',
            bodyFontColor: '#F5F6F5',
            callbacks: {
                title: function () { }
            }
        }
    }
})

Chart.defaults.global.defaultFontSize = 11;
Chart.defaults.global.defaultFontColor = '#313333';

function addData(chart, data1, data2, data3, data4, data5) {
    chart.data.datasets.forEach(function (dataset) {
        dataset.data.push(data1, data2, data3, data4, data5);
    });
    chart.update();
}

function removeData(chart, data) {
    chart.destroy();
    chart = new Chart(ctx, {
        type: document.getElementById("tab1").value,
        data: data,
    });
    chart.update();
};

var valueRef = firebase.database().ref('resultados');
valueRef.on('child_added', (snapshot) => {
    var resultado_alimentacao = snapshot.child("resultado_alimentacao").val();
    var resultado_habitacao = snapshot.child("resultado_habitacao").val();
    var resultado_mobilidade = snapshot.child("resultado_mobilidade").val();
    var resultado_bens = snapshot.child("resultado_bens").val();
    var resultado_servicos = snapshot.child("resultado_servicos").val();

    addData(tab1, resultado_alimentacao, resultado_habitacao,
        resultado_mobilidade, resultado_bens, resultado_servicos);
});

var valueRef = firebase.database().ref('resultados');
valueRef.on('child_added', (snapshot) => {

    var resultado_areas_construidas = snapshot.child("resultado_areas_construidas").val();
    var resultado_areas_cultivo = snapshot.child("resultado_areas_cultivo").val();
    var resultado_areas_pastagem = snapshot.child("resultado_areas_pastagem").val();
    var resultado_areas_pesca = snapshot.child("resultado_areas_pesca").val();
    var resultado_areas_florestais = snapshot.child("resultado_areas_florestais").val();

    addData(tab2, resultado_areas_construidas, resultado_areas_cultivo,
        resultado_areas_pastagem, resultado_areas_pesca, resultado_areas_florestais);
});