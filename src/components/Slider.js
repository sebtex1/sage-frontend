import React from 'react';
import styled from 'styled-components';
import Icon from '@mdi/react';
import { mdiChevronDoubleLeft } from '@mdi/js';
import { mdiAlphaGBox } from '@mdi/js';
import { mdiAlphaCBox } from '@mdi/js';
import { mdiAlphaPBox } from '@mdi/js';
import { mdiFileDocumentOutline  } from '@mdi/js';
import { mdiAccountOutline } from '@mdi/js';
import { mdiShoppingOutline } from '@mdi/js';
import { mdiWarehouse } from '@mdi/js';

const Slider = ({ open, handleMenu }) => {
    return (
        <SliderContainer $left={open ? '50px' : '-230px'}>
            <TopSlider>
                <HeaderSlider>
                    <Img src="https://signin.sso.sage.com/brands/default/images/sage-logo.png" alt="Logo sage" />
                    <Icon path={mdiChevronDoubleLeft} size={1} color="black" onClick={handleMenu} />
                </HeaderSlider>
                <LinksSlider>
                    <Link>
                        <Icon path={mdiAlphaGBox} size={1} color="green" />
                        <P>Gestion commercial</P>
                    </Link>
                    <Link>
                        <Icon path={mdiAlphaCBox} size={1} color="green" />
                        <P>Comptabilité</P>
                    </Link>
                    <Link>
                        <Icon path={mdiAlphaPBox} size={1} color="green" />
                        <P>Paie</P>
                    </Link>
                </LinksSlider>
                <LinksSlider>
                    <Link>
                        <Icon path={mdiFileDocumentOutline } size={1} color="black" />
                        <P>Documents</P>
                    </Link>
                    <Link>
                        <Icon path={mdiAccountOutline } size={1} color="black" />
                        <P>Tiers</P>
                    </Link>
                    <Link>
                        <Icon path={mdiShoppingOutline } size={1} color="black" />
                        <P>Produits</P>
                    </Link>
                    <Link>
                        <Icon path={mdiWarehouse } size={1} color="black" />
                        <P>Dépôts</P>
                    </Link>
                </LinksSlider>
            </TopSlider>
            <BottomSlider>
                <h1>Footer</h1>
            </BottomSlider>
        </SliderContainer>
    )
};
export default Slider;

const SliderContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    top: 100px;
    left: ${props => props.$left ? props.$left : '0'};
    width: 200px;
    height: 700px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 2px -2px 10px black;
    transition: 0.5s;
`;

const TopSlider = styled.div`
    display: flex;
    flex-direction: column;
`;

const HeaderSlider = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px 20px 10px;
    border-bottom: 1px solid #ccc;
`;

const Img = styled.img`
    display: block;
    width: 50px;
    height: 25px;
    margin: auto 10px;
`;

const LinksSlider = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 10px 20px 10px;
    border-bottom: 1px solid #ccc;
`;

const Link = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const P = styled.p`
    margin-left: 10px;
`;

const BottomSlider = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 1px solid #000;
`;