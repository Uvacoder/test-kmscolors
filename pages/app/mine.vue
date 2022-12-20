<script setup lang="ts">
definePageMeta({
    middleware: 'auth-guard'
})
setPageLayout("admin")
</script>

<template>
    <h1>Create a new thing!</h1>
</template>