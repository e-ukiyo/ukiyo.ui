<template>
    <v-app>
        <v-content transition="slide-x-transition">
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
import { HubConnectionBuilder, LogLevel } from '@aspnet/signalr'

export default {
    name: 'App',
    created() {
        this.hub = new HubConnectionBuilder()
            .withUrl(process.env.VUE_APP_UIHUB)
            .configureLogging(LogLevel.Debug)
            .build()

        this.hub.start().catch(function(err) {
            return console.error(err.toSting());
        });
    },
    mounted: function() {
        // ---------
        // Call client methods from hub
        // // ---------
        // var thisVue = this;
        // thisVue.connection.start();
        // thisVue.connection.on("ReceiveMessage", function(user, message) {
        //     thisVue.messages.push({ user, message });
        // });
    }
};
</script>
<style>

</style>
