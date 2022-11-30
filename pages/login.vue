<script setup lang="ts">

const auth = useAuth();
const user = {
    email: "",
    password: "",
}

if(auth.isLoggedIn){
    navigateTo("/")
}

</script>
<template>
    <div class="signup min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class="bg-white px-6 pt-8 pb-2 rounded shadow-md text-black w-full">
                <h1 class="mb-8 text-3xl text-center">Log in</h1>
                <form>
                    <input v-model="user.email" autocomplete="email" type="email"
                        class="block border border-grey-light w-full p-3 rounded mb-4" name="email"
                        placeholder="Email" />

                    <input v-model="user.password" autocomplete="current-password" type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4" name="password"
                        placeholder="Password" />
                </form>
                <p class="text-xs text-center text-red-400 mb-4" v-if="auth.loginHasFailed">Wrong credentials! Try again.</p>
                <button @click="auth.sendLoginRequest(user.email,user.password)" type="submit"
                    class="btn-grad w-full text-center py-4 mb-2 rounded bg-green text-black focus:outline-none">Send it.</button>
            
            </div>
            
            <div class="text-grey-dark mt-6">
                Need an account?
                <NuxtLink class="no-underline border-b border-blue text-blue" to="/signup">
                    Sign up!
                </NuxtLink>
            </div>
        </div>
    </div>
</template>