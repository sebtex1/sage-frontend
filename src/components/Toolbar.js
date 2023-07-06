import React from 'react';
import styled from 'styled-components';
import Icon from '@mdi/react';
import { mdiMenu } from '@mdi/js';
import { mdiMenuOpen } from '@mdi/js';
import { mdiFilePlusOutline } from '@mdi/js';
import { mdiAccountCircleOutline } from '@mdi/js';
import Slider from './Slider';

const Toolbar = () => {
    const [open, setOpen] = React.useState(false);
    
    // Fonction activant le menu
    const handleMenu = () => {
        setOpen(!open);
    }

    return (
        <>
            <Div>
                <Side>
                    {
                         open ?
                         <Icon path={mdiMenuOpen} size={2} color="black" onClick={handleMenu} /> :
                         <Icon path={mdiMenu} size={2} color="black" onClick={handleMenu} />
                    }
                    <Img src="https://signin.sso.sage.com/brands/default/images/sage-logo.png" alt="Logo sage" />
                    <p>Gestion commerciale &gt; Produits</p>
                </Side>
                <Side>
                    <CreateDocument>
                        <Icon path={mdiFilePlusOutline} size={1} color="black" />
                        <P>Ajouter un document</P>
                    </CreateDocument>
                    <Icon path={mdiAccountCircleOutline} size={2} color="black" />
                </Side>
            </Div>
            <Slider open={open} handleMenu={handleMenu} />
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

const Img = styled.img`
    display: block;
    width: 50px;
    height: 25px;
    margin: auto 10px;
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
