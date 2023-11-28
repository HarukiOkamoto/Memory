<script setup lang="ts">
useHead({
    title: "2023 | Spring"
})
</script>
<template>
    <div class="year">
        <h2>2023</h2>
        <h4>3月 / 4月 / 5月</h4>
    </div>
    <div class="month">
        <NuxtLink tag="div" class="N-link" v-bind:to="{ name: 'winter2022' }">
            <p class="arrow">&lt;</p>
        </NuxtLink>
        <h2>Spring</h2>
        <NuxtLink tag="div" class="N-link" v-bind:to="{ name: 'summer' }">
            <p class="arrow">&gt;</p>
        </NuxtLink>
    </div>
</template>
