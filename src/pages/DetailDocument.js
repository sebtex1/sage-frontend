import React from "react";
import styled from "styled-components";
import InputForm from "../components/InputForm";
import PageColumn from "../components/PageColumn";

const DetailDocument = () => {
    return (
        <>
            <Div>
                <PageColumn>
                    <InputForm label="Tiers" type="text" id="tiers" name="tiers" placeholder="" />
                    <InputForm label="Adresse de liv" type="text" id="adresse_liv" name="adresse_liv" placeholder="" />
                    <InputForm label="Contact" type="text" id="contact" name="contact" placeholder="" />
                </PageColumn>
                <PageColumn>
                    <InputForm label="Date" type="text" id="date" name="date" placeholder="" />
                    <InputForm label="Date de liv" type="text" id="date_liv" name="date_liv" placeholder="" />
                </PageColumn>
                <PageColumn>
                    <InputForm label="Référence" type="text" id="reference" name="reference" placeholder="" />
                    <InputForm label="Taxe" type="text" id="taxe" name="taxe" placeholder="" />
                    <InputForm label="Depôt" type="text" id="depot" name="depot" placeholder="" />
                </PageColumn>
            </Div>
            <Div>
                <h1>Test</h1>
            </Div>
        </>
    );
}
export default DetailDocument;

const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
`;