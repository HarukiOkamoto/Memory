<template>
    <div class="year">
        <h2>2022~2023</h2>
        <h4>12月 / 1月 / 2月</h4>
    </div>
    <div class="month">
        <NuxtLink tag="div" class="N-link" v-bind:to="{ name: 'autumn2022' }">
            <p class="arrow">&lt;</p>
        </NuxtLink>
        <h2>Winter</h2>
        <NuxtLink tag="div" class="N-link" v-bind:to="{ name: 'spring' }">
            <p class="arrow">&gt;</p>
        </NuxtLink>
    </div>
</template>

