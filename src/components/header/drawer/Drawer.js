import React, { useState } from 'react';
import Search from './search';
import {
    Items,
    Top,
    H6,
    LocationDiv,
    GuestTitle,
    LocTitle,
    LocationList,
    GuestDiv,
    SearchBtn
} from '../../../styles/drawer.styles'
import GuestsList from './Button';


const DrawerItems = ({ click,
    otherClick,
    handleClick,
    otherHandleClick,
    handleCloseModal,
    searchChange,
    setSearchInput,
    searchInput
}) => {

    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);
    // const [location] = useState([
    //     {
    //         'id': 0,
    //         'stay': 'Helsink, Finland'
    //     },
    //     {
    //         'id': 1,
    //         'stay': 'Helsink, Finland'
    //     },
    //     {
    //         'id': 2,
    //         'stay': 'Helsink, Finland'
    //     },
    //     {
    //         'id': 3,
    //         'stay': 'Helsink, Finland'
    //     }
    // ])

    const handleIncrementA = () => {
        setCountA(countA + 1)
    }
    const handleDecrementA = () => {
        setCountA(countA - 1)
    }
    const handleIncrementB = () => {
        setCountB(countB + 1)
    }
    const handleDecrementB = () => {
        setCountB(countB - 1)
    }
    let count = countA + countB



    const titleStyle = {
        borderTopLeftRadius: '16px',
        borderBottomLeftRadius: '16px',
        border: '1px solid #4F4F4F',
    }

    return (
        <>
            <Items>
                <Top>
                    <H6>Edit your search</H6>
                    <b onClick={handleCloseModal}>X</b>
                </Top>
                <LocationDiv onClick={handleClick}>
                    <LocTitle style={titleStyle} id='title'>
                        <h6>LOCATION</h6>
                        <form>
                            <input
                                type='text'
                                placeholder='Add location'
                            />
                        </form>
                    </LocTitle>
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
                    <GuestTitle id='guest'>
                        <h6>GUESTS</h6>
                        {count === 0 ? <p>Add guests</p> :
                            <input value={count === 1 ? `${count} guest` : `${count} guests`} readOnly ></input>

                        }    </GuestTitle>
                    {
                        otherClick ?
                            <GuestsList
                                incrementA={handleIncrementA}
                                decrementA={handleDecrementA}
                                incrementB={handleIncrementB}
                                decrementB={handleDecrementB}
                                countA={countA} countB={countB}
                            />
                            : null
                    }
                </GuestDiv>

                <SearchBtn>
                    <Search searchChange={searchChange} />
                </SearchBtn>
            </Items>

        </>
    )
}

export default DrawerItems;
