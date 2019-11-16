<template>
    <v-container fluid fill-height class="home-hero">
        <v-row>
            <v-col>
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
            </v-col>

            <v-col >
                <div class="display-4 font-weight-black white--text text-xs-center">
                    <digital-clock :blink="true" />
                </div>
                <v-icon light="true">mdi-xbox-controller</v-icon>
                <div
                    class="display-4 font-weight-black white--text text-xs-center mb-3"
                >FOR YOUR TABLE</div>
                <div
                    class="display-1 font-weight-bold white--text text-xs-center"
                >Finally be a foodie at home with fresh, chef-prepared meals delivered daily to your door.</div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import DigitalClock from "vue-digital-clock";

export default {
    name: 'HomeHero',
    components: {
        DigitalClock
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