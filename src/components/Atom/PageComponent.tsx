import { HTMLAttributes, ReactNode } from "react"

interface PageComponentProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

export const PageComponent: React.FC<PageComponentProps> = (
    { children, className }
) => {
    return (
        <main className={`
            min-h-screen px-24
        ${className}
        `}>
            {children}
        </main>
    )
}