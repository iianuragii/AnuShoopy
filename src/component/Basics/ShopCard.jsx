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
    </>
  )
}

export default ShopCard