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
  padding: 10px;
}

.month h2 {
  margin: 0;
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
}

/* 子要素 */
.calendar tr {
  display: table;
  margin: 0 auto;
}

/* 孫 */
.week-one td {
  padding-left: 10px;
  padding-right: 10px;
}

.week-two td {
  padding-left: 13px;
  padding-right: 13px;
}

.week-three td {
  padding-left: 13px;
  padding-right: 13px;
}

.week-four td {
  padding-left: 10px;
  padding-right: 9.5px;
}
</style>