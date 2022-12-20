<script setup lang="ts">
import { Create_Directus_Users_Input } from '#gql';
import { Ref } from 'nuxt/dist/app/compat/vue-demi';

let user = {
    last_name: "",
    first_name: "",
    email: "",
    password: "",
    role: "facecb07-7ad8-42c0-9455-eb930c3aa6af",
} satisfies Create_Directus_Users_Input;

let repeatPass: string;
const validateSucess = () => {
    return user.first_name && user.last_name && validateEmail(user.email) && user.password && user.password === repeatPass
}
const validateEmail = (email: string) => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
type signUpStatus = "initial" | "failed" | "sendt";
const signupStatus: Ref<signUpStatus> = useState<signUpStatus>("sus", () => "initial");
const updateStatus = (status: signUpStatus) => {
    signupStatus.value = status
    setTimeout(() => {
        signupStatus.value = "initial"
    }, 5000)
}
const sendUserCreateRequest = async () => {
    if (validateSucess()) {
        updateStatus("sendt")
        try {
            let res = await GqlCreateUser({ userData: user })
        } catch (error) {
            navigateTo("/login")
        } 
    } else {
        updateStatus("failed")
    }
}
</script>
<template>
    <div class="signup min-h-screen flex flex-col">
        <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class="bg-white px-6 pt-8 pb-2 rounded shadow-md text-black w-full">
                <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                <div class="flex">
                    <input v-model="user.first_name" autocomplete="name" type="text"
                        class="block border border-grey-light w-1/2 p-3 mr-1 rounded mb-4" name="firstname"
                        placeholder="First Name" />
                    <input v-model="user.last_name" type="text" autocomplete="family-name"
                        class="block border border-grey-light w-1/2 p-3 ml-1 rounded mb-4" name="lastname"
                        placeholder="Last Name" />
                </div>
                <form>
                    <input v-model="user.email" autocomplete="email" type="email"
                        class="block border border-grey-light w-full p-3 rounded mb-4" name="email"
                        placeholder="Email" />

                    <input v-model="user.password" autocomplete="new-password" type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4" name="password"
                        placeholder="Password" />
                    <input v-model="repeatPass" autocomplete="new-password" type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4" name="confirm_password"
                        placeholder="Confirm Password" />
                </form>
                <button @click="sendUserCreateRequest()" type="submit"
                    class="btn-grad w-full text-center py-4 mb-2 rounded bg-green text-black focus:outline-none">Create
                    Account</button>
                <p class="text-xs text-center text-red-500" v-if="signupStatus == 'failed'">Something went wrong! Check
                    your inputs and try again!</p>
                <p class="text-xs text-center text-green-500" v-if="signupStatus == 'sendt'">Creation request sendt!
                    Redirecting to login</p>
            </div>

            <div class="text-grey-dark mt-6">
                Already have an account?
                <NuxtLink class="no-underline border-b border-blue text-blue" to="/login">
                    Log in
                </NuxtLink>
            </div>
        </div>
    </div>
</template>
<style>
.signup {
    background: linear-gradient(-45deg, #23d5ab, #23a6d5, #ee7752, #e73c7e);
    background-size: 400% 400%;
    animation: gradient 25s ease infinite;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

.btn-grad {
    background-image: linear-gradient(to right, #000428 0%, #004e92 51%, #000428 100%);
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    display: block;
}

.btn-grad:hover {
    background-position: right center;
    /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
}
</style>