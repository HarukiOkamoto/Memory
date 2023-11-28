<script setup lang="ts">

</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <footer>
    <div class="footer-area">
      <div class="footer">
        <h1>Merry Moments</h1>
        <h4>HOLIDAY</h4>
      </div>
    </div>
  </footer>
</template>

<style>
body {
  background-color: rgba(255, 255, 255);
  color: black;
  font-family: Arial;
  /* background-image: url("assets/images/backImg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; */
}

footer {
  width: 100%;
}

.footer-area {
  width: 100%;
  background-color: rgb(199, 199, 199);
  color: black;
  text-align: center;
  padding: 10px;
  font-family: GoudyOldStyleBold, 'EB Garamond', Garamond, "Big Caslon", "Times New Roman", serif;
  font-weight: bold;
}

.footer h1 {
  font-weight: bold;
  font-family: GoudyOldStyleBold, 'EB Garamond', Garamond, "Big Caslon", "Times New Roman", serif;
  text-align: center;
  font-size: 20px;
  color: rgb(255, 255, 255);
}

.footer h4 {
  font-family: GoudyOldStyleBold, 'EB Garamond', Garamond, "Big Caslon", "Times New Roman", serif;
  font-size: 10px;
  letter-spacing: 1.5px;
  text-align: center;
  font-weight: bold;
  color: rgb(255, 255, 255);
}

@media screen and (max-width: 767px) {
  .footer h1 {
    font-family: "TimesNewRomanPSMT", 'EB Garamond', Garamond, "Big Caslon", "Times New Roman", serif;
    font-weight: 500;
    letter-spacing: .5px;
  }

  .footer h4 {
    font-family: "TimesNewRomanPSMT", 'EB Garamond', Garamond, "Big Caslon", "Times New Roman", serif;
    letter-spacing: 1px;
    font-size: 12px;
  }
}
</style>