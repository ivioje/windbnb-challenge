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
                        <input type='search' placeholder='Add location' value={searchInput} onChange={(e) =>setSearchInput(e.target.value)} />
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
                        <input value={countA + countB > 0 ? countA + countB : 'Add guests'} readOnly ></input>
                    </GuestTitle>
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
                    <Search searchChange={searchChange}/>
                </SearchBtn>
            </Items>

        </>
    )
}

export default DrawerItems;
