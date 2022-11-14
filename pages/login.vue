<script setup lang="ts">
const user = {
    username: "",
    password: "",
}
const doSthWithInput = async () => {
    let service = await useUsers();
    console.log(await service.checkLogin(user.username, user.password))
}
</script>
<template>
    <div>
        <Button label="Back" sub-label="to Home" route="/" ></Button>
        <p>Login</p>
        <form>
            <div class="place-content-center w-6/6 lg:w-3/6 xl:w-2/6">
                <div>
                    <label for="username"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Username</label>
                    <input v-model="user.username" type="text" id="username"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="John" required>
                </div>
                <div>
                    <label for="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                    <input v-model="user.password" type="password" id="password"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="John" required>
                </div>
            </div>
        </form>
        <button @click="doSthWithInput()">Log</button>
    </div>

</template>