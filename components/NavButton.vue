
<script lang="ts">
export default {
    props: {
        label: {
            type: String,
            required: true,
        },
        subLabel: {
            type: String,
            required: false,
        },
        route: {
            type: String,
        },
        color: {
            type: String,
            required: false,
            default: "#000"
        }
    },
    methods: {
        click() {
        }
    }
}
</script>

<template>
    <button class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
        <NuxtLink v-if="route !== undefined" :to="route">
            <div :style="`background-color: ${color}`"
                class="absolute inset-0 w-3 transition-all duration-[250ms] ease-out group-hover:w-full">
            </div>
            <span class="relative text-black group-hover:text-white">{{ label }}</span>
            <span class="pl-1" v-if="subLabel">{{ subLabel }}</span>
        </NuxtLink>
        <div v-if="route === undefined" @click="click">
            <div class="absolute inset-0 w-3 bg-red-400 transition-all duration-[250ms] ease-out group-hover:w-full">
            </div>
            <span class="relative text-black group-hover:text-white">{{ label }}</span>
            {{ subLabel }}
        </div>
    </button>
</template>
