<script setup lang="ts">
const user = await (await useUsers()).getUser('ab');
</script>

<template>
    <div>
        <h1 class="text-red-500">syeeeee</h1>
        <p>{{user}}</p>
        <Mycomponent></Mycomponent>
        <li><NuxtLink to="/login">Login</NuxtLink></li>
        <ColorPaletteCard />
    </div>
</template>
