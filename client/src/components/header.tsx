import {ModeToggle} from "@/components/mode-toggle.tsx";

export default function Header() {
    return (
        <header className="flex w-full items-center justify-between">
            <h1 className="text-3xl font-bold">NeoTodos.</h1>
            <ModeToggle/>
        </header>
    )
}