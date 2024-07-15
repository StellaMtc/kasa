import Banner from '../../components/Banner/'
import Card from '../../components/Card/'
import { Link } from 'react-router-dom'
import homeBanner from '../../assets/img/banner.webp'
import './home.scss'
import { useEffect, useState } from 'react'
import Error from '../../pages/Error'

const banner = 'banner'

function Home() {
  const [data, setData] = useState([])
  const [error, setError] = useState()

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch('../logements.json')
        const data = await response.json()
        setData(data)
      } catch (err) {
        setError(true)
      }
    }
    getData()
  }, [])

  if (error) {
    // if error occurred return 404 page
    return <Error />
  } else if (data) {
    return (
      <main>
        <Banner img={homeBanner} className={banner} />
        <div className="lodging-cards-container">
          {data &&
            data.length > 0 &&
            data.map((lodging) => (
              <Link key={`estate-${lodging.id}`} to={`/estate/${lodging.id}`}>
                <Card cover={lodging.cover} name={lodging.title} />
              </Link>
            ))}
        </div>
      </main>
    )
  }
}

export default Home