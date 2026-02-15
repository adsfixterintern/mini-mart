"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast'; // ইমপোর্ট করুন

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = (data) => {
        // সাবমিট করার সময় একটি লোডিং টোস্ট দেখানো
        const loadingToast = toast.loading('Submitting form...');
        
        // ডামি সাকসেস লজিক
        setTimeout(() => {
            toast.success(`Welcome ${data.name}! Login Successful`, {
                id: loadingToast, // লোডিং টোস্টটিকে সাকসেস দিয়ে রিপ্লেস করবে
            });
            console.log("Form Data:", data);
            reset(); // ফর্ম ক্লিয়ার করবে
        }, 1500);
    };

    const onError = () => {
        toast.error("Please fix the errors in the form");
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#F4F5F7] px-4 py-10">
            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-xl">
                <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-[#3A3A3A]">Furniture Login</h2>
                    <p className="text-gray-500 text-sm mt-2">Enter your details to continue</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-5">
                    
                    {/* Name */}
                    <div>
                        <label className="mb-1.5 block text-sm font-semibold text-[#3A3A3A]">Name</label>
                        <input
                            type="text"
                            placeholder="Your Full Name"
                            className={`w-full border p-3 rounded-md outline-none transition-all ${
                                errors.name ? 'border-red-400' : 'border-gray-200 focus:border-[#B88E2F]'
                            }`}
                            {...register("name", { required: "Name is required" })}
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="mb-1.5 block text-sm font-semibold text-[#3A3A3A]">Email Address</label>
                        <input
                            type="email"
                            placeholder="email@example.com"
                            className={`w-full border p-3 rounded-md outline-none transition-all ${
                                errors.email ? 'border-red-400' : 'border-gray-200 focus:border-[#B88E2F]'
                            }`}
                            {...register("email", { 
                                required: "Email is required",
                                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                            })}
                        />
                    </div>

                    {/* Address */}
                    <div>
                        <label className="mb-1.5 block text-sm font-semibold text-[#3A3A3A]">Address</label>
                        <textarea
                            placeholder="Street, City, Country"
                            rows="2"
                            className={`w-full border p-3 rounded-md outline-none transition-all ${
                                errors.address ? 'border-red-400' : 'border-gray-200 focus:border-[#B88E2F]'
                            }`}
                            {...register("address", { required: "Address is required" })}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#B88E2F] py-3.5 font-bold text-white transition-all hover:bg-[#a57f28] active:scale-[0.98] rounded-md uppercase tracking-wider shadow-md"
                    >
                        Login Now
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;