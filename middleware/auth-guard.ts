export default defineNuxtRouteMiddleware( (to, from) => {
	let auth = useAuth();
	if (!auth.isLoggedIn) {
		auth.lastFailedNavigation.value = to.path;
		console.log(to.path);
		navigateTo("/");
		console.log("EE");
	}
});
