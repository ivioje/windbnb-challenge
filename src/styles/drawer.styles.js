import styled from "styled-components";

export const Items = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
padding: 2rem;
`;

export const LocationDiv = styled.div`
width: 34%;
height: 60vh;
`;
export const Title = styled.div`
border: 1px solid #4F4F4F;
padding: 0.8rem;
border-radius: 16px;
background: #FFFFFF;
box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
padding-left: 1.6rem;

& input {
    border: none;
    outline: none;
}
`;
export const Title1 = styled.div`
padding: 0.45rem;
background: #FFFFFF;
box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.08);
border-top-right-radius: 16px;
border-bottom-right-radius: 16px;

& button {
padding: .8rem;
border: 1px solid crimson;
background-color: crimson;
color: #fff;
border-radius: 10px;
font-weight: 600;
cursor: pointer;
}
`;

export const LocationList = styled.div`
& p {
    padding: 1.2rem 0rem 1rem 1.5rem;
    color: #4F4F4F;
}
margin-top: 1.2rem;
`;
export const GuestDiv = styled.div`
width: 33%;
height: 60vh;
`;
export const GuestList = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
padding: 1rem;
text-align: left;

& div {
    margin-top: 1.8rem;
}

& div h6{
    font-size: 16px;
}
& div p {
    color: #828282;
}

& div >* {
    padding: .2rem;
}

& button {
background: transparent;
border: 1px solid #4F4F4F;
width: 25px;
height: 25px;
margin: 8px;
border-radius: 5px;
cursor: pointer;
}
`;
export const Adult = styled.div`

`;
export const Children = styled.div`

`;
export const Button1 = styled.div`
padding: .4rem;
border: 1px solid crimson;
background-color: crimson;
color: #fff;
border-radius: 10px;
`;
export const SearchBtn = styled.div`
width: 33%;
height: 60vh;
`;