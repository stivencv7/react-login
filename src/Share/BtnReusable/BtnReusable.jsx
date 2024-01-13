export const BtnReusable = ({className,text,click,type,disabled}) => {
  return (
    <button  className={className}  onClick={click} type={type} disabled={disabled}>{text}</button>
  )
}
