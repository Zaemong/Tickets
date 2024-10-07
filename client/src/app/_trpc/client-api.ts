import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "@/../../server/src/routes/root"

export const api = createTRPCReact<AppRouter>()