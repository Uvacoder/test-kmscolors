<script setup lang="ts">
import { RectangleGroupIcon, PlusIcon, ArrowLeftOnRectangleIcon } from '@heroicons/vue/24/outline';

const auth = useAuth();
const getAvatarString = () => {
  if (auth.user?.first_name && auth.user.last_name) {
    return auth.user.first_name + "-" + auth.user.last_name
  } else {
    return auth.user?.email
  }
}
const tryLogout = useState<boolean>(() => false)
const handleLogout = async () => {
  tryLogout.value = true;
  await auth.sendLogoutRequest()
  tryLogout.value = false;
}
</script>
<template>
  <ClientOnly>
    <LoadingScreen v-if="tryLogout" text="Logging out..."></LoadingScreen>
    <div>

      <div class="h-screen w-full bg-white relative flex overflow-hidden">
        <!-- Sidebar -->
        <aside class="h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white">
          <!-- Profile -->

          <NuxtLink
            class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white"
            to="/app/dashboard"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20"
              fill="currentColor">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
            </svg></NuxtLink>


          <!-- Courses -->
          <NuxtLink to="/app/browse"
            class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white hover:duration-300 hover:ease-linear focus:bg-white">
            <RectangleGroupIcon class="w-8 h-8"></RectangleGroupIcon>
          </NuxtLink>

          <!-- Configuration -->
          <NuxtLink to="/app/new"
            class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
            <PlusIcon class="w-8 h-8"></PlusIcon>
          </NuxtLink>

          <!-- Configuration -->
          <div @click="handleLogout()"
            class="h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">
            <ArrowLeftOnRectangleIcon class="w-8 h-8"></ArrowLeftOnRectangleIcon>
          </div>

        </aside>



        <div class="w-full h-full flex flex-col justify-between">
          <!-- Header -->
          <header class="h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-gray-800">
            <!-- Informação -->
            <div class="flex flex-shrink-0 items-center space-x-4 text-white">

              <!-- Texto -->
              <div class="flex flex-col items-end ">
                <!-- Nome -->
                <div class="text-md font-medium ">{{ auth.user?.first_name }}, {{ auth.user?.last_name }}</div>
                <!-- Título -->
                <div class="text-sm font-regular">{{ auth.user?.title ?? auth.user?.email }}</div>
              </div>

              <!-- Foto -->
              <div class="h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400">
                <img class="rounded-full"
                  :src="auth.user?.avatar ?? `https://avatars.dicebear.com/api/initials/${getAvatarString()}.svg`"
                  alt="">
              </div>
            </div>
          </header>

          <!-- Main -->
          <main class="max-w-full h-full flex relative overflow-y-hidden">
            <NuxtPage />
          </main>
        </div>

      </div>
    </div>
  </ClientOnly>
</template>