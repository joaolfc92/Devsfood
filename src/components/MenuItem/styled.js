import styled from 'styled-components';

export const LinkArea = styled.a`
    display:flex;
    justify-content:center;
    align-items:center;
    height:60px;
    width:60px;
    background-color:${props => props.active ?  '#084D0B'   : ''  };
    border-radius:10px;
    margin-bottom:10px;

`;


export const LinkIcon = styled.img`
    width: 34px;
    height:auto;
`;

