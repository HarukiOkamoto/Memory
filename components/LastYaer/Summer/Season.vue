<script setup lang="ts">
useHead({
    title: "2022 | Summer"
})
</script>
<template>
    <div class="year">
        <h2>2022</h2>
        <h4>6月 / 7月 / 8月</h4>
    </div>
    <div class="month">
        <NuxtLink tag="div" class="N-link" v-bind:to="{ name: 'autumn' }">
            <p class="arrow">&lt;</p>
        </NuxtLink>
        <h2>Summer</h2>
        <NuxtLink tag="div" class="N-link" v-bind:to="{ name: 'autumn2022' }">
            <p class="arrow">&gt;</p>
        </NuxtLink>
    </div>
</template>

<style>
/* 年 */
h2 {
    padding-top: 10px;
    text-align: center;
}

h4 {
    text-align: center;
}

/* 月 */
.month {
    margin: 0 auto;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.month h2 {
    margin: 0;
    padding: 20px;
}

/* 矢印 */
.arrow {
    font-size: 20px;
}

.N-link {
    text-decoration: none;
}
</style>