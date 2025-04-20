
new Chart(document.getElementById("barChart"), {
  type: 'bar',
  data: {
    labels: ['Shirts', 'Shoes', 'Bags', 'Watches'],
    datasets: [{
      label: 'Units Sold',
      data: [120, 190, 80, 150]
    }]
  },
  options: {
        responsive: false,
      maintainAspectRatio: false,
      plugins: {
          legend: {
              labels: {
                  font: {
                      size: 18  // 🔥 Legend label size
                  }
              }
          },
          tooltip: {
              bodyFont: {
                  size: 16  // 🔥 Tooltip font size
              },
              titleFont: {
                  size: 18
              }
          }
      },
      scales: {
          x: {
              ticks: {
                  font: {
                      size: 16  // 🔥 X-axis labels
                  }
              }
          },
          y: {
              ticks: {
                  font: {
                      size: 16  // 🔥 Y-axis labels
                  }
              }
          }
      }

    }
});

new Chart(document.getElementById("pieChart"), {
  type: 'pie',
  data: {
    labels: ['Electronics', 'Clothing', 'Accessories'],
    datasets: [{
      data: [300, 500, 200]
    }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 18
                    }
                }
            },
            tooltip: {
                bodyFont: {
                    size: 16
                },
                titleFont: {
                    size: 18
                }
            }
        }
    }
});

new Chart(document.getElementById("lineChart"), {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [{
      label: 'Monthly Revenue ($)',
      data: [1200, 1500, 1300, 1600]
    }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    font: {
                        size: 18  // 🔥 Legend label size
                    }
                }
            },
            tooltip: {
                bodyFont: {
                    size: 16  // 🔥 Tooltip font size
                },
                titleFont: {
                    size: 18
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    font: {
                        size: 16  // 🔥 X-axis labels
                    }
                }
            },
            y: {
                ticks: {
                    font: {
                        size: 16  // 🔥 Y-axis labels
                    }
                }
            }
        }
    }
});
