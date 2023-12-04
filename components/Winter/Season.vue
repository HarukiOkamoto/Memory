<script setup lang="ts">
useHead({
    title: "2023 | Winter"
})
</script>
<template>
    <div class="year">
        <h2>2023</h2>
        <h4>12月</h4>
    </div>
    <div class="month">
        <NuxtLink tag="div" class="N-link" v-bind:to="{ name: 'autumn' }">
            <p class="arrow">&lt;</p>
        </NuxtLink>
        <h2>Winter</h2>
        <NuxtLink tag="div" class="N-link" v-bind:to="{ name: 'index' }">
            <p class="arrow">&gt;</p>
        </NuxtLink>
    </div>
</template>

