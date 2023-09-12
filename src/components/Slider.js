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
    const [isConnected, setIsConnected] = React.useState('');

    React.useEffect(() => {
        if (isConnected === ''){
            setIsConnected(localStorage.getItem('id_token'));
        }
    }, [isConnected])

    return (
        <>
            { side === 'left' ?
                <SliderContainerLeft $left={open ? '0' : '-330px'}>
                    <TopSlider>
                        <HeaderSlider>
                            <LinkStyled to="/" onClick={() => { handleMenu() } }>
                                <Img src="https://signin.sso.sage.com/brands/default/images/sage-logo.png" alt="Logo sage" />
                            </LinkStyled>
                            <Icon style={{cursor: 'pointer'}} path={mdiChevronDoubleLeft} size={1} color="black" onClick={() => { handleMenu() } } />
                        </HeaderSlider>
                        <BorderBottom />
                        <LinksSlider>
                            <LinkStyled to="/gestionCommerciale" onClick={() => { handleMenu() } }>
                                <LinkContainer>
                                    <Icon path={mdiAlphaGBox} size={1} color="green" />
                                    <P>Gestion commerciale</P>
                                </LinkContainer>
                            </LinkStyled>
                            <LinkContainer onClick={() => { handleMenu() } }>
                                <Icon path={mdiAlphaCBox} size={1} color="green" />
                                <P>Comptabilité</P>
                            </LinkContainer>
                            <LinkContainer onClick={() => { handleMenu() } }>
                                <Icon path={mdiAlphaPBox} size={1} color="green" />
                                <P>Paie</P>
                            </LinkContainer>
                        </LinksSlider>
                        <BorderBottom />
                        <LinksSlider>
                            <LinkContainer onClick={() => { handleMenu() } }>
                                <Icon path={mdiFileDocumentOutline } size={1} color="black" />
                                <P>Documents</P>
                            </LinkContainer>
                            <LinkContainer onClick={() => { handleMenu() } }>
                                <Icon path={mdiAccountOutline } size={1} color="black" />
                                <P>Tiers</P>
                            </LinkContainer>
                            <LinkContainer onClick={() => { handleMenu() } }>
                                <Icon path={mdiShoppingOutline } size={1} color="black" />
                                <P>Produits</P>
                            </LinkContainer>
                            <LinkContainer onClick={() => { handleMenu() } }>
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
                    {
                        isConnected
                        ? 
                            <TopSlider>
                                <LinksSlider>
                                    <LinkContainer onClick={() => { handleMenu() }}>
                                        <Icon path={mdiCogOutline} size={1} color="black" />
                                        <LinkStyled to="/settings">Settings</LinkStyled>
                                    </LinkContainer>
                                <LinkStyled to={`https://localhost:7000/connect/endsession?id_token_hint=${isConnected}&post_logout_redirect_uri=http://localhost:3000/signout-oidc`}>
                                    <LinkContainer onClick={() => { handleMenu() }}>
                                        <Icon path={mdiPower} size={1} color="black" />
                                        <P>Déconnexion</P>
                                    </LinkContainer>
                                </LinkStyled>
                                </LinksSlider>
                            </TopSlider>
                        : 
                        <TopSlider>
                            <LinksSlider>
                                <LinkStyled to="https://localhost:7000/connect/authorize?client_id=WebApplication&scope=openid super_admin admin user offline_access&response_type=code&redirect_uri=http://localhost:3000/signin-oidc&prompt=login">
                                    <LinkContainer onClick={() => { handleMenu() }}>
                                        <Icon path={mdiPower} size={1} color="black" />
                                        <P>Connexion</P>
                                    </LinkContainer>
                                </LinkStyled>
                            </LinksSlider>
                        </TopSlider>
                    }
                    
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
    padding: 0 10px;
    top: 0;
    left: ${props => props.$left ? props.$left : '0'};
    width: 300px;
    height: 100vh;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 4px black;
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
    width: 300px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0px 0px 4px black;
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
    padding: 20px 10px;
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
    cursor: pointer;
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