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
.calendar-container {
  margin: 0 auto;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  height: 100%;
}

.calendar {
  margin: 0 auto;
}

/* 透明な円 */
.week .circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  border: 2px solid black;
  border-radius: 50%;
  width: 1.5em;
  /* 1.5emのサイズ */
  height: 1.5em;
  /* 1.5emのサイズ */
  visibility: hidden;
}

/* 日付クリック時のアクション */
.clicked-class .circle {
  visibility: visible;
}

/* 画像表示 */
.memory-img {
  width: 100%;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-area {
  position: relative;
}

.img-area::after {
  display: block;
  content: '';
  z-index: 3;
  border: 3px solid white;
  position: absolute;
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  top: 10px;
  left: 10px;
}

.img-area img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  max-height: 100%;

}

.img-gallery {
  opacity: 0;
  animation: fadein 1s ease-out forwards;
  width: auto;
}

@keyframes fadein {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

/* メディアクエリ - スマートフォン向け */
@media screen and (max-width: 767px) {
  .calendar {
    width: 100%;
    /* 幅を80%に調整 */
  }

  .img-area img {
    width: 250px;
    /* スマホの場合の幅は300pxに変更 */
    height: 250px;
    /* スマホの場合の高さは300pxに変更 */
  }
}

/* メディアクエリ - タブレット向け */
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .calendar {
    width: 80%;
    /* 幅を60%に調整 */
  }

  .img-area img {
    width: 400px;
    height: 400px;
  }
}

/* メディアクエリ - デスクトップ向け */
@media screen and (min-width: 1025px) {
  .calendar {
    width: 80%;
    /* 幅を50%に調整 */
  }

  .img-area img {
    width: 400px;
    height: 400px;
  }
}
</style>