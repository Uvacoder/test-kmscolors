<script lang="ts">
    type ColorPalette = {
        colors: Array,
        name: string,
    }

    let colorPalette: ColorPalette = {
        colors: ['#FCAF2C', '#E26831', '#D63420', '#44220B', '#4E8926', '#829D36'],
        name: 'Halloween Breeze'
    }

    export default {
        props: {
            colorPalette: {
                type: Array,
                default: colorPalette,
            }
        }
    }

    function copy() {

    }

</script>

<template>
    <div class="colorPaletteCard__wrapper">
        <div class="colorPaletteCard__color__wrapper">
            <div v-for="color in colorPalette.colors"
                 class="colorPaletteCard__color__item"
                 :data-color="color"
                 v-bind:style="{background: color}"
            >
                <span class="colorPaletteCard__color__item__name">
                    {{ color }}
                    <img src="./assets/icons/icon-copy.svg">
                </span>
            </div>
        </div>
        <div class="colorPaletteCard__palette__name">
            {{ colorPalette.name }}
        </div>
    </div>
</template>