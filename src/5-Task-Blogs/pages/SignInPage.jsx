import { useNavigate } from "react-router";
import InputDiv from "../../components/InputDiv";
import { useContext } from "react";
import { PostContext } from "../../components/context/PostContext";

const SignInPage = () => {

    const navigate = useNavigate();
    const {setPasswordVal} = useContext(PostContext)

    function handleSubmit(e) {
        e.preventDefault()
        const {nameInput , password} = e.target;
        
        if (nameInput.value === "dhinakaran" || password === "1234") {
            navigate("/blogs");
            setPasswordVal("1234")
        }else{
            alert("give valid input & name")
            setPasswordVal(null)  
        }
        
    }
  return (
    <div className="w-screen flex flex-col h-screen">
      <form className="m-auto p-10 w-5xl border dark:border-white/10 rounded-2xl shadow space-y-4" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold text-center text-yellow-400">
          Sign In
        </h2>
        <InputDiv label={"User Name"} inputId={"nameInput"} />
        <InputDiv label={"Password"} inputId={"password"} inputType="password"/>
        <button
          type="submit"
          className={
            "font-semibold text-black hover:text-white cursor-pointer transition-all duration-300 flex space-x-1 items-center px-3 py-2 bg-yellow-brand rounded"
          }>Submit</button>
      </form>
    </div>
  );
};

export default SignInPage;