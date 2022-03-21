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
    const [data, setData] = useState([]);

    useEffect(() => {
        setData([...stays])
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
