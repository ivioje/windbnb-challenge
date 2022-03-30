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

    useEffect(() => {
        setData(data)
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

    const A = data.filter(e => e.city === "Helsinki")
    const B = data.filter(e => e.city === "Turku")
    const C = data.filter(e => e.city === "Oulu")
    const D = data.filter(e => e.city === "Vaasa")


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
        e.preventDefault();
        if (filterLocation === '') {
            setData(data)
        } else if (filterLocation.split(',')[0] === 'Helsinki') {
            setData(A)
        } else if (filterLocation.split(',')[0] === 'Turku') {
            setData(B)
        } else if (filterLocation.split(',')[0] === 'Oulu') {
            setData(C)
        } else if (filterLocation.split(',')[0] === 'Vaasa') {
            setData(D)
        }
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
                <h2>Stays in Finland</h2>
                {data.length > 12 ? '12+ stays' : (data.length === 1 ? '1 stay' : `${data.length} stays`)}
            </Container>
            <CardList stays={data} />
        </Wrapper>
    )
}

export default App;
