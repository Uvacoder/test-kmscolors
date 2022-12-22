<script setup lang="ts">
definePageMeta({
    middleware: 'auth-guard',
    layout: 'app'
})
let userMail = useAuth().user?.email
let { data, pending } = useAsyncData("dashboardData", () => GqlGetDashboardInfo({ mail: userMail! }));

const getCount = () => {
    let count = 0;
    data.value?.colors.forEach(e => count += e.colors_func?.count!)
    return count;
}
</script>

<template>
    <LoadingScreen v-if="pending"></LoadingScreen>
    <div v-else class="flex-col m-auto text-center">
        <p>Public Palettes: {{ data?.publicPalettes[0].count?.id }}</p>
        <p>My Palettes: {{ data?.userPalettes[0].count?.id }}</p>
        <p>Colors: {{ getCount() }}</p>
    </div>
</template>
