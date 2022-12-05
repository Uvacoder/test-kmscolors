<script lang="ts">
    import { ClipboardDocumentIcon } from "@heroicons/vue/24/outline";
    import {useColorCopied} from "~/composables/useColorCopied";

    type ColorPalette = {
        colors: Array,
        name: string,
    }
    //mockdata - fetch real colors later
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
                useColorCopied().toggle();

                console.log(useColorCopied());
            }
        }
    }
</script>

<template>
    <div class="colorPaletteCard__wrapper">
        <div class="colorPaletteCard__color__wrapper">
            <div v-for="color in colorPalette.colors"
                 class="colorPaletteCard__color__item"
                 v-bind:data-color="color"
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