
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {

  // Stores movies from Django
  const [post, setpost] = useState([])

  // Stores the text typed in search box
  const [search, setSearch] = useState('')

  // Controls "No Movies Found"
  const [notFound, setNotFound] = useState(false)


  // Fetch movies from Django
  const datapack = async () => {

    await fetch(
      `http://127.0.0.1:8000/api/v1/movies/?search=${search}`
    )
      .then(res => res.json())

      .then(data => {

        // Store the movies
        setpost(data)


        // Check if first movie exists
        if (data[0]) {

          // Movie found
          setNotFound(false)

        } else {

          // No movie found
          setNotFound(true)

        }

      })
  }


  // Run when Home page loads
  useEffect(() => {
    datapack()
  }, [])


  return (
    <div className="px-8 py-10">

      <h2 className="text-3xl font-bold mb-8">
        Popular Movies
      </h2>


      {/* Search */}

      <div className="flex gap-3 mb-8">

        <input
          type="text"
          placeholder="Search movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-3
                     bg-gray-900 border border-gray-700
                     rounded-lg text-white outline-none"
        />


        <button
          onClick={datapack}
          className="px-6 py-3 bg-pink-600
                     rounded-lg hover:bg-pink-700"
        >
          Search
        </button>

      </div>


      {/* No Movies Found */}

      {notFound && (

        <div className="min-h-[400px] flex flex-col
                        items-center justify-center text-center">

          <h2 className="text-3xl font-bold mb-3">
            No Movies Found
          </h2>

          <p className="text-gray-400 max-w-md">

            We couldn't find a movie called{" "}

            <span className="text-pink-500 font-semibold">
              "{search}"
            </span>

          </p>

          <p className="text-gray-500 mt-2 text-sm">
            Check the spelling or try searching for another movie.
          </p>

        </div>

      )}


      {/* Movie Grid */}

      {!notFound && (

        <div className="grid grid-cols-2 md:grid-cols-3
                        lg:grid-cols-5 gap-6">

          {post.map((post) => (

            <Link
              to={`/post/${post.id}`}
              key={post.id}
            >

              <div className="bg-gray-900 rounded-lg
                              overflow-hidden
                              hover:scale-105 transition">

                <img
                  src={post.image}
                  alt={post.name}
                  className="w-full h-72 object-cover"
                />


                <div className="p-4">

                  <h3 className="text-lg font-bold">
                    {post.name}
                  </h3>


                  <p className="text-gray-400 text-sm mt-2">
                    {post.year}
                  </p>


                  <p className="text-gray-400 text-sm">
                    {post.language}
                  </p>
                </div>

              </div>

            </Link>

          ))}

        </div>

      )}

    </div>
  )
}

export default Home
