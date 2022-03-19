import React, { useState } from 'react';
import Search from './search';
import { Items, LocationDiv, Title, LocationList, GuestDiv, GuestList, Adult, Children, SearchBtn } from '../../../styles/drawer.styles'


const DrawerItems = () => {
    const [click, setClick] = useState(true);
    const [otherClick, setOtherClick] = useState(false);

    const handleClick = () => {
        setClick(!click)
        setOtherClick(false)
    }
    const otherHandleClick = () => {
        setOtherClick(!otherClick)
        setClick(false)
    }

    return (
        <Items>
            <LocationDiv onClick={handleClick}>
                <Title style={{ 'borderTopLeftRadius': '16px', 'borderBottomLeftRadius': '16px' }}>
                    <h6>LOCATION</h6>
                    <input type='text' placeholder='Add location' />
                </Title>
                {
                    click ?
                        <LocationList>
                            <p>Helsink, Finland</p>
                            <p>Turku, Finland</p>
                            <p>Oulu, Finland</p>
                            <p>Vaasa, Finland</p>
                        </LocationList>
                        : null
                }
            </LocationDiv>

            <GuestDiv onClick={otherHandleClick}>
                <Title>
                    <h6>GUESTS</h6>
                    <input type='text' placeholder='Add guests' />
                </Title>
                {
                    otherClick ?
                        <GuestList className='guest'>
                            <Adult>
                                <h6>Adults</h6>
                                <p>Ages 13 or above</p>
                                <button>-</button>0<button>+</button>
                            </Adult>
                            <Children>
                                <h6>Children</h6>
                                <p>Ages 2 - 12</p>
                                <button>-</button>0<button>+</button>
                            </Children>
                        </GuestList>
                        : null
                }
            </GuestDiv>

            <SearchBtn>
                <Search />
            </SearchBtn>
        </Items>
    )
}

export default DrawerItems;
