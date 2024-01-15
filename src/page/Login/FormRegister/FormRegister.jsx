import { useState } from "react"
import { BtnReusable } from "../../../Share/BtnReusable/BtnReusable"
import { InputReusable } from "../../../Share/InputReusable/InputReusable"
import { isNaN, useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import { BtnModeDark } from "../../../Share/BtnModeDark/BtnModeDark";
import { IoIosEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";


export const FormRegister = () => {


    
    const [visible, setVisible] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({})
    const [type, setType] = useState("password")

    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleChangeType = () => {
        if (type == "password") {
            setType("text")
        } else {
            setType("password")
        }
    }

    const formValide = async () => {
        let error = {};
        if (username.length <= 0 || /^\s+/.test(username)) {
            error.username = "obligatory field";
        }

        if (email.length <= 0) {
            error.email = "invaled email";

        } if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            error.email = "invalid email";
        }
        if (password.length < 4 || password.length > 8) {
            error.password = "entre 4 a 8 caracteres";
        }

        setErrors(error)
        return error;
    }



    const registerUser = async () => {

        let err = await formValide();

        if (Object.keys(err).length == 0) {
            try {
                let user = JSON.stringify({ username: username, email: email, password: password });
                localStorage.setItem('user', user)
                toast.success('Registered User')
                formatErrors();
                setVisible(true)

            } catch (error) {
                toast.error("error")
            }
        } else {

            toast.error('Correct the fields to continue')
        }

    }

    const login = async () => {
        try {
            let user = JSON.parse(localStorage.getItem('user'));
            console.log(user);
            if (user.email == email && user.password) {
                toast.success('Welcomo👋')
                formatErrors()
                formatData()
                setVisible(false)
            } else {
                toast.warning('Verifica los datos')
            };
        } catch (error) {
            toast.error('error')
        }

    }

    const formatErrors = () => {
        setErrors({})
    }

    const formatData = () => {
        setUsername('')
        setEmail('')
        setPassword('')
    }



    return (
        <div className="bg-[#E5D714] dark:bg-[#5a5151c0] flex flex-col justify-center max-xl:w-[90%]  max-sm:rounded-none  max-sm:w-[100%] w-[55%] h-[70%] max-sm:h-[100%]  max-xl:h-[80%] rounded-[20px] relative ">



            <div className=" w-full rounded-t-[20px]  text-white px-[20px] flex gap-10   max-xl:gap-6   items-center  absolute top-0 right-0 left-0">

                <BtnReusable className={`${visible ? "border-none" : 'border-b-4'}   text-[15px] dark:text-white border-solid dark:border-solid dark:border-[#E5D714] border-[black] text-black mt-2 pb-2`} text={"Sign Up"} click={() => setVisible(false)} />
                <BtnReusable className={`${visible ? 'border-b-4' : ''} text-[15px] dark:text-white   text-black border-[black] dark:border-[#E5D714] mt-2 pb-2`} text={"Sign In"} click={() => setVisible(true)} />
                <BtnModeDark className={'bg-transparent text-[#191E25] text-[22px] mt-2 max-xl:mt-0 ml-16'} />
            </div>

            <form className="shadow-black shadow-sm bg-white dark:bg-[#191E25] text-center flex flex-col px-10 max-sm:justify-center max-sm:rounded-none focus:text-white  gap-5 max-sm:gap-8  py-10  rounded-[20px]  w-full  absolute bottom-0 top-10  ">

                {visible ? <></> :

                    <InputReusable type={"text"} label={"Full Name"} name={"username"} change={handleChangeUsername} value={username}
                        required error={errors.username} />
                }


                <InputReusable type={"email"} label={"Email"} name={"email"} change={handleChangeEmail} value={email} required
                    error={errors.email && <p>{errors.email}</p>} />

                <div className="relative">
                    <InputReusable labelFor={"password"} id={"password"} type={type} label={"Password"} name={"password"} change={handleChangePassword} value={password} required
                        error={errors.password && <p>{errors.password}</p>} autComplete={'current-password'} />
                    {password
                        ?
                        <span className="absolute right-0 bottom-0  text-[20px] dark:text-[#E5D714] pb-2 " onClick={handleChangeType} >
                            {type == "password" ? <IoIosEye />
                                :
                                <FaEyeSlash />
                            }
                        </span>
                        :
                        <></>
                    }
                </div>


                <div className="bg-transparent mt-2">

                    {visible ?
                        <BtnReusable type={"button"} className={"bg-[#E5D714] w-full py-2 rounded-[4px]"} text={"Sign In"} click={login} />
                        :
                        <BtnReusable type={"button"} className={"bg-[#E5D714] w-full py-2 rounded-[4px]"} text={"Sign Up"} click={registerUser} disabled={!username || !email || !password} />
                    }

                </div>

                <a className="dark:text-white">I have an Account</a>
            </form>
        </div>
    )
}
