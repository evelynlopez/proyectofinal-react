import { useEffect, useState } from 'react'
const Menu = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [shows, setShows] = useState('')

  const getData = async (event) => {
    event.preventDefault()
    console.log(shows)
    try {
      const req = await fetch(`https://api.tvmaze.com/search/shows?q=${shows}`)
      const res = await req.json()
      console.log(res)
      setData(res)
    } catch (error) {
      setError(String(error))
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (event) => {
    setShows(event.target.value)
  }

  // useEffect(() => {
  //   getData()
  // }, [])

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container-fluid'>
        <a className='navbar-brand'>TV-MAZE</a>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarColor02' aria-controls='navbarColor02' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarColor02'>
          <ul className='navbar-nav me-auto'>
            <li className='nav-item'>
              <a className='nav-link active' href='#'>Home
                <span className='visually-hidden'>(current)</span>
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link active' href='#'>Iniciar sesión
                <span className='visually-hidden'>(current)</span>
              </a>
            </li>
          </ul>
          <form className='d-flex' onSubmit={getData}>
            <input className='form-control me-sm-2' type='text' placeholder='Buscar' onChange={handleChange} />
            <button className='btn btn-secondary my-2 my-sm-0' type='submit'>Buscar</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Menu
