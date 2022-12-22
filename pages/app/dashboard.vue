<script setup lang="ts">
import { GetDashboardInfoDocument } from '~~/.nuxt/gql/directus';

definePageMeta({
    middleware: 'auth-guard'
})
setPageLayout("admin")
let userMail = useAuth().user?.email
let data = await GqlGetDashboardInfo({ mail: userMail! });
let count = 0;

data.colors.forEach(e => count += e.colors_func?.count!)
</script>

<template>
    <div class="flex-col m-auto text-center">
    <p>Public Palettes: {{ data.publicPalettes[0].count?.id }}</p>
    <p>My Palettes: {{ data.userPalettes[0].count?.id }}</p>
    <p>Colors: {{ count }}</p>
</div>
</template>
