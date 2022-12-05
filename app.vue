
<template>
  <div>
    <NuxtLayout>
      <ClientOnly>
        <LoadingScreen text="We are trying to restore your session, hang in there!"
          v-if="auth.attemptingRestore.value" />
      </ClientOnly>
      <NuxtLoadingIndicator />
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">

const auth = useAuth();
if (process.client) {
  auth.tryContinueSession()
}

useHead({
  titleTemplate: (titleChunk) => {
    const titleBase = 'Admin One Vue 3 Tailwind'
    
    return titleChunk ? `${titleChunk} - ${titleBase}` : titleBase
  }
})
</script>