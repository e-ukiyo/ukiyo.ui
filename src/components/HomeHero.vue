<template>
    <v-container fluid fill-height class="home-hero">
        <v-row style="margin-top: -60px;">
            <v-col align="left" style="margin-left: 20px;">
                <v-img
                    src="../assets/Ayylogocircle.png"
                    aspect-ratio="1"
                    max-width="60"
                    max-height="60"
                ></v-img>
            </v-col>

            <v-col align="right" style="margin-right: 20px;">
                <v-img
                    src="../assets/Userlogocircle.png"
                    aspect-ratio="1"
                    max-width="60"
                    max-height="60"
                ></v-img>
            </v-col>
        </v-row>

        <v-row style="margin-top: -100px;">
            <v-col style="margin-left: 40px;">
                <v-card :elevation="18" style="margin-bottom: 60px;">
                    <v-card-title>
                        <v-icon style="padding-right: 5px;">mdi-soccer</v-icon>
                        Football Match! 
                    </v-card-title>

                    <v-row style="margin-top: -40px;">
                        <v-col>
                            <v-card-text class="text-primary">
                                Tomorrow 11/27 22:00 at Helsingin Olympiastadion
                            </v-card-text>

                            <v-card-text class="text-primary">
                                🇫🇮 Finland - Liechtenstein 🇫🇮
                            </v-card-text>
                        </v-col>
                        <v-col align="right" style="padding-right: 40px;">
                            <v-img
                                src="../assets/Mapita.png"
                                aspect-ratio="1"
                                max-width="120"
                                max-height="120"
                            ></v-img>
                        </v-col>
                    </v-row>
                </v-card>

                <v-card style="margin-top: -40px; margin-bottom: 20px;">
                     <v-card-title>
                         <v-icon style="padding-right: 5px;">mdi-school</v-icon>
                         Graduation
                    </v-card-title>

                    <v-row style="margin-top: -40px;">
                        <v-col align="left">
                            <v-card-text class="text-primary">
                                Saturday 11/30 21:00 at Aalto University
                            </v-card-text>
                            
                            <v-card-text style="margin-top: -25px;">
                                Weather prediction is raining! You should bring your umbrella
                            </v-card-text>
                        </v-col>
                        <v-col align="right" style="padding-right: 40px;padding-top: 0px;">
                            <v-img
                                src="../assets/vk_seasons13.png"
                                aspect-ratio="1"
                                max-width="120"
                                max-height="120"
                            ></v-img>
                        </v-col>
                    </v-row>
                    
                </v-card>

                <v-card style="margin-top: -0px;">
                    <v-card-title>
                        <v-icon style="padding-right: 5px;">mdi-flash</v-icon>
                        Consumption
                    </v-card-title>

                    <v-card-text class="text-primary" style="margin-top: -20px;">
                        <reactive  :width="300" :height="180" :chart-data="datacollection2"></reactive>
                    </v-card-text>
                </v-card>

            </v-col>

            <v-col>
                <div class="display-4 font-weight-black white--text text-xs-center">
                    <v-row>
                        <v-col class="text-center" style="text-shadow: black 0.1em 0.1em 0.2em;">
                            <digital-clock :blink="true" />
                        </v-col>

                        <v-col style="margin-left: 50px; margin-right: 50px;">
                            <v-card class="mx-auto" :elevation="18">
                                <v-card-text>
                                    <weather title="" units="ca" :currentDay="currentDay" :forecast="forecast"></weather>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                </div>
            </v-col>
        </v-row>

        <v-footer absolute dark>
                <marquee-text :duration="30">
                    <v-icon style="padding-left: 15px; padding-right: 5px;">mdi-subway-variant</v-icon><b>Transport</b> <i>Aalto Metro is actually down, restarting on 18:59</i>
                    <v-icon style="padding-left: 15px; padding-right: 5px;">mdi-book</v-icon><b>University</b> <i>Aalto library is now open</i>
                    <v-icon style="padding-left: 15px; padding-right: 5px;">mdi-cake</v-icon><b>Social</b> <i>Todays is Luca's Birthday!</i> 
                </marquee-text>
        </v-footer>
    </v-container>
</template>

<script>
import DigitalClock from "vue-digital-clock";
import Reactive from '@/components/Reactive';
import VueWeatherComponent from 'vue-weather-component';
import MarqueeText from 'vue-marquee-text-component';
import axios from 'axios';

