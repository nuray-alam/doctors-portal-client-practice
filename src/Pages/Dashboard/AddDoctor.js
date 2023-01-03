import React from 'react';
import { useForm } from "react-hook-form";
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading'


const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: services, isLoading } = useQuery('services', () => fetch('https://doctors-portal-practice.onrender.com/service').then(res => res.json()))
    const imageStorageKey = '6af6ea47219389238206731c92c90423';
    /**
     * 3 ways to store images // free open public storage for practice project
     * 1. Third Party Storage
     * 2. Your Own Storage on Your Own Server (file system)
     * 3. Database: Mongodb
     * YUP: to validate file: Search: YUP file validation for react hook form
     */

    if (isLoading) {
        return <Loading></Loading>
    }
    const onSubmit = async data => {
        const image = data.image[0];
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        const formData = new FormData();
        formData.append('image', image)
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img
                    }
                    //send to your database
                    fetch('https://doctors-portal-practice.onrender.com/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Doctor added successfully');
                                reset();
                            }
                            else {
                                toast.error('Failed to add the doctor');
                            }
                        })

                }
                // console.log('imgbb result', result)
            })
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
                    <select {...register('specialty')} className="select input bordered w-full max-w-xs bg-white">
                        {
                            services.map(service => <option
                                key={service._id}
                                value={service.name}
                            >
                                {service.name}
                            </option>)
                        }
                    </select>
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="text-black">Photo</span>
                    </label>
                    <input type="file"
                        {...register("image", {
                            required: {
                                value: true,
                                message: "Image is required"
                            }
                        })}
                        className="input bg-white input-bordered w-full max-w-xs" />

                    <label className="label">
                        {errors.name?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.name.message}</span>}
                    </label>
                </div>

                <input className='btn text-white w-full max-w-xs mt-4' type="submit" value="Add" />

            </form>
        </div>
    );
};

export default AddDoctor;