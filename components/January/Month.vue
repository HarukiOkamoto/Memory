<template>
    <div class="year">
        <h2>2023</h2>
    </div>
    <div class="month">
        <p class="arrow">&lt;</p>
        <h2>January</h2>
        <NuxtLink tag="div" class="N-link" v-bind:to="{ name: 'summer' }">
            <p class="arrow">&gt;</p>
        </NuxtLink>
    </div>
</template>

<style>
/* 年 */
h2 {
    padding-top: 40px;
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