import {ReactNode} from "react";
import {ThemeProvider} from "@/components/theme-provider";

export default function Providers({children}: Readonly<{ children: ReactNode }>) {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            {children}
        </ThemeProvider>
    )
}
