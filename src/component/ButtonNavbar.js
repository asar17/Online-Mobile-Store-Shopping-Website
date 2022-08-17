import styled from 'styled-components'
const ButtonNavbar=styled.button`
text-tranform:capitalize;
font-size:1.4rem;
background:transparent;
border:0.05rem solid var(--lightBlue);
border-color:${props=>props.card?"var(--mainYellow)":"var(--lightBlue)"};
color:${props=>props.card?"var(--mainYellow)":"var(--lightBlue)"};
border-radius:0.5rem;
padding:0.2rem 0.5rem;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
transition:all 0.5s ease-in-out;
&:hover{
    background:${(props)=>
        props.card?"var(--mainYellow)":"var(--lightBlue)"};
    color:${(props)=>props.card?"var(--lightBlue)":"white"};
    transition:all 1s ease-out;
}
&:focus{
    outline:none;
}


`
export default ButtonNavbar;