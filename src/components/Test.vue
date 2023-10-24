<template>
    <h1>{{ test }}</h1>
</template>

<script setup>
defineProps({
    test:{
        type:String,
        required:true,
    }
});
</script>