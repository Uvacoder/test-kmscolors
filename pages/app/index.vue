<script>
definePageMeta({
    middleware: 'auth-guard'
})</script>
<template>
    <div>
        <h1 class="text-xl text-center">Quick Acess</h1>
        <div class="flex justify-evenly flex-col">
            <NuxtLink to="/app/dashboard">Dashboard</NuxtLink>
            <NuxtLink to="/">Landing Page</NuxtLink>
        </div>
        <NuxtChild></NuxtChild>
    </div>
</template>