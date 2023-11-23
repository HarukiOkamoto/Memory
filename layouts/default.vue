<script setup lang="ts">
</script>

<template>
    <div class="head-area">
        <div class="head">
            <h1>Diaries</h1>
            <h4>Holiday Celebration</h4>
        </div>
    </div>

    <main>
        <slot />
    </main>

    <!-- <footer>
        <div class="footer-area">
            <p></p>
        </div>
    </footer> -->
</template>

<style>
/* .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
} */

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
    font-family: "Goudy Old Style", Garamond, "Big Caslon", "Times New Roman", serif;
    letter-spacing: 1px;
    text-align: center;
    font-size: 25px;
}

.head h4 {
    font-family: "Goudy Old Style", Garamond, "Big Caslon", "Times New Roman", serif;
    font-size: 15px;
    letter-spacing: 1px;
    text-align: center;
    padding-bottom: 5px;
}

/* メディアクエリ - スマートフォン向け */
@media screen and (max-width: 767px) {
    .head h1 {
        font-size: 20px;
    }

    .head h4 {
        font-size: 15px;
    }
}

/* footer {
    padding-top: 100px;
    width: 100%;
} */

/* .footer-area {
    width: 100%;
    background-color: rgb(199, 199, 199);
    border-radius: 10px;
    color: black;
    text-align: center;
    padding: 10px;
    font-family: "Goudy Old Style", Garamond, "Big Caslon", "Times New Roman", serif;
    font-weight: bold;
} */
</style>
