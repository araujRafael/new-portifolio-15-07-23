import { TextareaHTMLAttributes } from "react"

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {

}

export const TextArea: React.FC<TextAreaProps> = ({ title, className, ...rest }) => {
  return <div className="flex flex-col gap-1">
    <label className="text-cyan-500" >
      {title}
    </label>
    <textarea
      className={`
        min-w-full p-2 rounded-md bg-black text-white
        border border-spacing-5 border-cyan-500
        ${className}
      `}
      {...rest}
    />
  </div>
}