import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';


const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = async data => {
        console.log(data);;

    };

    return (
        <div className=''>
            <h2 className="text-2xl">Add a New Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)} >
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
                        <span className="text-black">Specialization</span>
                    </label>
                    <input type="text" placeholder="Specialty"
                        {...register("specialty", {
                            required: {
                                value: true,
                                message: "Specialization is required"
                            }
                        })}
                        className="input input-bordered bg-white w-full max-w-xs" />
                    <label className="label">
                        {errors.password?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                    </label>
                </div>
                <input className='btn text-white w-full max-w-xs mt-4' type="submit" value="Add" />

            </form>
        </div>
    );
};

export default AddDoctor;