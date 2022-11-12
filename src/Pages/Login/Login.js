import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Login = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (user) {
        console.log(user);
    }

    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="card w-96 text-black shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Login</h2>
                    <div className="divider">OR</div>
                    <button

                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline text-black">CONTINUE WITH GOOGLE</button>

                </div>
            </div>
        </div >
    );
};

export default Login;