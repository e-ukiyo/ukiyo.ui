<template>
    <section class="container">
        <h1>Demo of vue-chartjs</h1>
        <div class="columns">
            <div class="columns">
                <h3>Line Chart</h3>
                <line-chart></line-chart>
            </div>
            <div class="column">
                <h3>Bar Chart</h3>
                <!-- Bar Chart example -->
                <bar-chart></bar-chart>
            </div>
            <div class="column">
                <h3>Bubble Chart</h3>
                <!-- Bubble Chart -->
                <bubble-chart></bubble-chart>
            </div>
            <div class="column">
                <h3>Reactivity</h3>
                <!-- Reactivity chart -->
                <reactive :chart-data="datacollection"></reactive>
                <button class="button is-primary" @click="fillData()">Randomize</button>
            </div>
        </div>
    </section>
</template>

<script>
import LineChart from '@/components/LineChart';
import BarChart from '@/components/BarChart';
import BubbleChart from '@/components/BubbleChart';
import Reactive from '@/components/Reactive';

export default {
    name: 'VueChartJS',
    components: {
        LineChart,
        BarChart,
        BubbleChart,
        Reactive
    },
    data () {
        return {
            datacollection: null
        }
    },
    created () {
        // when create a vue-instace, call the function
        this.fillData()
    },
    methods: {
        fillData () {
            this.datacollection = {
                // Data for the y-axis of the chart
                labels: ['Jan', 'Feb,', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Ag', 'Sept', 'Oct', 'Nov', 'Dic'],
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: '#f87979',
                        // Data for the x-axis of the chart
                        data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
                    }
                ]
            }
        },
        getRandomInt () {
            // Generating random info XD
            return Math.floor(Math.random() * (50-5+1)) +5
        }
    }
}
</script>
