<script>
export default {
    props: {
        text: {
            type: String,
            required: true,
        },
        loadingText: {
            type: String,
            required: false,
            default: "Loading..."
        },
    }
}
</script>
<script setup>
const colors = ["#D65F5F", "#FAF99F", "#A1F6B6", "#78D8D0", "#FFACC7", "#B2A4FF"]
const getColor = () => colors[Math.round(Math.random() * colors.length )]

</script>
<template>
    <div wire:loading :style="`background-color: ${getColor()}`"
        class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden opacity-75 flex flex-col items-center justify-center">
        <div class="loader ease-linear rounded-full border-4 border-t-4 border-white h-12 w-12 mb-4"></div>
        <h2 class="text-center text-black text-xl font-semibold">{{ loadingText }}</h2>
        <p class="w-1/3 text-center text-black">{{ text }}</p>
    </div>
</template>

<style>
.loader {
    border-top-color: #000;
    -webkit-animation: spinner 1.5s linear infinite;
    animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
    0% {
        -webkit-transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spinner {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>