import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 1.5rem;

& h2 {
    @media screen and (max-width: 450px){
    font-size: 19px;
    }
}

& span {
    color: #DC143C;
    @media screen and (max-width: 450px){
    font-size: 15px;
    }
}
`;

export const H2 = styled.h2`
@media screen and (max-width: 570px){
    width: 200px;
    font-size: 20px;
}
`;

export const Wrapper = styled.div`
padding: 0rem 4rem;

@media screen and (max-width: 560px) {
    padding: 0rem .5rem;
}
`;