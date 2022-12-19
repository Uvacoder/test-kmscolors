<script lang="ts">
import { ColorType } from '~~/composables/useColors';

type ColorPalette = {
    colors: ColorType[] | undefined,
    name: string,
}

let colorPalette: ColorPalette = {
    colors: undefined,
    name: 'Halloween Breeze'
}

export default {
    props: {
        colors: {
            type: Array,
            default: ["#FFF"],
        },
        title: {
            type: String,
            default: "My Palette",
        }
    }
}

</script>

<template>
    <div class="colorPaletteCard__wrapper">
        <div class="colorPaletteCard__color__wrapper">
            <div v-for="color in colors" class="colorPaletteCard__color__item" :data-color="color"
                v-bind:style="{ background: color as string }">
                <span class="colorPaletteCard__color__item__name">
                    {{ color }}
                    <img src="./assets/icons/icon-copy.svg">
                </span>
            </div>
        </div>
        <div class="colorPaletteCard__palette__name">
            {{ title }}
        </div>
    </div>
</template>