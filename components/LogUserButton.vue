<script setup lang="ts">
const authState = useAuth();

const logAuth = () => {
    console.log(authState.isLoggedIn, authState.user);
}
</script>

<template>
    <button
        class="p-8 g-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 border border-gray-500 hover:border-transparent rounded"
        @click="logAuth()">Log User</button>
</template>