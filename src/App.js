import React, { useState } from 'react'
import CardList from './components/cardList';
import { stays } from './components/stays';
import { Container, Wrapper } from './styles/Layout';
import Header from './components/header/Header';
import './App.css';

const App = () => {
    const [openModal, setOpenModal] = useState(false);
    const [click, setClick] = useState(true);
    const [otherClick, setOtherClick] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [data, setData] = useState(stays);
    const [filterLocation, setFilterLocation] = useState('');
    //const [filterGuests,  setFilterGuests] = useState('');

    const handleClick = () => {
        setClick(true)
        setOtherClick(false)
        document.getElementById('guest').style.border = 'none';
        document.getElementById('title').style.border = '1px solid #000';
    }

    const otherHandleClick = () => {
        setOtherClick(true)
        setClick(false)
        document.getElementById('title').style.border = 'none';
        document.getElementById('guest').style.border = '1px solid #000';
    }

    const handleCloseModal = () => {
        setOpenModal(!openModal)
    }

    const onSearchChange = (e) => {
        e.preventDefault()
        setSearchInput(e.target.value)
    }

    const locationClicked = filterLocation.split(',')[0]

    const filterItems = (e) => {
        e.preventDefault();
        if (filterLocation === '') {
            setData(data)
        }

        const filteredStays = stays.filter(stay => stay.city === locationClicked) 

        setData(filteredStays)
    }

    return (
        <Wrapper>
            <Header
                setOpenModal={setOpenModal}
                openModal={openModal}
                click={click}
                otherClick={otherClick}
                setOtherClick={setOtherClick}
                handleClick={handleClick}
                otherHandleClick={otherHandleClick}
                handleCloseModal={handleCloseModal}
                searchChange={onSearchChange}
                setSearchInput={setSearchInput}
                searchInput={searchInput}
                filter={filterItems}
                filterLocation={filterLocation}
                setFilterLocation={setFilterLocation}

            />
            <Container>
                <h2>Stays in <span style={{'color':'#DC143C'}}>{locationClicked}</span> Finland</h2>
                {data.length > 12 ? '12+ stays' : (data.length === 1 ? '1 stay' : `${data.length} stays`)}
            </Container>
            <CardList stays={data} />
        </Wrapper>
    )
}

export default App;
