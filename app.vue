<script setup lang="ts">
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
body {
  background-color: #fff;
  color: black;
  font-family: Arial;
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

.N-link {
  text-decoration: none;
}

/* 矢印 */
.arrow {
  font-size: 20px;
}

/* 日付 */
/* 親要素 */
.calendar {
  width: 50%;
  margin: 0 auto;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  height: 100%;
}

/* 子要素 */
</style>1