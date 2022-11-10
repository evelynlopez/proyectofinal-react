import { useEffect, useState } from 'react'
import Card from './Card'
const Movies = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const getData = async () => {
    try {
      const req = await fetch('https://api.tvmaze.com/search/shows?q=superman')
      const res = await req.json()
      console.log(res)
      setMovies(res)
    } catch (error) {
      setError(String(error))
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <section className='container'>
      <div className='row'>
        {movies.map((movie, index) => (
          <div key={index} className='col-12 col-md-6 col-lg-3'>
            <Card name={movie.show.name} image={movie.show.image} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Movies
