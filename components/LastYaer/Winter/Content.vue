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

onMounted(async () => {// 初回処理
    await preloadImages();
    setImgUrl();
});

//画像用のURL ref
const imageUrl = ref<string | null>(null);
//画像表示処理
const setImgUrl = async () => {
    try {
        // import.meta.urlは現在のファイルのURLを返す
        const url = new URL(`../../../assets/images/2022/Winter/${clickedDay.value}.jpg`, import.meta.url);
        //refに画像のURLを返す
        imageUrl.value = url.href;
    } catch (e) {
        console.error(e);
        imageUrl.value = '';
    }
};

//画像のプリロード
const totalImg = 24;

const preloadImages = async () => {
    const promises = [];

    for (let i = 0; i < totalImg; i++) {
        const img = new Image();
        // ファイルパスを正しく生成する
        const imgPath = `../../../assets/images/2022/Winter/day${i}.jpg`;
        img.src = new URL(imgPath, import.meta.url).href;
        promises.push(new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
        }));
    }

    try {
        await Promise.all(promises);
        console.log("Images preloaded successfully!");
    } catch (error) {
        console.error("Error preloading images:", error);
    }
};

//フェードイン処理
watch(() => imageUrl.value, () => {
    //画像が切り替わったときのCSSアニメーションをトリガ
    const imgElement = document.getElementById('myImg');
    console.log(imgElement)
    if (imgElement) {
        imgElement.classList.remove('img-gallery');
        void imgElement.offsetWidth;
        imgElement.classList.add('img-gallery');
    }
})

</script>

<template>
    <section class="calendar-container">
        <table class="calendar">
            <tr class="week">
                <td> </td>
                <td> </td>
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
                <td :class="{ 'clicked-class': isClicked('day4') }" @click="clickDay('day4')" id="current-img">
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
                <td :class="{ 'clicked-class': isClicked('day9') }" @click="clickDay('day9')" id="current-img">
                    <div class="circle"></div>
                    9
                </td>
                <td> </td>
                <td> </td>
            </tr>


            <tr class="week">
                <td :class="{ 'clicked-class': isClicked('day10') }" @click="clickDay('day10')">
                    <div class="circle"></div>
                    10
                </td>
                <td :class="{ 'clicked-class': isClicked('day11') }" @click="clickDay('day11')" id="current-img">
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
        </table>
    </section>

    <section class="memory-img">
        <div class="img-area">
            <img v-if="isClicked(clickedDay)" :src="imageUrl" class="img-gallery" id="myImg" alt=""
                onerror="this.onerror = null; this.src='';">
            <div class="winter-tree"></div>
        </div>
    </section>

    <div class="snow">●</div>
    <div class="snow snow2nd">●</div>
</template>

<style>
.snow {
    /*雪の色*/
    color: rgb(255, 250, 252);
    /*雪の大きさ*/
    font-size: 10px;
    /*初期位置*/
    position: fixed;
    top: -5%;
    /*雪を適当な幅で降らせる*/
    text-shadow:
        5vw -100px 2px,
        10vw -400px 3px,
        20vw -500px 4px,
        30vw -580px 1px,
        39vw -250px 2px,
        42vw -340px 5px,
        56vw -150px 2px,
        63vw -180px 0,
        78vw -220px 4px,
        86vw -320px 9px,
        94vw -170px 7px;
    /*雪アニメーション1*/
    animation: roll 5s linear infinite;
}

/*2つめの雪アニメーション*/
.snow2nd {
    animation: anim 8s linear infinite;
}

@keyframes roll {
    0% {
        transform: rotate(0deg);
    }

    90% {
        opacity: 1;
    }

    100% {
        transform: rotate(20deg);
        top: 100%;
        opacity: 0;
    }
}

@keyframes anim {
    100% {
        color: transparent;
        top: 150%;
    }
}
</style>


