import {useState} from 'react';
import '../style.css';

export default function Form() {

    const [info,setInfo] = useState({
        name:"",
        email:"",
        password:""
    });
    const {name,email,password} = info; //object destructuring
    
    const submitForm = (e) =>{
        console.log(info);
        e.preventDefault();

    }

    return (
        <>
            <h1 className="heading" id="formHeading">Form</h1>
            <form onSubmit={submitForm}>
                <div className='formArea'>
                    <label>Name</label>
                    <input type="text" className='input' value={name} onChange={(e)=>setInfo({...info,name:e.target.value})} required/>
                    <label>Email</label>
                    <input type="text" className='input' value={email} onChange={(e)=>setInfo({...info,email:e.target.value})} required/>
                    <label>Password</label>
                    <input type="password" className='input' value={password} onChange={(e)=>setInfo({...info,password:e.target.value})} required/>
                    <button>Submit</button>
                </div>
            </form>
        </>
    );
}