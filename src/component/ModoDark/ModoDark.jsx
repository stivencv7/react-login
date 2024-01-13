import { IoMdSunny } from "react-icons/io";
import { BsFillMoonFill } from "react-icons/bs";

export const ModoDark = ({checked,change,click,dark}) => {

    

    return (
        <div className="flex items-center absolute right-10 top-2">

            <label className="cursor-pointer p-2">
                <div className={`w-14 h-4 bg-gray-300 rounded-full  transition duration-300 ease-in-out flex items-center`}>

                    <div className={`w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center transform ${dark ? 'translate-x-8' : 'translate-x-0'} transition duration-300 ease-in-out`}
                        onClick={click}
                    >
                        {dark ? <BsFillMoonFill className='text-black' /> : <IoMdSunny className='text-black' />}
                    </div>
                </div>
                <input type="checkbox" className="hidden" checked={checked} onChange={change}  />
            </label>
        </div>
    )
}
