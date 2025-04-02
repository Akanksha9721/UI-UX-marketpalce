'use client';
import axios from 'axios';
import { Formik } from 'formik';
import Link from 'next/link';
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

      <footer className="bg-black">
          <div className="pt-12 lg:pt-16">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
              <div className="mb-16 grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-6 lg:gap-8">
                <div className="col-span-full lg:col-span-2">
                  {/* logo - start */}
                  <div className="mb-4 lg:-mt-2">
                    <a
                      href="/"
                      className="inline-flex items-center gap-2 text-xl font-bold text-black md:text-2xl"
                      aria-label="logo"
                    >
                      Designs
                    </a>
                  </div>
                  {/* logo - end */}
                  <div className="flex items-center gap-x-4 w-full md:w-auto">
                    <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA7VBMVEX29vZGRlBGRk42wtn29vhGRlH29vRGRlP////29vlERE79/P/y8/VXVlz2+Pc7PEH09/GNjZQ+Pkg2NkKysbNGR0w3wdozxNZBQkdGRVTo6eozMj3v7vJPTlVPUFQ7O0P88/Pw+vPa2t3Lys0oJjK7ur8zMzwtLDVsa3A4OT1kY2nz9/vo/ff79/DQ0NLFxMff+//P7fHG4eYjIC+ko6d/foR2wMkzt8IquMgytMprv9IoKStmxMn0+e0tKjlMs7xJucJ0zdCPkJQ0wOIxuNHX+PYyxtGEz9qQ0dg9vePk8/ubz9h4eHpfXmeXlpqum54fAAAJfUlEQVR4nO2be1fbOBOHbSPZ8gXhGpybc3USOxBIQksK7bawWwpt9237/T/OK9kJ8UWC7G5wyznz7B+crmVFP480MxrLigIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPCiQDvqpq8gEyn6bnr7N5im9AIbl2RgKGGLvqd0avbN6ZRWr1BPSP8+1mibPqRQzuD0dKBv8Th2ja7zX0dshK5kjOnwbYoUKrzG79cfn32uq/QV3eyfuW65j+fGJuFsPmsTWzoTdYUSOxwOk0bl29uz+TC0bfsx4+iD08X569fni1Ozv5NRbw9pvQpGcRC8sS7M8vBTkB0u41EQxG9+HFGSvaJTMt4fxVEQx8uQSG7nj2j6+u0l4+rd+9fTnbmup0GmSS7+8DDGKjasw2jIx1gwJPsnspcj1sgwMLYCLbQfWui6GXYCS1NVrFrWm6VjCoZO9bMztPhwVa/XOHtXH+76Hz/2KxJpku+Rrz4wuiCKk1No8nXm7Ht43cTA8fzBG+rK7Nra3N7rtEUSTR3d3dT3Ntyc0wGS+e0dQ5bHmrEZohqPC4uRRwly4m1aMHPH4dpXoNYbA28uaY2uSGJ/uvjzvrYRWKvdLKaDamxI57GGm5kxqlEbFWcpuYhwRqGq+v7q+Tt2R81d0hrMisUf0T9O397v5ai/nZ4NKlFI/IaaHaOKrSVR3Fwb6kRZK7PWWu8odUn2+Dp7KZHoCxTeXe7VsrO0Xr88d91iu2cROLtm49IyYzSMyCzYkBwFORkMq5N4TZ38aOYVcomN0s9M/6rV6vWcEWsfTvvPrw+Z9iuvMHZVi4a5BcKiwcTKWpk/DyNo8fWpt0cG1nJ3MywfFdbi6Z9MYC03S2/fnZ4hSp85ajCFE8tSC/SYO80YUaeoi7OG4pEBB3PukOgwxmWFmu+ztZgd+t2727LCc70KhWS/qE9VvU+FiO4cFBWqxuER4T52HIkUco+aHTk9f3e7l1NYq99+Pq8gd2M23C+ZUO19ItnfFinETGFiw3kkmKUaW4tdx8x0IlBYe5cqfF6Z/13hTDhL1URipo+7q8IsZY716s5l+65fotB7RWhuHYpnaZoYFD3NQ6NGw2GrLB2/zjzNfT0X8e/3rk7PfqFC9wmFiQ11HSn2pFkMJGssn0lMfao++LJX38vbsP5l0H9WcTtSiIYjiUAe+p1V6kkHi8vb26wrvf12dY5+maf5RwrtiYdLPawldturzZg5+MpcTTaluf1SSeb9nxWyMToHTZlC1es6ySxF/cHi5n6jsLZ3/2HhSmtCv5NCltfQtlfuImmmYdzotpIudHN6+v7zxoaf3y+oOf3tZ+kqpqNWj0dAkUQe+p3EX7JN5vTr5X399tu321r98uuC6iaqoOK2E4WK0jr2NbW8GtPspmGymcpVUvvv/93wMsbN179t3n8V28MdKaStA8sor8ZVAuc7Js8/FeQOBqeLuzu29R24iBcXX45Cl7Z6lsSGWprAsQy7r7t6nw4GSh+5bmLUl6OQUtQ6KC/ETQLX5mKYJpYETSliFq2sXrojhQghu9Ww+PZXoPAhRzWZFdnGsa9QlBj1Ba3DhFZDNWQJnNdVXJdWX8rfrULaigRrcX2Lz/bRL12hwteicJuhpjnqoxX/52K3ClnQ8CUSNdXqOC9eoaK7bC1KMAwrTeAqRqowW06kitMT74ALtXHq0lkks6HB03ClGgdaUFgeTmGPj8yywnUVI6+QBX6JCR9Cv+ilxnMrLNvQWubqNAg50RYKdZ15U1m8SLMbz29XF+sfFJ6UFRqdvA3tMBYoHBcV0tax1ZTEizT4G57vVK6QfBcoHLVzNrR/9nCh5o2NYIYKs5QJxNLt/iq9YUGjaoWCqj571LmSMELHWt6GGlcYmnmFfH+BpdEiLYVrGgsa1UpUyBHzIsW5heOQrkbP/pBl4SEwvVg7zs83kwmU2C+P12mznquUGcZGs7R6LC+0V6cvFPtnULicKNzPVf7NViRLZ0oSuxUrRCNcVqha0ZjY1NUpaS+D4kWusJedyMhku/wtBaZFxipjBjmxBArV5nXnYtYK58uRVwoAXGE03yjUzXYkzUjLClWvUWlUJEeeSKFhGIfxKA7Y39LFxIaZecbiYENUp5EoNJqGVqFABbVHAhE8HhhsKCKB/Jo12ZgwrbVJAoVg58+6tXyeo1Z1uI1MWCje1gCrURvXw9ST8pjYktVLfdwUhI80u+HHGR4/JrczkD2MZAaQKWRRbV0rRYVTDDkM0VubVQK3X+FaJILU9AmF0eokhqI/9t7CwIeiVZykN7j3Sn5AbMdQNNw6lqVgq0vW5Vx7OJIJxFYn7MlqjIY6CisyIlsMZCJZSbKhx0Oqp8Oj9om8/OQrpNUr9ZzasIkby6rKGjpzhsfb+xqMceP7w+6KOiOhs8UsLWL7CLbf8Jr8iE25hWFFlU1THhPj7b2pgQ82d9KZ8E72/6y0Rkrbh2I3Zhhxq8KdFFkebitQVePZ5uGTeSB+Nh7bzyctWLRkSZPoIURhlXtF+8TjpZQnYRMuPsrMLjoORCbyN+dp2ETtSRTOKt0No66Fn1bImsQX2VPEdCi0IX9ruKpXuDoSpgRsllZqQ2qaHWlcyyocMYHZgbVFnsby0Xp/yXw1srlHLbZiNiQVf5NAJsfiLHQljp+59P8Yk9zbd53us419tl3yxrDQNXfWzUJ+bzQnVStU6EVsqaX9/hqWhas9LTTNvEIyjnOxgD2IRrfcN1+L+adnXM+qeMudh8z8HpYdAGIbgnhpFj+O0RW7a2m5ZsyLlk/GIv7aJnuWGHsT2VcBzwmlF1G5MJVgqcGPmS04HkJbuSNDBts1CL75MfmL8KxCy6t2o78CIbv9qXdYfkmGvWB/TkTVXOZQZsGDq8Rqb+NFcz1Tlt1kHp53GFa+CjlsQ4OIM96Pew0+p/h//CsKL4qWM6ZP14UfBCH+vQUftqZ6o6Xk1QRLZNuTePUorPgH3x4+vyAJhLSOlp14NAqCgBcyTn4OTdH8fICS8ckojuL0mxnpvpaS4fc4YTKvMCWVDYbYYTgbDmdhm9h2wYGWQbYTsraIPNGMKOFwGDrkV7xJLJJ+jJZ+kMb956NDT75dI09+nbf+xu2pZtWgZ/jVY/kNQBt20g4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADYMf8Hf53FUIW8Ve8AAAAASUVORK5CYII="
                    alt="logo"
                    className="h-12 w-12 rounded-full"
                    />
                    <Link
                    
                        className="flex-none font-semibold   font-bold uppercase  text-2xl text-white focus:outline-none focus:opacity-80 dark:text-white"
                        href="/"
                        aria-label="Brand"
                    >
                       DESIGNPRO
                    </Link>
                    {/* Collapse Button */}
                    <button
                        type="button"
                        className="hs-collapse-toggle md:hidden relative size-9 flex justify-center items-center font-medium text-[12px] rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                        id="hs-header-base-collapse"
                        aria-expanded="false"
                        aria-controls="hs-header-base"
                        aria-label="Toggle navigation"
                        data-hs-collapse="#hs-header-base"
                    >
                        <svg
                            className="hs-collapse-open:hidden size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1={3} x2={21} y1={6} y2={6} />
                            <line x1={3} x2={21} y1={12} y2={12} />
                            <line x1={3} x2={21} y1={18} y2={18} />
                        </svg>
                        <svg
                            className="hs-collapse-open:block shrink-0 hidden size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                        <span className="sr-only">Toggle navigation</span>
                    </button>
                    {/* End Collapse Button */}
                </div>
                  {/* social - start */}
                  <div className="flex gap-4 p-5">
                    <a
                      href="#"
                      target="_blank"
                      className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                    >
                      <svg
                        className="h-5 w-5"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                    >
                      <svg
                        className="h-5 w-5"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                    >
                      <svg
                        className="h-5 w-5"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600"
                    >
                      <svg
                        className="h-5 w-5"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                  {/* social - end */}
                </div>
                {/* nav - start */}
                <div>
                  <div className="mb-4 font-bold uppercase tracking-widest text-blue-800">
                    Products
                  </div>
                  <nav className="flex flex-col gap-4">
                    <div>
                      <a
                        href="/add-design"
                        className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                      >
                        Add Designs
                      </a>
                    </div>
                    <div>
                      <a
                        href="/managedesign"
                        className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                      >
                        Manage Design
                      </a>
                    </div>
                    <div>
                      <a
                        href="/browse-designs"
                        className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                      >
                        Browse Design
                      </a>
                    </div>

                  </nav>
                </div>
                {/* nav - end */}
                {/* nav - start */}
                <div>
                  <div className="mb-4 font-bold uppercase tracking-widest text-blue-800">
                    Company
                  </div>
                  <nav className="flex flex-col gap-4">
                    <div>
                      <a
                        href="/about"
                        className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                      >
                        About
                      </a>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                      >
                        Investor Relations
                      </a>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                      >
                        Jobs
                      </a>
                    </div>


                  </nav>
                </div>
                {/* nav - end */}
                {/* nav - start */}
                <div>
                  <div className="mb-4 font-bold uppercase tracking-widest text-blue-800">
                    Support
                  </div>
                  <nav className="flex flex-col gap-4">
                    <div>
                      <a
                        href="/contact"
                        className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                      >
                        Contact
                      </a>
                    </div>
                    <div>
                      <a
                        href="/signup"
                        className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                      >
                        Signup
                      </a>
                    </div>
                    <div>
                      <a
                        href="/login"
                        className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                      >
                        Login
                      </a>
                    </div>

                  </nav>
                </div>
                {/* nav - end */}
                {/* nav - start */}
                <div>
                  <div className="mb-4 font-bold uppercase tracking-widest text-blue-800">
                    Legal
                  </div>
                  <nav className="flex flex-col gap-4">
                    <div>
                      <a
                        href="#"
                        className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                      >
                        Terms of Service
                      </a>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                      >
                        Privacy Policy
                      </a>
                    </div>
                    <div>
                      <a
                        href="#"
                        className="text-gray-500 transition duration-100 hover:text-indigo-500 active:text-indigo-600"
                      >
                        Cookie settings
                      </a>
                    </div>
                  </nav>
                </div>
                {/* nav - end */}
              </div>
              <div className="border-t py-8 text-center text-sm text-gray-400">
                © 2025 - Present Akanksha Yadav. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
    </>

  )
}

export default UpdateDesign