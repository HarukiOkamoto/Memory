<script setup lang="ts">
useHead({
    title: "2023 | Autumn"
})
</script>
<template>
    <div class="year">
        <h2>2023</h2>
        <h4>9月 / 10月 / 11月</h4>
    </div>
    <div class="month">
        <NuxtLink tag="div" class="N-link" v-bind:to="{ name: 'summer' }">
            <p class="arrow">&lt;</p>
        </NuxtLink>
        <h2>Autumn</h2>
        <NuxtLink tag="div" class="N-link" v-bind:to="{ name: 'winter' }">
            <p class="arrow">&gt;</p>
        </NuxtLink>
    </div>
</template>

