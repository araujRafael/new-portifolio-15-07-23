import { Input, InputElementProps, InputProps } from "@chakra-ui/react"
import { InputHTMLAttributes } from "react"

interface InputLabelProps extends InputProps {

}

export const InputLabel: React.FC<InputLabelProps> = ({ title, className, ...rest }) => {
  return <div className="flex flex-col gap-1">
    {title && <label className="t" >
      {title}
    </label>}
    <Input
      className={`
        ${className}
      `}
      {...rest}
    />
  </div>
}