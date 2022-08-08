/* ALERT BANNER */
const alertBanner = document.getElementById("alert");
// create the html for the banner
alertBanner.innerHTML =
`<div>
<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
to complete</p>
<p class="alert-banner-close">x</p>
</div>`;


alertBanner.addEventListener("click", e => {
    const element = e.target;
  if(element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none";
  }
} );


alertBanner.addEventListener('click', e => {
    const element = e.target;
    if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none"
    }
    });

//TRAFFIC CHART
const traffic = document.getElementById('traffic-chart');
const trafficChart = new Chart(traffic, {
    type: 'line',
    data: {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [()]
    }
})