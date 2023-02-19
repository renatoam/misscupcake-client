import axios from "axios"
import { useQuery } from "react-query"
import { Link, useParams } from "react-router-dom"

export default function ProductDetailsPage() {
  const { id } = useParams()
  const { data, isLoading } = useQuery('productDetails', async () => {
    const response = await axios.get('https://cupcake.cyclic.app/api/products')
    return response.data.filter((product: any) => product.id === id)[0]
  })

  if (isLoading) return <h1>Loading...</h1>

  return (
    <section>
      <p>{data.name}</p>
      <p>{data.description}</p>
      <Link to={"/"}>
        Back to Home
      </Link>
    </section>
  )
}
