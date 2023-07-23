import { InputHTMLAttributes } from "react"

interface InputLabelProps extends InputHTMLAttributes<HTMLInputElement> {

}

export const InputLabel: React.FC<InputLabelProps> = ({ title, className, ...rest }) => {
  return <div className="flex flex-col gap-1">
    {title && <label className="text-cyan-500" >
      {title}
    </label>}
    <input
      className={`
        min-w-full p-2 rounded-md bg-black text-white
        border border-spacing-5 border-cyan-500
        ${className}
      `}
      {...rest}
    />
  </div>
}