import fastify from "fastify";

const server = fastify({ "logger" : true});

server.get("/loginUser", async (request, reply) => {
	return "pong\n";
});
server.get("/registerUser", async (request, reply) => {
	return "pong\n";
});
server.get("/checkSession", async (request, reply) => {
	return "pong\n";
});
server.get("/getPalettes", async (request, reply) => {
	return "pong\n";
});
server.get("/getUserPalettes", async (request, reply) => {
	return "pong\n";
});

server.listen({ port: 8080 }, (err, address) => {
	if (err) {
		console.error(err);
		process.exit(1);
	}
	console.log(`Server listening at ${address}`);
});
