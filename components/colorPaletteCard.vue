<script lang="ts">
import { ClipboardDocumentIcon } from "@heroicons/vue/24/outline";
import {useColorCopied} from "~/composables/useColorCopied";
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
        components: { ClipboardDocumentIcon },
        props: {
            colors: {
                type: Array,
                default: ["#FFF"],
            },
            title: {
                type: String,
                default: "My Palette",
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
            <div v-for="color in colors"
                 class="colorPaletteCard__color__item"
                 v-bind:data-color="color"
                 v-bind:style="{background: color as string}"
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
                {{ title }}
            </span>
        </div>
    </div>
</template>