import fastify from "fastify";

const app = fastify();

app.get("/hello", () => {
  return "Hello";
});

app
  .listen({
    port: 4002,
  })
  .then(() => {
    console.log("tá rodando");
  })
  .catch((error) => {
    console.log(error);
  });
