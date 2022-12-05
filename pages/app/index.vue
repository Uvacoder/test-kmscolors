<script>
import ColorPaletteCard from "../../components/colorPaletteCard";
definePageMeta({
    middleware: 'auth-guard'
})
export default {
    components: {ColorPaletteCard}
}
</script>
<template>
    <div>
        <h1 class="text-xl text-center">Quick Acess</h1>
        <div class="flex justify-evenly flex-col">
            <NuxtLink to="/app/dashboard">Dashboard</NuxtLink>
            <NuxtLink to="/">Landing Page</NuxtLink>
        </div>
    </div>
</template>