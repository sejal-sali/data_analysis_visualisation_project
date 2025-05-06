function populateCitySelector(data) {
    const select = document.getElementById('citySelect');
    const cities = [...new Set(data.map(d => d.City))];
    cities.forEach(city => {
      const option = document.createElement('option');
      option.value = city;
      option.textContent = city;
      select.appendChild(option);
    });
  }
  
  function renderMonthlyTrendChart(data, city) {
    const filtered = data.filter(d => d.City === city);
    const labels = filtered.map(d => d.Month);
    const values = filtered.map(d => d.Composite_Happiness_Index);
  
    new Chart(document.getElementById('monthlyTrendChart'), {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: `Happiness Trend - ${city}`,
          data: values,
          fill: false,
          borderColor: 'rgba(255,99,132,1)',
          tension: 0.1
        }]
      },
      options: { responsive: true }
    });
  }
  
  function renderTrafficDensityPie(data) {
    const counts = data.reduce((acc, val) => {
      acc[val.Traffic_Density] = (acc[val.Traffic_Density] || 0) + 1;
      return acc;
    }, {});
    const labels = Object.keys(counts);
    const values = Object.values(counts);
  
    new Chart(document.getElementById('trafficDensityChart'), {
      type: 'pie',
      data: {
        labels,
        datasets: [{
          label: 'Traffic Density Distribution',
          data: values,
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }]
      },
      options: { responsive: true }
    });
  }
  
  function renderHeatmap(data) {
    const cities = [...new Set(data.map(d => d.City))].slice(0, 5); // top 5
    const metrics = ['Air_Quality_Index', 'Cost_of_Living_Index', 'Healthcare_Index'];
  
    const datasets = metrics.map((metric, i) => ({
      label: metric,
      data: cities.map(city => {
        const cityData = data.filter(d => d.City === city);
        const avg = cityData.reduce((sum, d) => sum + parseFloat(d[metric]), 0) / cityData.length;
        return avg;
      }),
      backgroundColor: `rgba(${50 + i * 50}, ${200 - i * 30}, 150, 0.6)`
    }));
  
    new Chart(document.getElementById('indexHeatmap'), {
      type: 'bar',
      data: {
        labels: cities,
        datasets
      },
      options: {
        responsive: true,
        scales: { y: { beginAtZero: true } }
      }
    });
  }
  
  // Combine all on page load
  fetchData().then(data => {
    renderCharts(data); // existing
    populateCitySelector(data);
    renderTrafficDensityPie(data);
    renderHeatmap(data);
    document.getElementById('citySelect').addEventListener('change', e => {
      renderMonthlyTrendChart(data, e.target.value);
    });
  });
  