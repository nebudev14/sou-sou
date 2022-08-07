import type { AppRouter } from "../server/router/app";
import { createReactQueryHooks } from "@trpc/react";

export const { useQuery, useMutation, ...trpc } = createReactQueryHooks<AppRouter>();