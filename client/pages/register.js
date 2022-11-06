import { useState } from 'react';
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.table({name, email, password});
    };

    return (
        <>
            <h1 className="jumbotron red text-center">
                Register page
            </h1>
            <div className="container col-md-4 offset-md-4 pb-5">
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        placeholder='Enter Name'
                        required
                        className="form-control mb-4 p-3"
                        value={name}
                        onChange={e => setName(e.target.value)}>

                    </input>
                    <input type="email"
                        placeholder='Enter email'
                        required
                        className="form-control mb-4 p-3"
                        value={email}
                        onChange={e => setEmail(e.target.value)}>
                    </input>
                    
                    <input type="password"
                        placeholder='Enter Password'
                        required
                        className="form-control mb-4 p-3"
                        value={password}
                        onChange={e => setPassword(e.target.value)}>
                    </input>
                {/* <br/> */}
                    <button type='submit' className="btn btn-block btn-primary p-2">Submit</button>
                </form>
            </div>
        </>
    );
};

export default Register;