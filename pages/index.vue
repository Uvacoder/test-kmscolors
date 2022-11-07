<script setup lang="ts">
const users = await useUsers();
</script>

<template>
    <div>
        <h1 class="text-red-500">syeeeee</h1>
        <p>{{users.getUser('aa')}}</p>
        <Mycomponent></Mycomponent>
    </div>
</template>
    