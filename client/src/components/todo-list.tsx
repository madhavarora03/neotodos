import {Todo} from "@/types/interfaces.ts";

export default function Todos({todos}: { todos: Todo[] }) {
    return (
        <div>
        {todos.length > 0 ? todos.map(({task, status}, index)=>(
            <div key={index}>{task}-{status ? "True" : "False"}</div>
        )):<h1 className="text-xl">Create a new Todo to get started!</h1>}
        </div>
    )
}