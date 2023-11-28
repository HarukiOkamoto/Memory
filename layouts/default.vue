<script setup lang="ts">
</script>

<template>
    <div class="head-area">
        <div class="head">
            <h1>Merry Moments</h1>
            <h4>HOLIDAY</h4>
        </div>
    </div>
    <main>
        <slot />
    </main>
</template>

<style>
.head-area {
    padding: 15px;
}

.head {
    text-align: center;
    background-color: rgb(199, 199, 199);
    border-radius: 10px;
    width: 100%;
    margin: 0 auto;
}

.head h1 {
    padding-top: 10px;
    font-weight: bold;
    font-family: GoudyOldStyleBold, 'EB Garamond', Garamond, "Big Caslon", "Times New Roman", serif;
    text-align: center;
    font-size: 25px;
}

.head h4 {
    font-family: GoudyOldStyleBold, 'EB Garamond', Garamond, "Big Caslon", "Times New Roman", serif;
    font-size: 15px;
    letter-spacing: 1.5px;
    text-align: center;
    padding-bottom: 5px;
    font-weight: bold;
}

/* フォント */
@font-face {
    font-family: GoudyOldStyleBold;
    src: url("../assets/fonts/GoudyOldStyleBold.ttf") format("truetype");
}
</style>
