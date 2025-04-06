import {Button} from "@/components/ui/button.tsx";
import {ModeToggle} from "@/components/mode-toggle.tsx";

export default function App() {
    return (
        <div className="flex items-center justify-around w-full min-h-screen">
            <ModeToggle/>
            <Button>Default</Button>
        </div>
    )
}