export default {
    name: 'HomeHero',
    components: {
        DigitalClock,
//        LineChart,
        Reactive,
        'weather': VueWeatherComponent,
        MarqueeText
    },
    created() {
        // Here fetch API Data
        this.testAPI();
        this.getConsumption();
        //this.getLastEvent();
        this.fillData1();
        this.fillData2();
    },
    data() {
        return {
            received_api: [],
            consumptions: [],
            datacollection1: {},
            datacollection2: {},
            currentDay: {
                icon: 'fog',
                temp: '17',
                currentSummary: 'Fog',
                hourlySummary: 'Partly cloudy over the day',
                windSpeed: 2
            },
            forecast: [{
                name: 'Mon',
                icon: 'partly-cloudy-day',
                highTemp: '7',
                lowTemp: '0'
            },{
                name: 'Tue',
                icon: 'snow',
                highTemp: '3',
                lowTemp: '-2'
            },{
                name: 'Wed',
                icon: 'clear-day',
                highTemp: '9',
                lowTemp: '3'
            },{
                name: 'Thu',
                icon: 'clear-day',
                highTemp: '10',
                lowTemp: '2'
            },{
                name: 'Fri',
                icon: 'clear-day',
                highTemp: '8',
                lowTemp: '3'
            },{
                name: 'Sat',
                icon: 'rain',
                highTemp: '7',
                lowTemp: '0'
            },{
                name: 'Sun',
                icon: 'rain',
                highTemp: '5',
                lowTemp: '-1'
            }]
        }
    },
    mounted() {
        // XD Already working
        // https://github.com/apertureless/vue-chartjs/blob/develop/src/examples/App.vue 
        setInterval(() => {
        this.fillData2()
      }, 2000)
    },
    methods: {
        testAPI () {
            let api_url = process.env.VUE_APP_APIURL;
            
            let config = {
                headers: {'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImMwMWI0OWI3LWI5MWMtNDUyMi1hYTY3LWFhYTQzZTVmZjBkNCIsImp0aSI6IjVjZTYzZDczLTUxMWItNDcyNi04NzFmLWY4NzAxNGY2NGVjNCIsImlzcyI6Imh0dHBzOi8vYXBpLnV5aWtvLmZvc2Muc3BhY2UifQ.Lqud-gwA6HJwcmtLk_atkmPLxF984h-2aRo8mgAUmZU'}
            };

            // var bodyParameters = {
            //     key: "value"
            // }

            axios.get(
                api_url + '/Authenticate/test',
                //bodyParameters,
                config
            ).then((response) => {
                // eslint-disable-next-line no-console
                console.log(response)
            }).catch((error) => {
                // eslint-disable-next-line no-console
                console.log(error)
            });
        },
        getLastEvent () {

        },
        getConsumption () {
            let buildingId = 'd37fc422-0462-4c48-a54c-846258d0944a';
            let initInterval = '01/05/2018';
            let finishInterval = '01/06/2018';

            let api_url = process.env.VUE_APP_APIURL;
            let config = {
                headers: {'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImMwMWI0OWI3LWI5MWMtNDUyMi1hYTY3LWFhYTQzZTVmZjBkNCIsImp0aSI6IjVjZTYzZDczLTUxMWItNDcyNi04NzFmLWY4NzAxNGY2NGVjNCIsImlzcyI6Imh0dHBzOi8vYXBpLnV5aWtvLmZvc2Muc3BhY2UifQ.Lqud-gwA6HJwcmtLk_atkmPLxF984h-2aRo8mgAUmZU'}
            };

            axios.get(
                api_url + '/Consumption/interval?buildingId=' + buildingId + '&start=' + initInterval + '&finish=' + finishInterval,
                config
            ).then((response) => {
                // Extraemos los datos a los diferentes arrays
                for(let i = 0; i < 12; i++) {
                    let obj = response.data[i];

                    this.consumptions.push(obj.heating);

                    // eslint-disable-next-line no-console
                   //console.log(obj.heating);
                }

                // eslint-disable-next-line no-console
                //console.log(this.consumptions)


                // eslint-disable-next-line no-console
                //console.log(this.datacollection2.datasets[0].data)
            }).catch((error) => {
                // eslint-disable-next-line no-console
                console.log(error)
            });

        },
        fillData1 () {
            this.datacollection1 = {
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
        fillData2 () {
            this.datacollection2 = {
                // Data for the y-axis of the chart
                labels: ['5/18', '6/18,', '7/18', '8/18', '9/18', '10/18', '11/18', '12/18', '01/19', '02/19', '03/19', '4/19'],
                datasets: [
                    {
                        label: 'Electricity (kWh)',
                        backgroundColor: '#8b54b2',
                        // Data for the x-axis of the chart
                        data: this.consumptions
                    }
                ]
            }
        },
        getRandomInt () {
            // Generating random info XD
            return Math.floor(Math.random() * (50-5+1)) +5
        }
    }
};
</script>

<style scoped>
.home-hero {
    background: url('../assets/BG_BLUR2.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;
}
</style>
