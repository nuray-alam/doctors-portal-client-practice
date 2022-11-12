import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link } from 'react-router-dom';

const SignUp = () => {
    // firebase react hook
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    let signInError;

    if (gLoading || loading) {

        return <Loading></Loading>;

    }

    if (gError || error) {

        signInError = <p className='text-red-600'><small>{error?.message || gError?.message}</small></p>
    }

    if (user || gUser) {
        console.log(user || gUser);
    }


    // react hook form


    const onSubmit = data => {
        console.log(data);
        createUserWithEmailAndPassword(data.email, data.password)
    };

    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="card w-96 text-black shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Sign up</h2>

                    {/* react-hook-from */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="text-black">Name</span>
                            </label>
                            <input type="text" placeholder="Your Name"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is required"
                                    }
                                })}
                                className="input bg-white input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.name.message}</span>}
                            </label>
                        </div>


                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="text-black">Email</span>
                            </label>
                            <input type="email" placeholder="Your email"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email'
                                    }
                                })}
                                className="input bg-white input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                            </label>
                        </div>



                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="text-black">Password</span>
                            </label>
                            <input type="password" placeholder="Your password"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'At least 6 characters'
                                    }
                                })}
                                className="input input-bordered bg-white w-full max-w-xs" />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                            </label>
                        </div>

                        {signInError}

                        <p><small>Already have an account? <Link className="text-accent" to="/login">Please Login</Link></small></p>
                        <input className='btn text-white w-full max-w-xs mt-4' type="submit" value="signUp" />

                    </form>
                    <div className="divider">OR</div>
                    <button

                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline text-black">CONTINUE WITH GOOGLE</button>

                </div>
            </div>
        </div >
    );
};

export default SignUp;