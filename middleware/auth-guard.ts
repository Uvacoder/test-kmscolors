export default defineNuxtRouteMiddleware((to, from) => {
	if (!useAuth().isLoggedIn) {
		return navigateTo("/login");
	}
});
