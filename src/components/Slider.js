import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import Icon from '@mdi/react';
import { mdiChevronDoubleLeft } from '@mdi/js';
import { mdiAlphaGBox } from '@mdi/js';
import { mdiAlphaCBox } from '@mdi/js';
import { mdiAlphaPBox } from '@mdi/js';
import { mdiFileDocumentOutline  } from '@mdi/js';
import { mdiAccountOutline } from '@mdi/js';
import { mdiShoppingOutline } from '@mdi/js';
import { mdiWarehouse } from '@mdi/js';
import { mdiCogOutline } from '@mdi/js';
import { mdiPower } from '@mdi/js';

const Slider = ({ open, handleMenu, side = 'left' }) => {
    return (
        <>
            { side === 'left' ?
                <SliderContainerLeft $left={open ? '25px' : '-230px'}>
                    <TopSlider>
                        <HeaderSlider>
                            <Img src="https://signin.sso.sage.com/brands/default/images/sage-logo.png" alt="Logo sage" />
                            <Icon path={mdiChevronDoubleLeft} size={1} color="black" onClick={() => { handleMenu() } } />
                        </HeaderSlider>
                        <BorderBottom />
                        <LinksSlider>
                            <LinkContainer>
                                <Icon path={mdiAlphaGBox} size={1} color="green" />
                                <P>Gestion commercial</P>
                            </LinkContainer>
                            <LinkContainer>
                                <Icon path={mdiAlphaCBox} size={1} color="green" />
                                <P>Comptabilité</P>
                            </LinkContainer>
                            <LinkContainer>
                                <Icon path={mdiAlphaPBox} size={1} color="green" />
                                <P>Paie</P>
                            </LinkContainer>
                        </LinksSlider>
                        <BorderBottom />
                        <LinksSlider>
                            <LinkContainer>
                                <Icon path={mdiFileDocumentOutline } size={1} color="black" />
                                <P>Documents</P>
                            </LinkContainer>
                            <LinkContainer>
                                <Icon path={mdiAccountOutline } size={1} color="black" />
                                <P>Tiers</P>
                            </LinkContainer>
                            <LinkContainer>
                                <Icon path={mdiShoppingOutline } size={1} color="black" />
                                <P>Produits</P>
                            </LinkContainer>
                            <LinkContainer>
                                <Icon path={mdiWarehouse } size={1} color="black" />
                                <P>Dépôts</P>
                            </LinkContainer>
                        </LinksSlider>
                    </TopSlider>
                    <BottomSlider>
                        <h1>Footer</h1>
                    </BottomSlider>
                </SliderContainerLeft> : 
                <SliderContainerRight $right={open ? '25px' : '0'}>
                    <TopSlider>
                        <LinksSlider>
                            <LinkContainer>
                                <Icon path={mdiCogOutline} size={1} color="black" />
                                <LinkStyled to="/settings">Settings</LinkStyled>
                            </LinkContainer>
                            <LinkContainer>
                                <Icon path={mdiPower} size={1} color="black" />
                                <P>Déconnexion</P>
                            </LinkContainer>
                        </LinksSlider>
                    </TopSlider>
                </SliderContainerRight> 
            }
        </>
    )
};
export default Slider;

const SliderContainerLeft = styled.div`
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

const SliderContainerRight = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    top: 100px;
    right: ${props => props.$right ? props.$right : '0'};
    opacity: ${props => props.$right === '25px' ? '1' : '0'};
    visibility: ${props => props.$right === '25px' ? 'visible' : 'hidden'};
    width: 200px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 2px -2px 10px black;
    transition: 0.5s right, 0.5s opacity, 0.5s visibility;
`;

const TopSlider = styled.div`
    display: flex;
    flex-direction: column;
`;

const BorderBottom = styled.div`
    border-bottom: 1px solid #ccc;
`;

const HeaderSlider = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px 20px 10px;
    /* border-bottom: 1px solid #ccc; */
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
    padding: 10px;
    /* border-bottom: 1px solid #ccc; */
`;

const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const LinkStyled = styled(Link)`
    margin-left: 10px;
    text-decoration: none;
    color: black;
`;

const P = styled.p`
    margin-left: 10px;
`;

const BottomSlider = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 1px solid #000;
`;