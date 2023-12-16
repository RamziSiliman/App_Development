const Input = ({label, inputType, placeholder, setter, value}) => {
    return (
        <div className="my-3">
            <label className="my-3">{label}</label><br />
            <input type={inputType} placeholder={placeholder} className=" w-100 px-4 py-1 bg-none hair-line py-2 outline rounded" value={value} onChange={(e)=>setter(e.target.value)}/>
        </div>
    )
}
export default Input