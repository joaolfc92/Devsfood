import styled from 'styled-components'


export const Container = styled.div`
    background-color:#136713;
    border-radius:10px;
    padding:20px;
    display:flex;
    justify-content: space-between;
    align-items:center;



`;

export const Logo = styled.img`
    height:70px;
    width:auto;
`;


export const SearchInput = styled.input`
    border:0;
    border-radius:25px;
    width:${props=>props.active ? 300 : 0};
    height:50px;
    background-color:#FFF;
    outline:0;
    background-image:url('assets/search.png');
    background-size:30px;
    background-repeat:no-repeat;
    background-position:10px center;
    padding-left:50px;
    transition: all ease 0.2s;
    font-size:15px;
    cursor:pointer;

    &:focus{
        cursor:text
    }
`;