import React, { useState, useEffect } from 'react'
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
    const [filterLocation, setFilterLocation] = useState('')

    // I feel there no point for this since you didn't check for anything
    let filteredStays = data.filter(stay => {
        return stay;
    })

    useEffect(() => {
        setData(filteredStays)
    }, [])

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

    const A = filteredStays.filter(e => e.city === "Helsinki")
    const B = filteredStays.filter(e => e.city === "Turku")
    const C = filteredStays.filter(e => e.city === "Oulu")
    const D = filteredStays.filter(e => e.city === "Vaasa")


    //  const filterItems = () => {
    //      if(filteredStays.map(e => e.city === 'Helsinki')) {
    //          return data.filter(e => e.city === 'Helsinki')
    //      }
    //      else if(filteredStays.map(e => e.city === 'Turku')) {
    //          return data.filter(e => e.city === 'Turku')
    //      }
    //      else if (filteredStays.map(e => e.city === 'Oulu')){
    //          return data.filter(e => e.city === 'Oulu')
    //      }
    //      else if(filteredStays.map(e => e.city === 'Vaasa')) {
    //          return data.filter(e => e.city === 'Vaasa')
    //      }
    //      else {
    //          return filteredStays
    //      }
    //  }
    const filterItems = (e) => {
        console.log(filterLocation.split(",")[0])
        e.preventDefault();
        if (filterLocation === '') {
            setData(filteredStays)
        } else if (filterLocation.split(",")[0] === 'Helsinki') {
            setData(A)
        } else if (filterLocation.split(",")[0] === 'Turku') {
            setData(B)
        } else if (filterLocation.split(",")[0] === 'Oulu') {
            setData(C)
        } else if (filterLocation.split(",")[0] === 'Vaasa') {
            setData(D)
        }
    }
    // const showB = () => setData(B)
    // const showC = () => setData(C)
    // const showD = () => setData(D)

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
                // A={showA}
                // B={showB}
                // C={showC}
                // D={showD}
                filter={filterItems}
                filterLocation={filterLocation}
                setFilterLocation={setFilterLocation}

            />
            <Container>
                <h2>Stays in Finland</h2>
                {filteredStays.length > 12 ? '12+ stays' : (filteredStays.length === 1 ? '1 stay' : `${filteredStays.length} stays`)}
            </Container>
            <CardList stays={filteredStays} />
        </Wrapper>
    )
}

export default App;
