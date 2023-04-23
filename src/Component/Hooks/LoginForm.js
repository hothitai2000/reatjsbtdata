import React, {useState} from 'react';
function LoginForm (props){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const { handleSubmit } = this.props;
        return (
            <>
            <div className="App">
                <header className="App-header">
                    <form onSubmit = {handleSubmit}>
                        <input value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        <input value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        <button type="submit">Submit</button>
                    </form>
                </header>
            </div>
            </> 
        );
};
export default LoginForm;
