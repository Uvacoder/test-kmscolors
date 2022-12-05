<script setup lang="ts">
definePageMeta({
    middleware: 'auth-guard'
})

let colorIndicator = useColorCopied();
</script>

<template>
    <div v-if="colorIndicator.isShown">hello</div>

    <ColorPaletteCard></ColorPaletteCard>
    <ColorPaletteCard></ColorPaletteCard>
    <ColorPaletteCard></ColorPaletteCard>
    <ColorPaletteCard></ColorPaletteCard>
    <ColorPaletteCard></ColorPaletteCard>
    <ColorPaletteCard></ColorPaletteCard>
    <ColorPaletteCard></ColorPaletteCard>
    <ColorPaletteCard></ColorPaletteCard>
    <ColorPaletteCard></ColorPaletteCard>
    <ColorPaletteCard></ColorPaletteCard>
</template>
