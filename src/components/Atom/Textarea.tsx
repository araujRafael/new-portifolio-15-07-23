import { TextareaProps, Textarea } from "@chakra-ui/react"
import { TextareaHTMLAttributes } from "react"

interface TextAreaProps extends TextareaProps {

}

export const TextArea: React.FC<TextAreaProps> = ({ title, className, ...rest }) => {
  return <div className="flex flex-col gap-1">
    <label className="" >
      {title}
    </label>
    <Textarea
      className={`
        
        ${className}
      `}
      {...rest}
    />
  </div>
}