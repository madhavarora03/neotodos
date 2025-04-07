import {Input} from "@/components/ui/input.tsx";
import {Loader2, Pencil} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import {useState} from "react";
import Header from "@/components/header.tsx";
import Todos from "@/components/todo-list.tsx";
import {apiClient} from "@/lib/api-client.ts";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import Footer from "@/components/footer.tsx";

export default function App() {
    const [input, setInput] = useState("")
    const {data, isLoading} = useQuery({queryKey: ['todos'], queryFn: () => apiClient.getTodos()})

    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: (id: string) => apiClient.createTodo(id),
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({queryKey: ['todos']})
            setInput("")
        },
    })

    return (
        <div className="flex flex-col items-center space-y-8 lg:space-y-12 max-w-7xl min-h-screen mx-auto p-5">
            <Header/>
            <div className="flex w-full items-center gap-2 lg:gap-4">
                <Input value={input} onChange={(e) => setInput(e.target.value)}/>
                <Button variant="noShadow" disabled={input.trim().length === 0} onClick={() => {
                    mutation.mutate(input)
                }}>
                    {mutation.isPending ? <Loader2 className="animate-spin"/> : <Pencil/>}
                </Button>
            </div>
            {isLoading ? <Loader2 className="animate-spin w-12 h-12"/> : <Todos todos={data ?? []}/>}
            <Footer/>
        </div>
    )
}