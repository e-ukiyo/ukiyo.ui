<script>
import { Bar } from 'vue-chartjs'

export default {
    extends: Bar,
    data () {
        return {
            datacollection: {
                // Data to be represented on x-axis
                labels: ['Jan', 'Feb,', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ag', 'Sept', 'Oct', 'Nov', 'Dic'],
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: '#f87979',
                        pointBackgroundColor: 'white',
                        borderWidth: 1,
                        pointBorderColor: '#249EBF',
                        // Data to be represented on y-axis
                        data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100]
                    }
                ]
            },
            // ChartJS options that control the appearance
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        gridLines: {
                            display: true
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: false
                        }
                    }]
                },
                legend: {
                    display: true
                },
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },
    mounted () {
        //renderChart function renders the chart with the datacollection and options
        this.renderChart(this.datacollection, this.options)
    }
}
</script>