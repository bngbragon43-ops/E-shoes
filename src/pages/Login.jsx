
 import I1 from  '../assets/28.jpg';
 import { Link, useNavigate } from 'react-router-dom';
const inputs = [
    {
        id: 1,
        label: "Email:",
        type: "email",
        placeholder: "Enter your email",
    },
    {
        id: 2,
        label: "Password:",
        type: "password",
        placeholder: "*********",
    },
];


const Login = () => {
     const navigate=useNavigate();
    return (
        
        <main className="w-full min-h-screen flex items-center justify-center p-4 bg-center bg-no-repeat bg-cover bg-fixed" style={{backgroundImage:`url(${I1})`, backgroundSize:'cover', backgroundPosition:'center'}}>
            <div className="w-full max-w-[420px] m-5">
                <div className="p-8  rounded-[16px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
                    
                    <h1 className="text-2xl font-semibold text-[#1f2933] mb-2 text-center font-[algerian]  ">
                        Welcome back
                    </h1>

                    <p className="text-lg text-[#7b8794] text-center mb-6">
                        Come and choose your shoes
                    </p>

                    <form className="flex flex-col gap-5">
                        
                        {inputs.map((input) => (
                            <div
                                className="flex flex-col gap-2"
                                key={input.id}
                            >
                                <label
                                    htmlFor={input.label}
                                    className="font-semibold text-sm text-[#3e4c59] uppercase font-averia pl-2"
                                >
                                    {input.label}
                                </label>

                                <input
                                    id={input.label}
                                    type={input.type}
                                    placeholder={input.placeholder}
                                    className="w-full h-[46px] px-4 text-lg text-[#1f2933] bg-[#f5f7fa] border border-[#ccc] rounded-xl outline-none focus:border-primary focus:bg-white focus:shadow-[0_0_0_3px_rgba(102,126,234,0.15)]"
                                />
                            </div>
                        ))}

                        <div className="flex justify-between items-center text-sm">
                            
                            <label className="flex items-center gap-2 text-[#616e7c] cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="cursor-pointer"
                                />
                                Remember me
                            </label>

                            <a
                                href="#"
                                className="text-[#616e7c] transition hover:text-[#667eea] hover:underline"
                            >
                                Forgot your password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="mt-2 w-full h-[48px] text-lg font-semibold text-white bg-gradient-to-r from-secondary to-primary rounded-xl border-0 cursor-pointer transition hover:scale-[1.02]"
                            onClick={()=>navigate("/home")}
                        >
                            Continue
                        </button>

                    </form>

                    <p className="mt-5 text-center text-[#616e7c]">
                        You don't have an account?{" "}
                        <Link
                            to="/register"
                            className="text-[#667eea] font-semibold hover:underline"
                        >
                            Sign up
                        </Link>
                    </p>

                </div>
            </div>
        </main>
    );
};

export default Login;