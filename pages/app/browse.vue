<script setup lang="ts">

definePageMeta({
  middleware: 'auth-guard'
})
setPageLayout("admin")

let data = await GqlGetColors()
let palettes = useColors().mapAll(data);

const getColorArray = (palette: typeof palettes[number]) => {
  return palette.colors.map(e => e.colors)
}
</script>

<template>
  <div
    class="h-full w-full p-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll">
    <ColorPaletteCard class="w-96 rounded-lg flex-shrink-0 flex-grow" v-for="palette in palettes"
      :title="palette?.title ?? 'Palette'" :colors="getColorArray(palette)"></ColorPaletteCard>
  </div>

</template>