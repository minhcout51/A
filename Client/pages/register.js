import { useState } from "react";
const Register = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
}

    const handleSubmit = (e) => {

    };
    return(
        <>
        <h1 className="jumbotron text-center bg-primary square"> Register</h1>
        <div className="container col-md-4 offset-md-4 pb-5">
            <form onSubmit={handleSubmit}>
                <input type="text" className="form-control mb-4 p-4 " value={name} onchange={(e)=>setName(e.target.value)} placeholder="Enter name" required/>
                <input type="email" className="form-control mb-4 p-4" value={email} onchange={(e)=>setEmail(e.target.value)} placeholder="Enter email"/>
                <input type="password" className="form-control mb-4 p-4" value={password} onchange={(e)=>setPassword(e.target.value)} placeholder="Enter passsword"/>            
            </form>
        </div>
        </>
    );

export default Register;