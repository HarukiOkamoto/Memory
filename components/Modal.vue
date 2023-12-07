<template>
    <div class="modalContainer" @click.self="close">
        <div class="modalBody">
            <div class="modalContent">
                <div class="message">
                    <h3>りお へ</h3>
                    <hr>
                    <p>もう1年半も一緒にいるよね。</p>
                    <hr>
                    <p>付き合った頃から日毎夜毎に可愛くなっていると感じます。</p>
                    <hr>
                    <p>りおはきっとそれは自分の為っていうけれど、</p>
                    <hr>
                    <p>俺が面食いだったりするところが多少プレッシャーに</p>
                    <hr>
                    <p>なっているような気がしています。苦笑</p>
                    <hr>
                    <p>もちろんりおが粒粒辛苦して、りおなりの</p>
                    <hr>
                    <p>「かわいい」を見出しているのだと思います。</p>
                    <hr>
                    <p>でも、俺のいう「かわいい」は外面の</p>
                    <hr>
                    <p>ことだけではないですよ。笑</p>
                    <hr>
                    <p>りおは俺にとっていつまでもお姫様だし、</p>
                    <hr>
                    <p>お姫様の隣に立てるよう日々努力したいと思えます。</p>
                    <hr>
                    <p>それは外見のことだけでなくて、「人として」です。</p>
                    <hr>
                    <p>りおは自分のことを「大したことない」とよく仰ってますが、</p>
                    <hr>
                    <p>あなたなりの「努力」という概念に</p>
                    <hr>
                    <p>向き合う姿勢はとても魅力的です。</p>
                    <hr>
                    <p>もちろん外見も可愛いけれど、俺のいう「かわいい」は</p>
                    <hr>
                    <p>人としての魅力も感じての「かわいい」なんです。</p>
                    <hr>
                    <p>伝わるといいな〜。</p>
                    <hr>
                    <p>しっかりプレゼント用意したので、読み終わったら教えてください。</p>
                    <hr>
                    <div class="ps">
                        <p>ps. 来年はりおからのサプライズも楽しみにしてますね＾＾(気にしないでね笑)</p>
                    </div>
                </div>
                <div class="close-button">
                    <button @click="$emit('close')"><img src="@/assets/close.svg" alt=""></button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['close'])

const close = () => {
    emit('close');
}

</script>

<style>
.message {
    text-align: left;
    margin: 0;
    overflow-y: auto;
    /* モーダルをスクロール可能にする */
    max-height: 60vh;
    /* モーダルの最大高さを設定する */
}

.message p {
    margin: 4px;
    font-family: 'Zen Kurenaido';
}

.message h3 {
    margin: 10px;
    font-family: 'Zen Kurenaido';
}

.close-button {
    text-align: center;
}

.modalContainer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadeIn 0.3s ease-in-out;
    z-index: 9999;
}

.modalBody {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    animation: slideIn 0.3s ease-in-out;
    width: 90%;
    /* スマホサイズに対応するために幅を変更 */
    max-width: 600px;
    /* 最大幅を設定 */
}

.ps {
    font-size: 0.6em;
    /* 本文より小さくするためにフォントサイズを0.8emに設定 */
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes slideIn {
    from {
        transform: translateY(-20px);
    }

    to {
        transform: translateY(0);
    }
}

@media screen and (max-width: 767px) {
    .modalBody {
        width: 100%;
        /* スマホサイズに対応するために幅を100%に変更 */
        padding: 10px;
        /* スマホサイズに対応するためにパディングを小さくする */
    }

    .message p {
        font-size: 13px;
    }

    .ps {
        font-size: 8px;
    }
}
</style>