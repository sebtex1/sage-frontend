import React from 'react';
import styled from 'styled-components';

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
                    <button onClick={handleMenu}>menu</button>
                    <Img src="https://signin.sso.sage.com/brands/default/images/sage-logo.png" alt="Logo sage" />
                    <p>Gestion commerciale &gt; Produits</p>
                </Side>
                <Side>
                    <p>test</p>
                </Side>
            </Div>
            <Slider $left={open ? '50px' : '-230px'}>
                <TopSlider>
                    <HeaderSlider>
                        <Img src="https://signin.sso.sage.com/brands/default/images/sage-logo.png" alt="Logo sage" />
                        <button onClick={handleMenu}>menu</button>
                    </HeaderSlider>
                    <LinksSlider>
                        <p>Gestion commercial</p>
                        <p>Comptabilité</p>
                        <p>Paie</p>
                    </LinksSlider>
                    <LinksSlider>
                        <p>Documents</p>
                        <p>Tiers</p>
                        <p>Produits</p>
                        <p>Dépôts</p>
                    </LinksSlider>
                </TopSlider>
                <BottomSlider>
                    <h1>Footer</h1>
                </BottomSlider>
            </Slider>
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

const Slider = styled.div`
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
    padding: 10px;
    border-bottom: 1px solid #ccc;
`;

const LinksSlider = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-bottom: 1px solid #ccc;
`;

const BottomSlider = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 1px solid #000;
`;
