<template>
    <header>
        <h1>{{ title = "This is Header Section" }}</h1>
    </header>
    <h1>File Upload Progress with Vue.js 3</h1>
        <input type="file" ref="fileInput" @change="onFileChange">
        <button @click="uploadFile">Upload</button>
        <progress v-bind:value="progress" max="100">12%</progress>
        <p>Progress: {{ progress }}%</p>
</template>

<script>
    export default {
        progress: 0,
        file: null,
        
    }
</script>