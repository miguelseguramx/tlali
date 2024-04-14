import { places } from "../../components/data"
import Footer from "../../components/Footer"

function Destiny({ destination }) {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto">
        <img src={destination.image} />
        <h1>{destination.name}</h1>
        <h3>{destination.summary}</h3>
      </div>
      <Footer />
    </div>
  )
}

export default Destiny

export async function getStaticPaths() {
  return {
    paths: places.map((destination) => ({
      params: { slug: destination.slug },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const destination = places.find(
    (destination) => destination.slug === params.slug
  )
  return {
    props: { destination },
  }
}
