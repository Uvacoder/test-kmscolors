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
        <section class="py-20 css-selector">
            <div class="flex flex-col px-8 mx-auto space-y-4 max-w-7xl xl:px-12">
                <div class="relative">
                    <ClientOnly class="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl">
                        <p class="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl" v-if="auth.isLoggedIn">
                            Hi, {{ nameLabel() }}</p>
                        <p class="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl"
                            v-if="!auth.isLoggedIn">Level Up Your Colors</p>
                        <template #fallback>
                            <p class="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl">Level Up Your
                                Colors</p>
                        </template>
                    </ClientOnly>
                    <p class="w-full py-4 mx-auto -mt-2 text-lg text-center text-gray-700 intro sm:max-w-3xl">Collect,
                        manage and find colors for your projects.</p>
                </div>
                <div class="relative pb-12">
                    <div class="flex gap-8 flex-row justify-center">
                        <NavButton class="justify-self-center" v-if="!auth.isLoggedIn" color="green" label="Login"
                            route="/login">
                        </NavButton>
                        <NavButton v-if="!auth.isLoggedIn" label="Signup" route="/signup"></NavButton>
                        <NavButton v-if="auth.isLoggedIn" label="Dashboard" route="/app/dashboard"></NavButton>
                    </div>
                </div>
                <div class="bg-white rounded-xl p-8 flex flex-col mb-8 animated fadeIn sm:flex-row">
                    <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
                        <img class="rounded-lg shadow-xl"
                            src="https://cdn.devdojo.com/images/december2020/dashboard-011.png" alt="">
                    </div>
                    <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
                        <p class="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">
                            Drag-n-drop design</p>
                        <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">Design Made Easy</h3>
                        <p class="mt-5 text-lg text-gray-700 text md:text-left">Crafting your user experience has never
                            been easier, with our intuitive drag'n drop interface you will be creating beatiful designs
                            in no time.</p>
                    </div>
                </div>
                <div class="p-8  flex flex-col mb-8 animated fadeIn sm:flex-row">
                    <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12">
                        <img class="rounded-lg shadow-xl"
                            src="https://cdn.devdojo.com/images/december2020/dashboard-04.png" alt="">
                    </div>
                    <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16">
                        <p class="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">know your
                            data</p>
                        <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">Optimized For Conversions</h3>
                        <p class="mt-5 text-lg text-gray-700 text md:text-left">Backed by data, these templates have
                            been crafted for ultimate optimization. Now, converting your visitors into customers is
                            easier than ever before.</p>
                    </div>
                </div>
                <div class="bg-white rounded-xl p-8  flex flex-col mb-8 animated fadeIn sm:flex-row">
                    <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
                        <img class="rounded-lg shadow-xl"
                            src="https://cdn.devdojo.com/images/december2020/dashboard-03.png" alt="">
                    </div>
                    <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
                        <p class="mb-2 text-sm font-semibold leading-none text-left text-indigo-600 uppercase">Easy to
                            customize</p>
                        <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">Make It Your Own</h3>
                        <p class="mt-5 text-lg text-gray-700 text md:text-left">All templates and components are fully
                            customizable. You can use these templates to tell your personal story and convey your
                            message.</p>
                    </div>
                </div>

            </div>
        </section>
</template> 

<style>
.css-selector {
    background: linear-gradient(36deg, #68ff3d, #f2ff3f, #ffa733, #ff4242);
    background-size: 800% 800%;

    -webkit-animation: AnimationName 46s ease infinite;
    -moz-animation: AnimationName 46s ease infinite;
    -o-animation: AnimationName 46s ease infinite;
    animation: AnimationName 46s ease infinite;
}

@-webkit-keyframes AnimationName {
    0% {
        background-position: 72% 0%
    }

    50% {
        background-position: 29% 100%
    }

    100% {
        background-position: 72% 0%
    }
}

@-moz-keyframes AnimationName {
    0% {
        background-position: 72% 0%
    }

    50% {
        background-position: 29% 100%
    }

    100% {
        background-position: 72% 0%
    }
}

@-o-keyframes AnimationName {
    0% {
        background-position: 72% 0%
    }

    50% {
        background-position: 29% 100%
    }

    100% {
        background-position: 72% 0%
    }
}

@keyframes AnimationName {
    0% {
        background-position: 72% 0%
    }

    50% {
        background-position: 29% 100%
    }

    100% {
        background-position: 72% 0%
    }
}
</style>
