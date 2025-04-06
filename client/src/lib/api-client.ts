import axiosInstance from "@/lib/axios-instance.ts";
import {Todo} from "@/types/interfaces.ts";

type FetchOptions<T = unknown> = {
    method: "GET" | "POST" | "PUT" | "DELETE";
    body?: T;
    headers?: Record<string, string>;
};


class ApiClient{
    async getTodos(){
        return this.fetch<Todo[]>("/task",  {
            method: "GET"
        });
    }

    private async fetch<T, B = unknown>(
        endpoint: string,
        options: FetchOptions<B> = { method: "GET" }
    ): Promise<T> {
        const { method, body, headers = {} } = options;

        const response = await axiosInstance.request<T>({
            url: endpoint,
            method,
            data: body,
            headers: {
                "Content-Type":
                    body && typeof body === "object"
                        ? "application/json"
                        : headers["Content-Type"] ?? "",
                ...headers,
            },
        });

        return response.data;
    }
}

export const apiClient = new ApiClient()