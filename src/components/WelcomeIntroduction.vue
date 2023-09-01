<template>
    <div class="max-w-4xl grid grid-cols-1 place-items-center m-auto gap-4 px-4 md:grid-cols-2 py-12">
        <div class="text-4xl font-bold content">
            <div class="text-6xl">HI, I AM</div>
            <div class="text-4xl sm:text-5xl py-4">JONAS VOLAND</div>
            <div class="text-xl font-light">Professional software engineering and part time music producer.</div>
        </div>
        <div>
            <img alt="Animate Picture of Jonas Voland with effects" src="../assets/volandOptimized.gif"
                class="aspect-[8/3] shadow-xl object-cover w-full" />
        </div>
    </div>
</template>
<style scoped>
.content {
    width: -webkit-fill-available;
}

.rainbow-text {
    background-image: linear-gradient(to left, rgb(252, 66, 252), rgb(102, 11, 167), rgb(57, 57, 253), green, rgb(187, 187, 19), orange, rgb(206, 11, 11));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: background-image .25s ease-in-out;
}
</style>