<script setup lang="ts">
definePageMeta({
    middleware: 'auth-guard'
})
setPageLayout("admin")

let palettes =  await useColors().getAll();
const getColorArray = (palette: typeof palettes[number]) => {
    return palette.colors.map(e => e.colors)
}
</script>

<template>
 <!-- Main -->
 <main class="max-w-full h-full flex relative overflow-y-hidden">
      <!-- Container -->
      <div class="h-full w-full m-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll">
        <!-- Container -->
        <ColorPaletteCard class="w-96 h-60 rounded-lg flex-shrink-0 flex-grow" v-for="palette in palettes" :title="palette?.title ?? 'Palette'" :colors="getColorArray(palette)"></ColorPaletteCard>
      </div>
    </main>
    
</template>