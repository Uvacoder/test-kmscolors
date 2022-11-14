<script lang="ts">

    const colors = ['green', 'red', 'blue'];
    let colorsClasses = [];

    for (let i = 0; i < colors.length - 1; i++) {
        colorsClasses[i] = "colorPaletteCard__" + colors[i];
    }

    export default {
        props: {
            colors: {
                type: Array,
                default: colors,
            }
        }
    }
</script>

<template>
    <div class="colorPalette__wrapper">
        <div v-for="color in colors">
            <div class="colorPaletteCard__{{ color }}">Hi {{color}}</div>
        </div>
    </div>
</template>