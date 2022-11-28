
<template>
  <div>
    <NuxtLayout>
      <ClientOnly>
        <LoadingScreen v-if="auth.attemptingRestore.value"></LoadingScreen>
      </ClientOnly>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const auth = useAuth();
if (process.client) {
  auth.tryContinueSession()
}
</script>