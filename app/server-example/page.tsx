import { getQueryClient } from "../get-query-client";
import { sessionQueryOptions } from "../_queries/session";
import { DehydratedState, HydrationBoundary } from "@tanstack/react-query";
import ServerExample from "./server-example";

export default async function Page({ dehydratedState }: { dehydratedState: DehydratedState }) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(sessionQueryOptions);

  return (
    <HydrationBoundary state={dehydratedState}>
      <ServerExample /> 
    </HydrationBoundary>
  )
}
