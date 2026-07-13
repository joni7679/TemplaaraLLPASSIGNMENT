import { ourproducts } from '../data/ourproducat'
import Button from './Button'
import ProductCard from './ProductCard'
import SectionHeader from './SectionHeader'

const Explore = () => {
    return (
        <>
            <section className='explore-section'>
                <div className="container">
                    <SectionHeader tag="Our Products" title="Explore Our Products" />
                    <div className="row">
                        {ourproducts.map((product) => {
                            return (
                                <div className='col-lg-3 col-md-6 col-12'>
                                    <ProductCard key={product.id} product={product} />
                                </div>
                            )
                        })}
                    </div>
                    <div className='text-center mt-4'>
                        <Button title="View All Products" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Explore
