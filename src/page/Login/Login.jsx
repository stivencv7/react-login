import { FormRegister } from "./FormRegister/FormRegister"
import { IconsComponent } from "./IconsComponent/IconsComponent"
import { InfoComponent } from "./InfoComponent/InfoComponent"
// bg-gradient-to-r from-[50%] py-[50px]  from-[#14181F] to-[30%]  to-[#E5D714]
export const Login = () => {
  
  


  return (
    <div className={`flex h-[100vh]    justify-center items-center  max-xl:flex-none max-sm:items-start  max-sm:h-[100vh] `}>

        <div className={`max-xl:hidden rounded-l-[30px] max-sm:w-[80%]  max-sm:rounded-none bg-white dark:shadow-left dark:bg-[#14181F] w-[45%] h-[90%]  flex flex-col items-center justify-center dark:rounded-br-[80px]  `}>
          
          <h1 className={`text-[#E5D714] text-[120px] text-center`}>VANK</h1>
          <p className="dark:text-white">Welcome to Vank;👋</p>
          <p className="dark:text-white">Join to the best plataform to save and your money</p>
        
        </div>

        <div className={`rounded-r-[30px] dark:max-xl:rounded-[0px]  max-sm:w-[100%]    max-sm:h-[90%]  max-sm:rounded-[0px]  bg-white dark:bg-[#E5D714] h-[90%] w-[45%] flex items-center justify-center flex-col gap-6 max-sm:pb-5   dark:rounded-tl-[80px]`}>
          <FormRegister />
          <IconsComponent/>
          <InfoComponent  />
        </div>
    </div>
  )
}
