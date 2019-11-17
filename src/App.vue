<template>
    <v-app ref="appvue">
        <v-content transition="slide-x-transition">
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
import { HubConnectionBuilder, LogLevel, HttpTransportType } from '@aspnet/signalr';

export default {
    name: 'App',
    created() {
        this.hub = new HubConnectionBuilder()
            .withUrl(process.env.VUE_APP_UIHUB, {
                skipNegotiation: true,
                transport: HttpTransportType.WebSockets
            })
            .configureLogging(LogLevel.Debug)
            .build();

        this.hub.start().catch(function(err) {
            // eslint-disable-next-line no-console
            return console.error(err.toSting());
        });
    },
    mounted: function() {
        // ---------
        // Call client methods from hub
        // // ---------
        // var thisVue = this;
        // thisVue.connection.start();
        // thisVue.hub.on("ReceiveMessage", function(user, message) {
        //     thisVue.messages.push({ user, message });
        // });
    }
};
</script>
<style>

</style>
