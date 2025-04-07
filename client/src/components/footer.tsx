import {Github} from "lucide-react";

export default function Footer(){
    const year = new Date().getFullYear()
    return (
        <footer className="flex items-end w-full text-lg justify-center gap-2 flex-1">
            &copy; NeoTodos {year} | Madhav Arora |<a href="https://github.com/madhavarora03/neotodos" target="_blank"><Github/></a>
        </footer>
    )
}