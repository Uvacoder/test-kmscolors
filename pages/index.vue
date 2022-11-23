<script setup lang="ts">
const auth = useAuth()

const nameLabel = () => {
    if (auth.user?.first_name && auth.user?.last_name) {
        return `${auth.user?.first_name} ${auth.user?.last_name}`;
    }
    return auth.isLoggedIn;
}
</script>

<template>
    <div>
        <ClientOnly>
            <p>Hi, {{ auth.user?.email}}</p>
            <template #fallback>
                <p>Welcome User!</p>
            </template>
        </ClientOnly>
        <NavButton label="Login" subLabel="Page" route="/login"></NavButton>
    </div>
</template>
        