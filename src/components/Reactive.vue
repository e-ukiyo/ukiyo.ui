<script>
import { Bar, mixins } from 'vue-chartjs'

// Getting the reactive prop
const { reactiveProp } = mixins;

export default {
    extends: Bar,
    mixins: [ reactiveProp ],
    data () {
        return {
            // ChartJS that control the appearance
            options: {
                scales: {
                    yAxes: [{
                        id: 'A',
                        type: 'linear',
                        position: 'left',
                        ticks: {
                            beginAtZero: true
                        },
                        gridLines: {
                            display: true
                        },
                    },{
                        id: 'B',
                        type: 'linear',
                        position: 'right',
                        ticks: {
                            beginAtZero: true
                        },
                        gridLines: {
                            display: true
                        }
                    }  
                    ],
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
        this.renderChart(this.chartData, this.options)
    }
}
</script>