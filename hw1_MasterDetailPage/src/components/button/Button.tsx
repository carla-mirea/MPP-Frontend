import './Button.css'
import { ButtonProps } from '../../types/ButtonProps.types'

const Button = (props: ButtonProps) => {
  return (
    <button
        type = {props.type}
        className={
            'button' + ' ' + (props.className ? props.className : '')
        }
        onClick = {props.onClick}
    >
        {props.buttonMessage}
    </button>
  )
}

export default Button