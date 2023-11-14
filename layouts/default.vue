<script setup lang="ts">
</script>

<template>
    <div class="head">
        <h1>Memorial Memory</h1>
        <h4>in X'max</h4>
        <div class="year">
            <h2>2023</h2>
        </div>
    </div>
    <main>
        <slot />
    </main>
</template>

<style>
.head {
    text-align: center;
}

.head h1 {
    font-weight: bold;
    font-family: "Goudy Old Style", Garamond, "Big Caslon", "Times New Roman", serif;
    letter-spacing: 1px;
}

.head h2 {
    padding: 10px;
}

.head h4 {
    font-family: "Goudy Old Style", Garamond, "Big Caslon", "Times New Roman", serif;
    font-size: 20px;
}
</style>

