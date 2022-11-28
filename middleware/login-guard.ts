export default defineNuxtRouteMiddleware(() => {
	let auth = useAuth();
	if (auth.isLoggedIn) {
		navigateTo("/app");
	}
});
