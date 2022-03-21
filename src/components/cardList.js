import React from 'react';
import ratingStar from '../assets/ratingStar.png';
import '../styles/cardStyle.css'

const CardList = ({ stays, input }) => {

    return (
        <div className='mappedCards'>
            {stays.filter(item => {
                if (input === '') {
                    return item
                }
                else if (item.city.toLowerCase().includes(input.toLowerCase())) {
                    return item
                }
                return false;
            }).map((stay) => (
                <div className='container' key={stay.id}>
                    <div className='contents'>
                        <img
                            src={stay.photo}
                            alt={stay.title}
                            className='contents_img'
                        />
                        <div className='card_footer'>
                            {stay.superHost ? (<b className='host'>SUPER HOST</b>) : ''}
                            <div className='card_footer_sub'>
                                <p>{stay.type}</p>
                                {!stay.beds ? '' : <p>{stay.beds === 1 ? ` . ${stay.beds} bed` : ` . ${stay.beds} beds`}</p>}
                            </div>
                            <p><img src={ratingStar} alt='' style={{ 'maxWidth': '100%' }} /> {stay.rating}</p>
                        </div>
                        <p className='title' title={stay.title}>{stay.title}</p>
                    </div>
                </div>
            ))}
        </div>

    )

}
export default CardList;
