import { createServer } from "node:http";

const server = createServer((_, res) => {
	return res
		.setHeader("Content-Type", "application/json")
		.end(JSON.stringify({ message: "Hello World from AWS" }));
});

server.listen(8080, () => {
	console.log("Server is running at: http://localhost:8080");
});
