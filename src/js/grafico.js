var ctx = document.getElementById('tab1').getContext('2d');
var tab1 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Alimentação', 'Habitação', 'Mobilidade', 'Bens', 'Serviços'],
        datasets: [{
            data: [5, 1, 3, 5, 2],
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
            xAxes:[{
                gridLines: {
                    display: false,
                    drayBorder: false
                }
            }]
        },
        legend: {
            display: false
        }
    
}})

Chart.defaults.global.defaultFontSize = 10;

var ctx = document.getElementById('tab2').getContext('2d');
var tab2 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [['Áreas', 'Construídas'], ['Áreas', 'de', 'Cultivo'], ['Áreas', 'de', 'Pastagem'], ['Áreas', 'de', 'Pesca'], ['Áreas', 'Florestais'], ['Pegada', 'de', 'Carbono']],
        datasets: [{
            data: [5, 1, 3, 5, 2, 4],
            backgroundColor: [
              '#C8E8E4',
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
            xAxes:[{
                gridLines: {
                    display: false,
                    drayBorder: false
                }
            }]
        },
        legend: {
            display: false,
        }   
}})