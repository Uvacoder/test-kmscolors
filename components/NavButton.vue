
<script lang="ts">
export default {
    props: {
        label: {
            type: String,
            required: true,
        },
        subLabel: {
            type: String,
            required: true,
        },
        route: {
            type: String,
        },
        callback: {
            type: () => { },
            required: false
        }
    }
}
</script>

<template>
    <button class="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
        <NuxtLink v-if="callback === undefined" :to="route">
            <div class="absolute inset-0 w-3 bg-red-400 transition-all duration-[250ms] ease-out group-hover:w-full">
            </div>
            <span class="relative text-black group-hover:text-white">{{ label }}</span>
            {{ subLabel }}
        </NuxtLink>
        <div v-if="callback != undefined" @click="() => { callback }">
            <div class="absolute inset-0 w-3 bg-red-400 transition-all duration-[250ms] ease-out group-hover:w-full">
            </div>
            <span class="relative text-black group-hover:text-white">{{ label }}</span>
            {{ subLabel }}
        </div>
    </button>
</template>
