import {Product, FooterBanner, HeroBanner} from '../components'
export default function Home() {
  return (
    <div>
      <HeroBanner/>
      <div className="products-heading">
        <h2>Best selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className="products-container">
        {['Product 1', 'Product 2'].map((product, i)=>product)}
      </div>
      
      <FooterBanner/>
    </div>
  );
}
