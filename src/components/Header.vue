<template>
    <header>
    <h1>{{ title="title" }}</h1>
  </header>
</template>

<script setup>
defineProps({
    title:{
        type:String,
        required:true,
    }
});
</script>