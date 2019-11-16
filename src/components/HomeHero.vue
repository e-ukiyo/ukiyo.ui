<template>
    <v-container fluid fill-height class="home-hero">
        <v-row style="margin-top: -130px;">
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

        <v-row style="margin-top: -180px;">
            <v-col style="margin-left: 40px;">
                <!--
                    <v-card class="mx-auto" max-width="400">
                    <v-img class="white--text align-end" height="200px"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                        <v-card-title>Top 10 Australian beaches</v-card-title>
                    </v-img>

                    <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

                    <v-card-text class="text--primary">
                        <div>Whitehaven Beach</div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="orange" text>Share</v-btn>
                        <v-btn color="orange" text>Explore</v-btn>
                    </v-card-actions>
                </v-card>
                -->
                <v-card :elevation="18" style="margin-bottom: 60px;">
                    <v-card-text class="text-primary">
                        <!--<line-chart :width="300" :height="180"></line-chart>-->
                        <reactive :width="300" :height="180" :chart-data="datacollection1"></reactive>
                    </v-card-text>
                </v-card>

                <v-card>
                    <v-card-text class="text-primary">
<!--                        <line-chart :width="300" :height="180"></line-chart>-->
                        <reactive :width="300" :height="180" :chart-data="datacollection2"></reactive>
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

                <!--
                <v-icon light="true">mdi-xbox-controller</v-icon>
                <div class="display-4 font-weight-black white--text text-xs-center mb-3">
                    FOR YOUR TABLE
                </div>
                
                <div class="display-1 font-weight-bold white--text text-xs-center">
                    Finally be a foodie at home with fresh, chef-prepared meals delivered daily to your door.
                </div>
                <v-card>
                    <v-card-text>1231312</v-card-text>
                </v-card>
                <v-divider></v-divider>
                
                <v-card>
                    <v-card-text>adasd</v-card-text>
                </v-card>
                -->
            </v-col>
        </v-row>
        <v-footer absolute dark>
                <marquee-text :duration="30">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna.
                </marquee-text>
        </v-footer>
    </v-container>
</template>

<script>
import DigitalClock from "vue-digital-clock";
//import LineChart from '@/components/LineChart';
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
    created () {
        this.fetchData();
        this.fillData1();
        this.fillData2();
    },
    data () {
        return {
            datacollection1: null,
            datacollection2: null,
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
    methods: {
        fetchData () {
            let api_url = process.env.VUE_APP_APIURL;
            
            var config = {
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