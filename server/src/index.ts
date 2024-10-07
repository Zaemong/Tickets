import { trpcServer } from "@hono/trpc-server"
import { Hono } from "hono"
import { cors } from "hono/cors"
import { appRouter } from "./routes/root"

const app = new Hono()

app.use(
  cors({
    origin: ["http://localhost:3000", "*"]
  })
)

app.use("trpc/*",
  trpcServer({
    router: appRouter
  })
)

export default {
  port: 4001,
  fetch: app.fetch
}
