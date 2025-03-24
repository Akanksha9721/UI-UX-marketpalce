'use client';
import axios from 'axios';
import { Formik } from 'formik';
import { useParams, useRouter } from 'next/navigation';

import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const UpdateDesign = () => {
  const router = useRouter();
  const [designData, setDesignData] = useState(null);
  const { id } = useParams();



  const fetchDesignData = async () => {
    const res = await axios.get('http://localhost:5000/design/getbyid/' + id)
    console.log(res.data);
    setDesignData(res.data);
  }
  useEffect(() => {
    fetchDesignData();

  }, []);
  const submitForm = (values) => {
    console.log(values);

    axios.put('http://localhost:5000/design/update/' + id, values)
      .then((result) => {
        toast.success('design Updated successfully');
        router.back();

      })
      .catch((err) => {
        console.log(err);
        toast.error('Failed to update design');

      })

  }

  const getDesignData = async () => {
    const res = await axios.get('https://localhost:5000/design/getbyid/' + id);
    console.log(res.data);
    setDesignData(res.data);

  }




  return (
    <>
      <div className='max-auto bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(' https://img.freepik.com/free-vector/colorful-gradient-background-with-square-middle_483537-4638.jpg?t=st=1737883647~exp=1737887247~hmac=f860e55e450c65261a45ef72336e4a55429874212e146f8346ae41495e7693d9&w=1060')` }}>
        <div className='max-w-lg mx-auto color:black'>
          {/* Contact Us */}
          <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
            <div className='max-w-xl mx-auto shadow-xl'>
            <h1 className=" text-center block text-2xl font-bold text-gray-800 dark:text-white">
                      Update Design
                    </h1>
              <div className="mt-7 bg-white  rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700 bg-black bg-opacity-50">
                <div className="p-4 sm:p-7">
                  <div className="text-center">
                    
                    <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                      <a
                        className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                        href="../examples/html/signin.html"
                      >
                      </a>
                    </p>
                  </div>
                  <div className="mt-5">
                    {/* Form */}
                    {
                      designData !== null ? (
                        <Formik initialValues={designData} onSubmit={submitForm}>
                          {

                            (updateForm) => {
                              return (

                                <form onSubmit={updateForm.handleSubmit}>
                                  <div className="grid gap-y-4">
                                    {/* Form Group */}
                                    <div>
                                      <label
                                        htmlFor="name"
                                        className="block text-sm mb-2 dark:text-white"
                                      >
                                        Name
                                      </label>
                                      <div className="relative">
                                        <input
                                          type="text"
                                          id="name"
                                          onChange={updateForm.handleChange}
                                          value={updateForm.values.name}
                                          className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                          required=""
                                          aria-describedby="name-error"
                                        />
                                        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                          <svg
                                            className="size-5 text-red-500"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                            aria-hidden="true"
                                          >
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                          </svg>
                                        </div>
                                      </div>
                                      {/* {
                                        (updateForm.errors.name && updateForm.touched.name) && (
                                            <p className=" text-xs text-red-600 mt-2" id="email-error">
                                                {updateForm.errors.name}
                                            </p>

                                        )
                                    } */}

                                    </div>
                                    {/* End Form Group */}
                                    {/* Form Group */}
                                    <div>
                                      <label
                                        htmlFor="email"
                                        className="block text-sm mb-2 dark:text-white"
                                      >
                                        File
                                      </label>
                                      <div className="relative">
                                        <input
                                          type="text"
                                          id="file"
                                          onChange={updateForm.handleChange}
                                          value={updateForm.values.file}
                                          className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                          required=""
                                          aria-describedby="email-error"
                                        />
                                        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                          <svg
                                            className="size-5 text-red-500"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                            aria-hidden="true"
                                          >
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                          </svg>
                                        </div>
                                      </div>
                                      <p className="hidden text-xs text-red-600 mt-2" id="email-error">
                                        Please include a valid email address so we can get back to you
                                      </p>
                                    </div>
                                    {/* End Form Group */}
                                    {/* Form Group */}
                                    <div>
                                      <label
                                        htmlFor="password"
                                        className="block text-sm mb-2 dark:text-white"
                                      >
                                        upload Image
                                      </label>
                                      <div className="relative">
                                        <input
                                          type="file"
                                          id="image"
                                          onChange={Image}
                                          className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                          required=""
                                          aria-describedby="password-error"
                                        />
                                        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                          <svg
                                            className="size-5 text-red-500"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                            aria-hidden="true"
                                          >
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                          </svg>
                                        </div>
                                      </div>
                                      <p className="hidden text-xs text-red-600 mt-2" id="password-error">
                                        8+ characters required
                                      </p>
                                    </div>
                                    {/* End Form Group */}
                                    {/* Form Group */}
                                    <div>
                                      <label
                                        htmlFor="confirm-password"
                                        className="block text-sm mb-2 dark:text-white"
                                      >
                                        Price
                                      </label>
                                      <div className="relative">
                                        <input
                                          type="number"
                                          id="price"
                                          onChange={updateForm.handleChange}
                                          value={updateForm.values.price}
                                          className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                          required=""
                                          aria-describedby="confirm-password-error"
                                        />
                                        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                          <svg
                                            className="size-5 text-red-500"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                            aria-hidden="true"
                                          >
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                          </svg>
                                        </div>
                                      </div>
                                      <p
                                        className="hidden text-xs text-red-600 mt-2"
                                        id="confirm-password-error"
                                      >
                                        Password does not match the password
                                      </p>
                                    </div>
                                    <div>
                                      <label
                                        htmlFor="password"
                                        className="block text-sm mb-2 dark:text-white"
                                      >
                                        uploadBy
                                      </label>
                                      <div className="relative">
                                        <input
                                          type="text"
                                          id="uploadBy"
                                          onChange={updateForm.handleChange}
                                          value={updateForm.values.uploadBy}
                                          className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                          required=""
                                          aria-describedby="password-error"
                                        />
                                        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                          <svg
                                            className="size-5 text-red-500"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                            aria-hidden="true"
                                          >
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                          </svg>
                                        </div>
                                      </div>
                                      <p className="hidden text-xs text-red-600 mt-2" id="password-error">
                                        8+ characters required
                                      </p>
                                    </div>
                                    <div>
                                      <label
                                        htmlFor="password"
                                        className="block text-sm mb-2 dark:text-white"
                                      >
                                        description
                                      </label>
                                      <div className="relative">
                                        <input
                                          type="text"
                                          id="description"
                                          onChange={updateForm.handleChange}
                                          value={updateForm.values.description}
                                          className="border py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                          required=""
                                          aria-describedby="password-error"
                                        />
                                        <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                                          <svg
                                            className="size-5 text-red-500"
                                            width={16}
                                            height={16}
                                            fill="currentColor"
                                            viewBox="0 0 16 16"
                                            aria-hidden="true"
                                          >
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                          </svg>
                                        </div>
                                      </div>
                                      <p className="hidden text-xs text-red-600 mt-2" id="password-error">
                                        8+ characters required
                                      </p>
                                    </div>


                                    {/* End Form Group */}
                                    {/* Checkbox */}
                                    <div className="flex items-center">
                                      <div className="flex">
                                        <input
                                          id="remember-me"
                                          name="remember-me"
                                          type="checkbox"
                                          className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                        />
                                      </div>
                                      <div className="ms-3">
                                        <label htmlFor="remember-me" className="text-sm dark:text-white">
                                          I accept the{" "}
                                          <a
                                            className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                                            href="#"
                                          >
                                            Terms and Conditions
                                          </a>
                                        </label>
                                      </div>
                                    </div>
                                    {/* End Checkbox */}
                                    <button
                                      type="submit"
                                      className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                    >
                                      update
                                    </button>
                                  </div>
                                </form>
                              )
                            }
                          }
                        </Formik>
                      ) : (
                        <p className='text-center my-10 font-bold text-2xl'>Loading..</p>
                      )
                    }
                    {/* apne from ko formik se connent kr rhe hai */}
                    {/* End Form */}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


    </>

  )
}

export default UpdateDesign