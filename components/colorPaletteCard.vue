<script lang="ts">
    import { ClipboardDocumentIcon } from "@heroicons/vue/24/outline";

    type ColorPalette = {
        colors: Array,
        name: string,
    }

    let colorPalette: ColorPalette = {
        colors: ["#" + Math.floor(Math.random()*16777216).toString(16), "#" + Math.floor(Math.random()*16777216).toString(16), "#" + Math.floor(Math.random()*16777216).toString(16), "#" + Math.floor(Math.random()*16777216).toString(16), "#" + Math.floor(Math.random()*16777216).toString(16), "#" + Math.floor(Math.random()*16777216).toString(16)],
        name: 'Halloween Breeze'
    }

    export default {
        components: { ClipboardDocumentIcon },
        props: {
            colorPalette: {
                type: Array,
                default: colorPalette,
            }
        },
        methods: {
            copyHex(color, event) {
                navigator.clipboard.writeText(color);
            }
        }
    }
</script>

<template>
    <div class="colorPaletteCard__wrapper">
        <div class="colorPaletteCard__color__wrapper">
            <div v-for="color in colorPalette.colors"
                 class="colorPaletteCard__color__item"
                 :data-color="color"
                 v-bind:style="{background: color}"
                 @click="copyHex(color, $event)"
            >
                <div class="colorPaletteCard__color__item__hex">
                    <span>
                        {{ color }}
                    </span>
                    <ClipboardDocumentIcon class="colorPaletteCard__color__item__hex__copy-icon"/>
                </div>
            </div>
        </div>
        <div class="colorPaletteCard__palette__name">
            <span>
                {{ colorPalette.name }}
            </span>
        </div>
    </div>
</template>