import {Input} from "@/components/ui/input.tsx";
import {Loader2, Pencil} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import {useEffect, useState} from "react";
import Header from "@/components/header.tsx";
import {Todo} from "@/types/interfaces";
import Todos from "@/components/todo-list.tsx";
import {apiClient} from "@/lib/api-client.ts";

export default function App() {
    const [input, setInput] = useState("")
    const [loadingFetch, setLoadingFetch] = useState(true)
    const [loadingInput, setLoadingInput] = useState(false)
    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(() => {
        apiClient.getTodos()
            .then((payload) => {
                setTodos(payload ?? [])
            })
            .catch((err) => console.error(err))
            .finally(() => setLoadingFetch(false))
    }, [])

    const handleSubmit = async () => {
        setLoadingInput(true);
        try {
            console.log(input)
            await apiClient.createTodo(input);
        } catch (err) {
            console.error(err)
        } finally {
            setLoadingInput(false);
        }
    }

    return (
        <div className="flex flex-col items-center space-y-8 lg:space-y-12 max-w-7xl min-h-screen mx-auto p-5">
            <Header/>
            <div className="flex w-full items-center gap-2 lg:gap-4">
                <Input value={input} onChange={(e) => setInput(e.target.value)}/>
                <Button variant="noShadow" disabled={input.trim().length === 0 || loadingInput} onClick={handleSubmit}>
                    {loadingInput ? <Loader2 className="animate-spin"/> : <Pencil/>}
                </Button>
            </div>
            {loadingFetch ? <Loader2 className="animate-spin w-12 h-12"/> : <Todos todos={todos}/>}
        </div>
    )
}