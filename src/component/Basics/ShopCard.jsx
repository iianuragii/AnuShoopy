import React from 'react'

const ShopCard = ({menuData}) => {
  return (
    <>
        <section className='main-card-container'>
        {
            menuData.map((curElem) =>{
                return(
                    <>
                        <div className='card-container' key={curElem.id}>
                            <div className='card'>
                                <div className='card-body'>
                                    <span className='card-number card-circle'>{curElem.id}</span>
                                    <span className='card-author subtle'>{curElem.category}</span>
                                    <h2>{curElem.name}</h2>
                                    <span className='card-description subtle'>
                                    {curElem.description}
                                    </span>
                                    <div className='card-read'>View</div>
                                </div>
                                <img src= {curElem.image} alt='images' className='card-media'/>
                                <span className='card-tag subtle'>Order Now</span>
                            </div>
                        </div>
                    </>
                );
            })
        }
        </section>
        <section className='footer'>
            <div className='footer-top'>
                Back to top
            </div>
            <div className='footer-main'>
                <h1>Get to know us</h1>
                <br></br>
                <h4>About</h4>
                <h4>Careers</h4>
                <h4>Press Releases</h4>
                <h4>Anushoopy Sciences</h4>
            </div>
        </section>
    </>
  )
}

export default ShopCard