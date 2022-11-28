export default defineNuxtRouteMiddleware(async (to) => {
	let auth = useAuth();
	if (!auth.isLoggedIn) {
		auth.lastFailedNavigation.value = to.path
		navigateTo("/");
	}
});
