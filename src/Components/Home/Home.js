import React from 'react'
import './Home.css'
import Product from '../Product/Product';
const Home = () => {
    return (
        <div className="home">
            <img className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt="banner" />
            {/* Product,id,rating,image,price */}
            <div className="home__row">
                <Product
                    id='ff55f'
                    title='HP 15 (2021) Thin & Light Ryzen 3-3250 Laptop, 8 GB RAM, 1TB HDD, 39.62 cms (15.6") FHD Screen, Windows 10, MS Office (15s-gr0011AU)'
                    price={900}
                    rating={4}
                    image='https://images-na.ssl-images-amazon.com/images/I/41mQtYQUzmL.jpg'
                />
                <Product
                    title="LG 32 L Convection Microwave Oven (MC3286BRUM, Black, With Starter Kit)"
                    id="uull66"
                    price={360}
                    rating={4}
                    image='https://images-na.ssl-images-amazon.com/images/I/91fSgD70z0L._SL1500_.jpg'
                />



            </div>
            <div className="home__row">
                <Product
                    id="sfjgjj69"
                    title="
                    Redmi Note 9 Pro (Glacier White, 4GB RAM, 64GB Storage) - Latest 8nm Snapdragon 720G &Alexa Hands-Free Capable"
                    price={292}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/81fwKtv0VHL._SL1500_.jpg'
                />
                <Product
                    id="123456xsjj"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    price={215}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'
                />


                <Product
                    id="jjjjj55"
                    title="Samsung 6.5 kg Fully-Automatic Top Loading Washing Machine (WA65A4002VS/TL, Imperial Silver, Center Jet Technology)"
                    price={430}
                    rating={3}
                    image='https://images-na.ssl-images-amazon.com/images/I/51QmQjHQASL._SL1500_.jpg'
                />


            </div>
            <div className="home__row" >
                <Product

                    id="dektj55"
                    title="Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340AKXXL (Glossy Black) (2020 Model)"
                    price={900}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'
                />

            </div>




        </div>
    )
}

export default Home
