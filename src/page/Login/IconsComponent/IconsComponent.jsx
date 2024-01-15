import { SlSocialLinkedin } from "react-icons/sl";
import { CiInstagram } from "react-icons/ci";
import { LuFacebook } from "react-icons/lu";
import { LuTwitter } from "react-icons/lu";
import { ImPinterest2 } from "react-icons/im";
import { LinkResuable } from "../../../Share/LinkRusable/LinkResuable";

export const IconsComponent = () => {
  return (
    <div className="flex items-center justify-center gap-6 mt-14">

      <LinkResuable to={"/#"} text={ <SlSocialLinkedin className={`text-[18px] font-bold text-[#14181F]`} />}/>
      <LinkResuable to={"/#"} text={ <CiInstagram className={`text-[20px] font-bold text-[#14181F]`}/>}/>
      <LinkResuable to={"/#"} text={ <LuFacebook className={`text-[20px] font-bold text-[#14181F] `}/>}/> 
      <LinkResuable to={"/#"} text={ <LuTwitter className={`text-[20px] font-bold ttext-[#14181F] `}/>}/> 
      <LinkResuable to={"/#"} text={ <ImPinterest2 className={`text-[18px] font-bold text-[#14181F] `}/>}/> 
        
    </div>
  )
}
