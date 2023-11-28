<script setup lang="ts">
useHead({
    title: "2023 | Summer"
})
</script>
<template>
    <div class="year">
        <h2>2023</h2>
        <h4>6月 / 7月 / 8月</h4>
    </div>
    <div class="month">
        <NuxtLink tag="div" class="N-link" v-bind:to="{ name: 'spring' }">
            <p class="arrow">&lt;</p>
        </NuxtLink>
        <h2>Summer</h2>
        <NuxtLink tag="div" class="N-link" v-bind:to="{ name: 'autumn' }">
            <p class="arrow">&gt;</p>
        </NuxtLink>
    </div>
</template>

