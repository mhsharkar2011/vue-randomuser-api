<template>
    <h1 class="green">{{ test }}</h1>
    <button class="btn" v-on:click="click">Click Me</button>
</template>

<script setup>
defineProps({
    test:{
        type:String,
        required:true,
    }
});
</script>