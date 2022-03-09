import React from 'react'
import CardList from './card/cardList';
import { stays } from './stays';
import { Container, Wrapper } from '../styles/HomepageStyle';
import Header from './header/Header';

const HomePage = () => {
    return (
        <Wrapper>
            <Header />
            <Container>
                <h2>Stays in Finland</h2>
                {stays.length > 12 ? '12+ stays' : (stays.length === 1 ? '1 stay' : `${stays.length} stays`)}
            </Container>
            <CardList stays={stays} />
        </Wrapper>
    )
}

export default HomePage
