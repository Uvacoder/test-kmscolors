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
    <div>
        <NavButton label="Back" sub-label="to Home" route="/"></NavButton>
        <p>Login</p>
        <form>
            <div class="place-content-center w-6/6 lg:w-3/6 xl:w-2/6">
                <div>
                    <label for="username"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Username</label>
                    <input autocomplete="username" v-model="user.email" type="text" id="username"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="John" required>
                </div>
                <div>
                    <label for="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                    <input autocomplete="current-password" v-model="user.password" type="password" id="password"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="John" required>
                </div>
            </div>
        </form>
        <div class="flex flex-row m-2 gap-2">
            <button
                class="px-8 g-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 border border-green-500 hover:border-transparent rounded"
                @click="auth.sendLoginRequest(user.email, user.password)">
                Login
            </button>
            <button
                class="p-8 g-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 border border-red-500 hover:border-transparent rounded"
                @click="auth.sendLogoutRequest()">Logout</button>
            <LogUserButton></LogUserButton>
        </div>
    </div>

</template>