<template>
    <v-container fluid fill-height class="home-hero">
        <v-row style="margin-top: -120px;">
            <v-col>
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
                <v-card class="mx-auto" elevation="10" max-width="600" max-height="500">
                    <v-card-title>Water</v-card-title>

                    <v-card-text class="text-primary">
                        <line-chart :width="400" :height="200"></line-chart>
                    </v-card-text>

                    <v-card-text class="text-primary">
                        <line-chart :width="400" :height="200"></line-chart>
                    </v-card-text>
                </v-card>

            </v-col>

            <v-col >
                <div class="display-4 font-weight-black white--text text-xs-center">
                    <v-row>
                        <v-col style="padding-top: 0px; padding-left: 200px;">
                            <digital-clock :blink="true" />
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-card class="mx-auto">
                                <v-card-text>
                                    <weather title="" units="ca" :currentDay="currentDay" :forecast="forecast"></weather>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            
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
    </v-container>
</template>

<script>
import DigitalClock from "vue-digital-clock";
import LineChart from '@/components/LineChart';
import VueWeatherComponent from 'vue-weather-component';
import axios from 'axios';

export default {
    name: 'HomeHero',
    components: {
        DigitalClock,
        LineChart,
        'weather': VueWeatherComponent
    },
    created () {
        //this.fetchData();
    },
    data () {
        return {
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
            var config = {
                headers: {'Authorization': 'Bearer ' + 'asdasdasdasd'}
            };

            var bodyParameters = {
                key: "value"
            }

            axios.post(
                'http://api.ukiyo.fosc.space/api/v1/{ID}/day',
                bodyParameters,
                config
            ).then((response) => {
                // eslint-disable-next-line no-console
                console.log(response)
            }).catch((error) => {
                // eslint-disable-next-line no-console
                console.log(error)
            });
        }
    }
};
</script>

<style scoped>
.home-hero {
    background: url('../assets/BG_BLUR.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;
}

</style>