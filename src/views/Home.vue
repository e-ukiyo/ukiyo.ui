<template>
    <span>
        <navbar></navbar>
        <home-hero></home-hero>

    </span>
</template>

<script>
import HomeHero from '@/components/HomeHero';
import navbar from '@/components/navbar';

export default {
    name: 'home',
    components: {
        HomeHero,
        navbar
    }
};
</script>

