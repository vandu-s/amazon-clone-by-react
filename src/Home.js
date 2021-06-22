import React from 'react'
import './Home.css'
import Product from './Product'
const Home = () => {
    return (
        <div className="home">
            <img className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="banner" />
            {/* Product,id,rating,image,price */}
            <div className="home__row">
                <Product
                    id="123456dkjkxs"
                    title="The Lean Startup:How Constant Innovation Creates"
                    price={11.96}
                    rating={5}
                    image='https://www.makodesign.com/wp-content/themes/makodesign/images/petbot-optimized-dsk.png'
                />
                <Product
                    id="sfjgjj69"
                    title="one"
                    price={11.96}
                    rating={5}
                    image='https://www.makodesign.com/wp-content/themes/makodesign/images/petbot-optimized-dsk.png'
                />

            </div>
            <div className="home__row">
                <Product
                    id="123456xsjj"
                    title="Two"
                    price={11.96}
                    rating={5}
                    image='https://www.makodesign.com/wp-content/themes/makodesign/images/petbot-optimized-dsk.png'
                />
                <Product
                    id="hdhfhhdss2"
                    title="four"
                    price={11.96}
                    rating={5}
                    image='https://www.makodesign.com/wp-content/themes/makodesign/images/petbot-optimized-dsk.png'
                />
                <Product
                    id="dfhj554"
                    title="Three"
                    price={11.96}
                    rating={5}
                    image='https://www.makodesign.com/wp-content/themes/makodesign/images/petbot-optimized-dsk.png'
                />


            </div>
            <div className="home__row">
                <Product
                    id="dektj55"
                    title="five"
                    price={11.96}
                    rating={5}
                    image='https://www.makodesign.com/wp-content/themes/makodesign/images/petbot-optimized-dsk.png'
                />

            </div>




        </div>
    )
}

export default Home
