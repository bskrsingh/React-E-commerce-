import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1rem;
background:transparent;
border:0.05rem solid var(--lightBlue);
border-color:var(--lightBlue);
color:var(--lightBlue);
border-radius:0.5rem;
padding:0.2rem 0.5rem;
margin:0.2rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
    background:var(--lightBlue);color:var(--mainBlue);color:var(--mainWhite)
&:focus{
    outline:none;
}    
}
`
