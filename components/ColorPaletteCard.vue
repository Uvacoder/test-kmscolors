<script setup lang="ts">
import { ClipboardDocumentIcon } from "@heroicons/vue/24/outline";
import { useColorCopied } from "~/composables/useColorCopied";

defineProps({
    colors: Array<string>,
    title: {
        type: String,
        default: "My Palette",
    }
})

const copyHex = (color: string) => {
    console.log("JEÖ");
    navigator.clipboard.writeText(color);
    useColorCopied().toggle();

}
</script>

<template>
    <div class="colorPaletteCard__wrapper">
        <div class="colorPaletteCard__color__wrapper">
            <div v-for="color in colors" class="colorPaletteCard__color__item" v-bind:data-color="color"
                v-bind:style="{ background: color as string }">
                <a @click="(p) => copyHex(color)" class="colorPaletteCard__color__item__hex">
                    <span>
                        {{ color }}
                    </span>
                    <ClipboardDocumentIcon class="colorPaletteCard__color__item__hex__copy-icon" />
                </a>
            </div>
        </div>
        <div class="colorPaletteCard__palette__name">
            <span>
                {{ title }}
            </span>
        </div>
    </div>
</template>