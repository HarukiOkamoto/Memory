<script setup lang="ts">
// 日付に丸をつける処理
// デフォルトで丸がついている日
const clickedDay = ref("day4");
// 引数として渡されたdayが現在クリックされている要素か判定
// 一致していればtrueを返す
const isClicked = (day: string) => day === clickedDay.value;
// refにクリックされた日付を返す
const clickDay = (day: string) => {
    clickedDay.value = day;
};
</script>

<template>
    <div class="month">
        <p class="arrow">&lt;</p>
        <NuxtLink tag="div" class="N-link" v-bind:to="{ name: 'index' }">
            <h2>January</h2>
        </NuxtLink>
        <p class="arrow">&gt;</p>
    </div>

    <div class="calendar-container">
        <table class="calendar">
            <tr class="week-one">
                <td :class="{ 'clicked-class': isClicked('day0') }" @click="clickDay('day0')">
                    <div class="circle"></div>
                    0
                </td>
                <td :class="{ 'clicked-class': isClicked('day1') }" @click="clickDay('day1')">
                    <div class="circle"></div>
                    1
                </td>
                <td :class="{ 'clicked-class': isClicked('day2') }" @click="clickDay('day2')">
                    <div class="circle"></div>
                    2
                </td>
                <td :class="{ 'clicked-class': isClicked('day3') }" @click="clickDay('day3')">
                    <div class="circle"></div>
                    3
                </td>
                <td :class="{ 'clicked-class': isClicked('day4') }" @click="clickDay('day4')">
                    <div class="circle"></div>
                    4
                </td>
                <td :class="{ 'clicked-class': isClicked('day5') }" @click="clickDay('day5')">
                    <div class="circle"></div>
                    5
                </td>
                <td :class="{ 'clicked-class': isClicked('day6') }" @click="clickDay('day6')">
                    <div class="circle"></div>
                    6
                </td>
                <td :class="{ 'clicked-class': isClicked('day7') }" @click="clickDay('day7')">
                    <div class="circle"></div>
                    7
                </td>
                <td :class="{ 'clicked-class': isClicked('day8') }" @click="clickDay('day8')">
                    <div class="circle"></div>
                    8
                </td>
                <td :class="{ 'clicked-class': isClicked('day9') }" @click="clickDay('day9')">
                    <div class="circle"></div>
                    9
                </td>
            </tr>
        </table>
    </div>
</template>

<style>
/* 子要素 */
.calendar tr {
    display: table;
    margin: 0 auto;
}

/* 孫 */
.week-one {
    width: 50%;
    height: auto;
}

.week-one td {
    text-align: center;
    position: relative;
}

/* 透明な円 */
.week-one .circle {
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

/* メディアクエリ - スマートフォン向け */
@media screen and (max-width: 767px) {
    .week-one {
        width: 80%;
        /* 幅を80%に調整 */
    }
}

/* メディアクエリ - タブレット向け */
@media screen and (min-width: 768px) and (max-width: 1024px) {
    .week-one {
        width: 60%;
        /* 幅を60%に調整 */
    }
}

/* メディアクエリ - デスクトップ向け */
@media screen and (min-width: 1025px) {
    .week-one {
        width: 40%;
        /* 幅を50%に調整 */
    }
}
</style>

