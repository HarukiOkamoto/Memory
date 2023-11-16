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
            <tr class="week">
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


            <tr class="week">
                <td :class="{ 'clicked-class': isClicked('day10') }" @click="clickDay('day10')">
                    <div class="circle"></div>
                    10
                </td>
                <td :class="{ 'clicked-class': isClicked('day11') }" @click="clickDay('day11')">
                    <div class="circle"></div>
                    11
                </td>
                <td :class="{ 'clicked-class': isClicked('day12') }" @click="clickDay('day12')">
                    <div class="circle"></div>
                    12
                </td>
                <td :class="{ 'clicked-class': isClicked('day13') }" @click="clickDay('day13')">
                    <div class="circle"></div>
                    13
                </td>
                <td :class="{ 'clicked-class': isClicked('day14') }" @click="clickDay('day14')">
                    <div class="circle"></div>
                    14
                </td>
                <td :class="{ 'clicked-class': isClicked('day15') }" @click="clickDay('day15')">
                    <div class="circle"></div>
                    15
                </td>
                <td :class="{ 'clicked-class': isClicked('day16') }" @click="clickDay('day16')">
                    <div class="circle"></div>
                    16
                </td>
            </tr>

            <tr class="week">
                <td :class="{ 'clicked-class': isClicked('day17') }" @click="clickDay('day17')">
                    <div class="circle"></div>
                    17
                </td>
                <td :class="{ 'clicked-class': isClicked('day18') }" @click="clickDay('day18')">
                    <div class="circle"></div>
                    18
                </td>
                <td :class="{ 'clicked-class': isClicked('day19') }" @click="clickDay('day19')">
                    <div class="circle"></div>
                    19
                </td>
                <td :class="{ 'clicked-class': isClicked('day20') }" @click="clickDay('day20')">
                    <div class="circle"></div>
                    20
                </td>
                <td :class="{ 'clicked-class': isClicked('day21') }" @click="clickDay('day21')">
                    <div class="circle"></div>
                    21
                </td>
                <td :class="{ 'clicked-class': isClicked('day22') }" @click="clickDay('day22')">
                    <div class="circle"></div>
                    22
                </td>
                <td :class="{ 'clicked-class': isClicked('day23') }" @click="clickDay('day23')">
                    <div class="circle"></div>
                    23
                </td>
            </tr>

            <tr class="week">
                <td :class="{ 'clicked-class': isClicked('day24') }" @click="clickDay('day24')">
                    <div class="circle"></div>
                    24
                </td>
                <td :class="{ 'clicked-class': isClicked('day25') }" @click="clickDay('day25')">
                    <div class="circle"></div>
                    25
                </td>
                <td :class="{ 'clicked-class': isClicked('day26') }" @click="clickDay('day26')">
                    <div class="circle"></div>
                    26
                </td>
                <td :class="{ 'clicked-class': isClicked('day27') }" @click="clickDay('day27')">
                    <div class="circle"></div>
                    27
                </td>
                <td :class="{ 'clicked-class': isClicked('day28') }" @click="clickDay('day28')">
                    <div class="circle"></div>
                    28
                </td>
                <td :class="{ 'clicked-class': isClicked('day29') }" @click="clickDay('day29')">
                    <div class="circle"></div>
                    29
                </td>
                <td :class="{ 'clicked-class': isClicked('day30') }" @click="clickDay('day30')">
                    <div class="circle"></div>
                    30
                </td>
                <td :class="{ 'clicked-class': isClicked('day31') }" @click="clickDay('day31')">
                    <div class="circle"></div>
                    31
                </td>
            </tr>
        </table>

        <img v-if="isClicked('day0')" src="@/assets/img/1-day0.jpg">


    </div>
</template>

<style>
/* 子要素 */
.calendar tr {
    display: table;
    margin: 0 auto;
}

/* 孫 */
.week {
    width: 50%;
    height: auto;
}

.week td {
    text-align: center;
    position: relative;
    cursor: pointer;
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

/* メディアクエリ - スマートフォン向け */
@media screen and (max-width: 767px) {
    .week {
        width: 80%;
        /* 幅を80%に調整 */
    }
}

/* メディアクエリ - タブレット向け */
@media screen and (min-width: 768px) and (max-width: 1024px) {
    .week {
        width: 60%;
        /* 幅を60%に調整 */
    }
}

/* メディアクエリ - デスクトップ向け */
@media screen and (min-width: 1025px) {
    .week {
        width: 40%;
        /* 幅を50%に調整 */
    }
}
</style>

