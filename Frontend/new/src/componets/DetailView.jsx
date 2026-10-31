
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function DetailView() {

    const [post, setpost] = useState({})
    const { id } = useParams()

    const datapack = async () => {
        let dataa = await fetch(
            `http://127.0.0.1:8000/api/v1/movies/${id}/`
        )

        let data = await dataa.json()
        setpost(data)
    }

    useEffect(() => {
        datapack()
    }, [])

    return (
        <main className="min-h-screen bg-black text-white px-6 py-12">

            <div className="max-w-5xl mx-auto">

                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* Movie Image */}
                    <div>
                        <img
                            src={post.image}
                            alt={post.name}
                            className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                        />
                    </div>

                    {/* Movie Details */}
                    <div>

                        <h1 className="text-5xl font-bold mb-6">
                            {post.name}
                        </h1>

                        <div className="flex gap-3 mb-6">

                            <span className="bg-pink-600 px-4 py-2 rounded-full">
                                {post.year}
                            </span>

                            <span className="bg-gray-800 px-4 py-2 rounded-full">
                                {post.language}
                            </span>

                        </div>

                        <p className="text-gray-300 text-lg leading-8">
                            {post.description}
                        </p>
                           <p className="text-red-500 text-lg leading-8">
                            Total Collection :{post.collection}
                        </p>

                        <div className="mt-8 border-t border-gray-800 pt-6">

                            <p className="text-gray-400 mb-10">
                                Duration :{post.time} hr
                            </p>
                            <Link to="/" className='text-blue-500'>Popular Movies</Link>

                        
                        </div>

                    </div>


                </div>

            </div>

        </main>
    )
}

export default DetailView
