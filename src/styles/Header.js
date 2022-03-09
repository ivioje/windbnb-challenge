import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;
margin: 0rem 2rem;

@media screen and (max-width: 470px) {
    margin: 0rem 1rem;
}

& >* {
    margin: 2rem 0rem; 
}
`;

export const Drawer = styled.div`
width: 297px;
height: 55px;
background: #FFFFFF;
box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
border-radius: 16px;
display: flex;
align-items: center;
justify-content: space-evenly;

& >*{
    border-right: 1px solid #f2f2f2;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding:0rem .5rem;
    font-size : 15px;
    font-weight: 400;
}
`;

export const Logo = styled.div`
width: 69px;
height: 14px;
`;