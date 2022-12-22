<script setup lang="ts">
import { GetColorsQuery } from '#gql';

definePageMeta({
  middleware: 'auth-guard',
  layout: 'app'
})

let { data, pending } = useAsyncData("browseData", () => GqlGetColors({}, { "Cache-Control": "private" }));
type Palette = GetColorsQuery['palettes'][number]
const getColorArray = (palette: Palette) => {
  return palette.colors.map((e: any) => e.colors)
}
const getAuthorString = (p: Palette) => {
  return `${p.user_created?.first_name} ${p.user_created?.last_name}`
}
</script>

<template>
  <LoadingScreen v-if="pending"></LoadingScreen>
  <div v-else
    class="h-full w-full p-4 flex flex-wrap items-start justify-start rounded-tl grid-flow-col auto-cols-max gap-4 overflow-y-scroll">
    <ColorPaletteCard class="w-96 rounded-lg flex-shrink-0 flex-grow" v-for="palette in data?.palettes"
      :title="palette?.title ?? 'Palette'" :colors="getColorArray(palette)" :author="getAuthorString(palette)">
    </ColorPaletteCard> 
  </div>

</template>