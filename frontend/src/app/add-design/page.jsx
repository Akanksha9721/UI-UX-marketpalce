'use client';
import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import toast from 'react-hot-toast';

const Adddesign = () => {

    const adddesignForm = useFormik({
        initialValues: {
            name: '',
            file: '',
            image: '',
            uploadBy: '',
            price: '',
            discription: ''

        },
        onSubmit: (values) => {
            console.log(values);
            axios.post('http://localhost:5000/design/add', values)
                .then((result) => {
                    // console.log(200);
                    toast.success('Design added successfully');
                }).catch((err) => {
                    console.log(err);
                    toast.error('Some error occured');
                })
        },

    });

    const uploadImage = (e) => {
        const file = e.target.files[0];

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'mypreset');
        formData.append('cloud_name', 'dcozy6hkg');

        axios.post('https://api.cloudinary.com/v1_1/dcozy6hkg/image/upload', formData)
            .then((result) => {
                console.log(result.data);
                adddesignForm.setFieldValue('image', result.data.url);
                toast.success('File Uploaded Successfully');
            }).catch((err) => {
                console.log(err);
                toast.error('Failed to upload file');
            });
    }

    return (
        <>
            <div className='bg-gray-50 dark:bg-gray-900'>
                <div className="max-w-[85rem]  px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <div className="max-w-xl mx-auto">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                                Add Design
                            </h1>
                            <p className="mt-1 text-gray-600 dark:text-neutral-400">

                            </p>
                        </div>
                    </div>
                    <div className="mt-12 max-w-lg mx-auto shadow-xl bg-white rounded-xl">
                        {/* Card */}
                        <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 dark:border-neutral-700">
                            <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-neutral-200">

                            </h2>
                            <form onSubmit={adddesignForm.handleSubmit} >
                                <div className="grid gap-4 lg:gap-6">
                                    {/* Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                        <div>
                                            <label
                                                htmlFor="hs-firstname-contacts-1"
                                                className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                                            >
                                                Name
                                            </label>
                                            <div className="relative">
                                                <input
                                                    type="text"
                                                    id="name"
                                                    onChange={adddesignForm.handleChange}
                                                    value={adddesignForm.values.name}
                                                    className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                                />
                                            </div>
                                            {
                                                (adddesignForm.errors.name && adddesignForm.touched.name) && (
                                                    <p className=" text-xs text-red-600 mt-2" id="email-error">
                                                        {adddesignForm.errors.name}
                                                    </p>
                                                )
                                            }
                                            <div>
                                                

                                            </div>
                                            
                                                <label
                                                    htmlFor="hs-lastname-contacts-1"
                                                    className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                                                >
                                                    file
                                                </label>

                                            <input
                                                type="text"
                                                id="file"
                                                onChange={adddesignForm.handleChange}
                                                value={adddesignForm.values.file}
                                                className=" border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                            />
                                            <label
                                                htmlFor="image"
                                                className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                                            >
                                                Upload Image
                                            </label>
                                            <input
                                                type="file"
                                                id="image"
                                                onChange={uploadImage}
                                                className=" border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                            />
                                        </div>
                                    </div>
                                    {/* End Grid */}
                                    {/* Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                        <div>
                                            <label
                                                htmlFor="hs-email-contacts-1"
                                                className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                                            >
                                                price
                                            </label>
                                            <input
                                                type="number"
                                                id="price"
                                                onChange={adddesignForm.handleChange}
                                                value={adddesignForm.values.price}

                                                className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="hs-phone-number-1"
                                                className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                                            >
                                                UploadBy
                                            </label>
                                            <input
                                                type="text"
                                                id="uploadBy"
                                                onChange={adddesignForm.handleChange}
                                                value={adddesignForm.values.uploadBy}
                                                className=" border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="hs-phone-number-1"
                                                className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                                            >
                                                description
                                            </label>
                                            <input
                                                type="text"
                                                id="description"
                                                onChange={adddesignForm.handleChange}
                                                value={adddesignForm.values.description}
                                                className=" border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                            />
                                        </div>
                                    </div>
                                    {/* End Grid */}
                                    <div>
                                        <label
                                            htmlFor="hs-about-contacts-1"
                                            className="block mb-2 text-sm text-gray-700 font-medium dark:text-white"
                                        >

                                        </label>

                                    </div>
                                </div>
                                {/* End Grid */}
                                <div className="mt-6 grid">
                                    <button
                                        type="submit"
                                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                    >
                                        Add
                                    </button>
                                </div>
                                <div className="mt-3 text-center">
                                    <p className="text-sm text-gray-500 dark:text-neutral-500">
                                        We'll get back to you in 1-2 business days.
                                    </p>
                                </div>
                            </form>
                        </div>
                        {/* End Card */}
                    </div>

                </div>

            </div>
            {/* End Contact Us */}
        </>

    )
}
export default Adddesign;
