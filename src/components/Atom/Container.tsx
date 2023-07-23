import { HTMLAttributes, ReactNode } from "react"

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => {
    return <div className={`max-w-[980px] m-auto ${className}`}>
        {children}
    </div>
}