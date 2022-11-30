<script setup lang="ts">
const auth = useAuth()

const nameLabel = () => {
    if (auth.user?.first_name) {
        return `${auth.user?.first_name}`;
    }
    return auth.user?.email;
}
</script>

<template>
    <div>
        <ClientOnly>
            <p v-if="auth.isLoggedIn">Hi, {{ nameLabel() }}</p>
            <p v-if="!auth.isLoggedIn">Welcome!</p>
            <template #fallback>
                <p>Welcome!</p>
            </template>
        </ClientOnly>
        <NavButton v-if="!auth.isLoggedIn" label="Login" subLabel="Page" route="/login"></NavButton>
        <NavButton v-if="!auth.isLoggedIn" label="Signup" subLabel="Page" route="/signup"></NavButton>
        <NavButton v-if="auth.isLoggedIn" label="Dashboard" subLabel="" route="/app/dashboard"></NavButton>
        <button @click="auth.sendLogoutRequest()" v-if="auth.isLoggedIn">Logout</button>
    </div>
</template> 