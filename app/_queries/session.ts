import { queryOptions } from "@tanstack/react-query";

export const sessionQueryOptions = queryOptions({
    queryKey: ["session"],
    queryFn: async () => {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/auth/session");
        return response.json();
    }
});