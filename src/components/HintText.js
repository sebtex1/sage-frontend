import React from 'react';
import styled from 'styled-components';

const HintText = ({ text}) => {
    return (
        <Hint dangerouslySetInnerHTML={{__html: text}} />
    );
}
export default HintText;

const Hint = styled.p`
    color: #7C7C7C;
    font-size: 12px;
    margin: 5px 0;
    background-color: #EBEBEB;
    border-radius: 5px;
    padding: 10px;
`;