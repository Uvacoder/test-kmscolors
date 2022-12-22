<script setup lang="ts">
import { CheckCircleIcon, CheckIcon, ClipboardDocumentIcon } from "@heroicons/vue/24/outline";
import { valueFromAST } from "graphql";
import { GetColorsQuery } from "~~/.nuxt/gql/directus";

defineProps({
    colors: Array<string>,
    title: {
        type: String,
        default: "My Palette",
    },
    author: {
        type: String,
    }
})

const toClipboard = (color: string) => {
    navigator.clipboard.writeText(color)
    lastCopy.value = color;
    setTimeout(() => { lastCopy.value = "" }, 3000)
}

const lastCopy = useState<string>("lastcopy", () => "")

</script>

<template>
    <div class="colorPaletteCard__wrapper">
        <div class="colorPaletteCard__color__wrapper">
            <div v-for="color in colors" class="colorPaletteCard__color__item" :style="{ background: color }">
                <div class="colorPaletteCard__color__item__hex">
                    <span>
                        {{ color }}
                    </span>
                    <a @click="toClipboard(color)">
                        <CheckIcon v-if="lastCopy && lastCopy === color"
                            class="colorPaletteCard__color__item__hex__copy-icon text-green-500"></CheckIcon>
                        <ClipboardDocumentIcon v-else class="colorPaletteCard__color__item__hex__copy-icon" />
                    </a>
                </div>
            </div>
        </div>
        <div class="colorPaletteCard__palette__name">
            <span>
                {{ title ?? "My Palette" }}
            </span>
            <span v-if="author" class="text-gray-400 text-xs italic ml-2">by {{ author }}</span>
        </div>
    </div>
</template>