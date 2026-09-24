import React from 'react';
import { Link } from 'react-router-dom';
import I1 from '../assets/28.jpg'
const Input=[
   
    {id:1,label:"Name:",type:"text",placeholder:"Enter your name"},
     {id:2,label:"Email:",type:"email",placeholder:"Enter your email"},
    {id:3,label:"Password:",type:"Password",placeholder:"********"},
    {id:4,label:"Confirm-Password:",type:"password",placeholder:"*******"},
]
const Register = () => {
    return (
        //   body
        <main  className="w-full min-h-screen flex items-center justify-center p-4 bg-center bg-no-repeat bg-cover bg-fixed" style={{backgroundImage:`url(${I1})`, backgroundSize:'cover', backgroundPosition:'center'}}>
        

            {/* container */}
            <div className="w-full max-w-[420px] m-5 ">

                {/* card */}
                <div className="p-8 rounded-2xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.25)] ">
                     <h1 className='text-2xl text-center p-2 uppercase font-semibold font-[algerian] '> Sign Up </h1>
                     <p className='text-lg text-center font-averia font-extralight text-[#7b8794] pb-2 '>Create an account an start buy</p>


                     <form action="" className='flex flex-col gap-5'>
                          {Input.map((input)=>(
                            <div className="flex flex-col" key={input.id}>
                                <label htmlFor="" className='pl-2 font-averia'>
                                    {input.label}
                                </label>
                                <input type={input.type} placeholder={input.placeholder} className="w-full h-[46px] px-4 text-lg text-[#1f2933] bg-[#f5f7fa] border border-[#ccc] rounded-xl outline-none focus:border-primary focus:bg-white focus:shadow-[0_0_0_3px_rgba(102,126,234,0.15)]  font-averia" />
                            </div>
                          ))}
                     </form>

                     <button className=' mt-4 w-full h-[48px] text-lg font-semibold text-white bg-gradient-to-r from-secondary to-primary rounded-xl border-0 cursor-pointer transition hover:scale-[1.02]  '> Create your account</button>

                     <p className='text-center mt-5 text-[#7b8794] '> Already have an account? {""} <Link to="/login" className='text-primary text-lg font-averia hover:underline '>Login Here </Link></p>
                </div>
            </div>
            
        </main>
    );
};

export default Register;