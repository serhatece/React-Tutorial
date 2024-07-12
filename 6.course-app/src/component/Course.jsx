import React from 'react'

function Course({ course }) {
    const { id, title, description, price, link, image } = course;

    return (
        <div className='course'>
            <img src={image} width={300} height={200} />
            <h4 className='course-title'>{title}</h4>
            <p className='course-desc'>{description}</p>
            <h3 className='course-price'>{price} ₺</h3>
            <div className='course-link'><a style={{ textDecoration: 'none' }} href={link}>Satin Almak İçin</a>
            </div>
        </div>
    )
}

export default Course