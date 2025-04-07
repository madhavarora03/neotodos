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

    async createTodo(task: string){
        return this.fetch<Todo>("/task", {
            method: "POST",
            body: {task}
        })
    }

    async taskComplete(id: string) {
        return this.fetch(`/task/${id}`, {
            method: "PUT"
        })
    }

    async undoTask(id: string){
        return this.fetch(`/task/undo/${id}`, {
            method: "PUT"
        })
    }

    async deleteTodo(id: string){
        return this.fetch<void>(`/task/${id}`, {
            method:"DELETE",
        })
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
                "Content-Type": "application/json",
                ...headers,
            },
        });

        return response.data;
    }
}

export const apiClient = new ApiClient()