<script setup lang="ts">
useHead({
    title: "2022 | Autumn"
})
</script>
<template>
    <div class="year">
        <h2>2022</h2>
        <h4>9月 / 10月 / 11月</h4>
    </div>
    <div class="month">
        <NuxtLink tag="div" class="N-link" v-bind:to="{ name: 'index' }">
            <p class="arrow">&lt;</p>
        </NuxtLink>
        <h2>Autmun</h2>
        <NuxtLink tag="div" class="N-link" v-bind:to="{ name: 'winter2022' }">
            <p class="arrow">&gt;</p>
        </NuxtLink>
    </div>
</template>
