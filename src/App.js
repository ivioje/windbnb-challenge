import React, { useState } from 'react'
import CardList from './components/card/cardList';
import { stays } from './components/stays';
import { Container, Wrapper } from './styles/HomepageStyle';
import Header from './components/header/Header';
import './App.css';

const App = () => {
    const [openModal, setOpenModal] = useState(false);
    const [click, setClick] = useState(true);
    const [otherClick, setOtherClick] = useState(false);

    const handleClick = () => {
        setClick(!click)
        setOtherClick(false)
        document.getElementById('guest').style.border = 'none';
        document.getElementById('title').style.border = '1px solid #000';
    }
    const otherHandleClick = () => {
        setOtherClick(!otherClick)
        setClick(false)
        document.getElementById('title').style.border = 'none';
        document.getElementById('guest').style.border = '1px solid #000';
    }
    const handleCloseModal = () => {
        setOpenModal(!openModal)
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
            />
            <Container>
                <h2>Stays in Finland</h2>
                {stays.length > 12 ? '12+ stays' : (stays.length === 1 ? '1 stay' : `${stays.length} stays`)}
            </Container>
            <CardList stays={stays} />
        </Wrapper>
    )
}

export default App;
