import {Todo} from "@/types/interfaces.ts";
import {Card, CardContent, CardTitle} from "@/components/ui/card.tsx";
import {Check, Trash2, Undo2} from "lucide-react";
import {apiClient} from "@/lib/api-client.ts";

export default function Todos({todos}: { todos: Todo[] }) {
    const handleDelete = async (id: string) => {
        await apiClient.deleteTodo(id)
    }

    const handleComplete = async (id: string) =>{
        await apiClient.taskComplete(id)
    }

    const handleUndo = async (id: string) =>{
        await apiClient.undoTask(id)
    }
    return (
        <div className="w-full space-y-6 lg:space-y-8">
            {todos.length > 0 ? todos.map(({_id, task, status}, index) => (
                <Card className="w-full" key={index}>
                    <CardContent className="flex items-center justify-between w-full">
                        <CardTitle className={`${status && "line-through"}`}>{task}</CardTitle>
                        <div className="flex items-center gap-4">
                            <button disabled={status} className="group" onClick={()=>handleComplete(_id)}>
                                <Check className="text-green-600 group-disabled:opacity-50"/>
                            </button>
                            <button disabled={!status} className="group" onClick={()=>handleUndo(_id)}>
                                <Undo2 className="text-amber-600 group-disabled:opacity-50"/>
                            </button>
                            <button className="group" onClick={() => handleDelete(_id)}>
                                <Trash2 className="text-red-600 group-disabled:opacity-50"/>
                            </button>
                        </div>
                    </CardContent>
                </Card>
            )) : <h2 className="text-xl text-center">Create a new Todo to get started!</h2>}
        </div>
    )
}