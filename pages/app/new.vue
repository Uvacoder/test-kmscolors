<script setup lang="ts">
definePageMeta({
    middleware: 'auth-guard'
})
setPageLayout("admin")

let colors = useState<string[]>("newcolors", () => [])
let color = useState<string>("newcolor")
let title = useState<string>("newtitle")

const onAdd = () => {
    colors.value.length < 10 ? colors.value.push(color.value) : {}
}
const onClear = () => {
    colors.value = [];
}
const onSave = () => {
    
}
</script>

<template>
    <div class="flex gap-12 m-auto">
        <div class="flex-col gap-12 m-auto">
            <div class="flex-row gap-2 m-8 h-12 align-middle">
                <label>Palette Name</label>
                <input v-model="title" class="block border border-grey-light w-full p-3 rounded mb-4" type="text" />
            </div>
            <div class="flex-row gap-2 m-8 h-12 align-middle">
                <label>Color</label>
                <input v-model="color" class="block border border-grey-light w-full p-3 rounded mb-4" type="text" />
            </div>
            <div class="flex w-auto gap-6 m-auto justify-center pt-2">
                <button
                    class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    @mousedown="onAdd()">Add</button>
                <button
                    class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    @click="onClear()">Clear</button>
                <button
                    class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    @click="onSave()">Save</button>
            </div>
            <div>

            </div>
        </div>
        <ColorPaletteCard :title="title" :colors="colors"></ColorPaletteCard>
    </div>
</template>