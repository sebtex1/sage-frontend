import React from 'react';
import styled from 'styled-components';
import Icon from '@mdi/react';
import { Link } from 'react-router-dom'
import { mdiMenu } from '@mdi/js';
import { mdiMenuOpen } from '@mdi/js';
import { mdiFilePlusOutline } from '@mdi/js';
import Slider from './Slider';

const Toolbar = () => {
    const [openMenu, setOpenMenu] = React.useState(false);
    const [openAccount, setOpenAccount] = React.useState(false);
    
    // Fonction activant le menu nav
    const handleMenu = () => {
        setOpenMenu(!openMenu);
    }
    const handleAccount = () => {
        setOpenAccount(!openAccount);
    }

    return (
        <>
            <Div>
                <Side>
                    {
                        openMenu ?
                        <Icon path={mdiMenuOpen} size={2} color="black" onClick={handleMenu} /> :
                        <Icon path={mdiMenu} size={2} color="black" onClick={handleMenu} />
                    }
                    <LinkStyled to="/"><Img src="https://signin.sso.sage.com/brands/default/images/sage-logo.png" alt="Logo sage" /></LinkStyled>
                    <p>Gestion commerciale &gt; Produits</p>
                </Side>
                <Side>
                    <CreateDocument>
                        <Icon path={mdiFilePlusOutline} size={1} color="black" />
                        <P>Ajouter un document</P>
                    </CreateDocument>
                    <ImgAccount src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" onClick={handleAccount} />
                </Side>
            </Div>
            <Slider open={openMenu} handleMenu={handleMenu} />
            <Slider open={openAccount} handleMenu={handleAccount} side="right" />
        </>
    );
}
export default Toolbar;


const Div = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 3px solid #ccc;
    padding: 10px;
`;

const Side = styled.div`
    display: flex;
`;

// const BorderMenu = styled.div`
//     border: 1px solid black;
//     border-radius: 5px;
//     padding: 0 10px 0 10px;
//     margin: 0 20px 0 0;
//     cursor: pointer;
// `;

const Img = styled.img`
    display: block;
    width: 50px;
    height: 25px;
`;

const LinkStyled = styled(Link)`
    text-decoration: none;
    color: black;
    margin: auto 10px;
    display: block;
    width: 50px;
    height: 25px;
`;

const ImgAccount = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

const CreateDocument = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0 10px 0 10px;
    margin: 0 20px 0 0;
    cursor: pointer;
`;

const P = styled.p`
    margin-left: 10px;
`;
