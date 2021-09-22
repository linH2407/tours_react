import React, { useState } from 'react';

const Tour = ({id, image, info, price, name, removeTour}) => {
    const [readMore, setReadMore] = useState(false);
    return (
        <article className='tour-container'>
            <img src={image} alt={name}/>
            <footer>
                <div>
                    <h4>{name}</h4>
                    <h4>${price}</h4>
                </div>
                <p>{readMore ? info : `${info.substring(0, 200)}...`}
                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? 'show less' : 'read more'}
                    </button>
                </p>
                <button className='btn-remove' onClick={() => removeTour(id)}>not interested</button>
            </footer>
        </article>
    )
};
export default Tour;
