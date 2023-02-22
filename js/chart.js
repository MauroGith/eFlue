const ctx = document.getElementById('myChart');
  Chart.defaults.font.size = '7px'
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['00:00-02:00', '02:00-04:00', '04:00-06:00', '06:00-08:00', '08:00-10:00', '10:00-12:00', '12:00-14:00', '14:00-16:00', '16:00-18:00', '18:00-20:00'],
      datasets: [{
        label: '',
        data: [100, 200, 300, 40, 100, 250, 710, 880, 990, 1000],
        borderWidth: 3,
        borderColor: "#f50066",
        tension: 0.3,
        pointRadius: 0,
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            display: false
          }
        }
      },
      plugins: {
        legend: {
            display: false
        }
      }, 
    }
  });

const doughnutChart= document.getElementById('doughnutChart');

  new Chart(doughnutChart, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [15, 12, 21, 17],
        cutout: '80%',
        borderWidth: 0,
        backgroundColor: [
          '#f50066',
          '#4e243d',
          '#a3009d',
          '#f4abd0',
        ],
      }]
    },
    options: {
      plugins: {
        legend: {
            display: false
        }
      }, 
    }
  });
  