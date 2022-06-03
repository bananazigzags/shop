import { Products } from "../components/Products";
import "./Home.css"

const Home = ({data}) => {
  return data &&
    <div className="products">
      <Products collection={data} />
    </div>
}

export { Home }