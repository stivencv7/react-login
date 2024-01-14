export const InputReusable = ({ label, change, name, value, labelFor, id, type, required, blur, error }) => {
  return (
    <div className="flex flex-col  relative  ">
      <label className="text-start dark:text-white " htmlFor={labelFor}>{label}</label>
      <input className="border-b-2 border-[#E5D714] border-solid focus-visible:outline-none bg-transparent dark:text-white pr-10 focus:outline-none" type={type} onChange={change}
        id={id} name={name} value={value} onBlur={blur} required={required}
      />
      <div className="text-[red] absolute -bottom-5">
        {error}
      </div>
    </div>
  )
}
