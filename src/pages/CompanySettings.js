import React from 'react';
import InputForm from '../components/InputForm';
import CompanyService from '../services/CompanyService';
import ButtonForm from '../components/ButtonForm';

const CompanySettings = () => {
    const [companyMe, setCompanyMe] = React.useState({});
    const [activity, setActivity] = React.useState(companyMe.activity);
    const [legalStatus, setLegalStatus] = React.useState(companyMe.legalStatus);
    const [capital, setCapital] = React.useState(companyMe.capital);
    const [address, setAddress] = React.useState(companyMe.address);
    const [complement, setComplement] = React.useState(companyMe.complement);
    const [zip, setZip] = React.useState(companyMe.zip);
    const [city, setCity] = React.useState(companyMe.city);
    const [region, setRegion] = React.useState(companyMe.region);
    const [country, setCountry] = React.useState(companyMe.country);
    const [phone, setPhone] = React.useState(companyMe.phone);
    const [email, setEmail] = React.useState(companyMe.email);
    const [website, setWebsite] = React.useState(companyMe.website);
    const [siret, setSiret] = React.useState(companyMe.siret);
    const [vatIdentifier, setVatIdentifier] = React.useState(companyMe.vatIdentifier);
    const [nafCode, setNafCode] = React.useState(companyMe.nafCode);
    const disableUpdate = !localStorage.getItem('scope')?.includes('admin');
    React.useEffect(() => {
        CompanyService.GetCompanyMe(setCompanyMe);
    }, [])

    React.useEffect(() =>{
        if (companyMe){
            setActivity(companyMe.activity)
            setLegalStatus(companyMe.legalStatus)
            setCapital(companyMe.capital)
            setAddress(companyMe.address)
            setComplement(companyMe.complement)
            setZip(companyMe.zip)
            setCity(companyMe.city)
            setRegion(companyMe.region)
            setCountry(companyMe.country)
            setPhone(companyMe.phone)
            setEmail(companyMe.email)
            setWebsite(companyMe.website)
            setSiret(companyMe.siret)
            setVatIdentifier(companyMe.vatIdentifier)
            setNafCode(companyMe.nafCode)
        }
    }, [companyMe])

    const SaveCompany = (event) => {
        event.preventDefault();
        const company = {
            id: companyMe.id,
            name: companyMe.name,
            activity: companyMe.activity,
            legalStatus: companyMe.legalStatus,
            capital: companyMe.capital,
            address: companyMe.address,
            complement: companyMe.complement,
            zip: companyMe.zip,
            city: companyMe.city,
            region: companyMe.region,
            country: companyMe.country,
            phone: companyMe.phone,
            email: companyMe.email,
            website: companyMe.website,
            siret: companyMe.siret,
            vatIdentifier: companyMe.vatIdentifier,
            nafCode: companyMe.nafCode,
            maxUsers: companyMe.maxUsers
        }
        CompanyService
        .UpdateCompany(company)
        .then(result => {
            console.log('result-UpdateUser', result);
            if (result.status === 204)
            {
                alert("OK")
            }
        })
        .catch(error => {
            console.log('error-UpdateUser', error);
            alert(error.response.data)
        })
    }

    return (
        <div>
            <form onSubmit={SaveCompany}>
                <h2>Identification</h2>
                <InputForm label='Nom' type="text" id="lastname" name="lastname" value={companyMe.name} disabled={true}></InputForm>
                <InputForm label='Activité' type="text" id="activity" name="activity" value={activity} onChange={x => setActivity(x.target.value)} disabled={disableUpdate}></InputForm>
                <InputForm label='Forme juridique' type="text" id="legalStatus" name="legalStatus" value={legalStatus} onChange={x => setLegalStatus(x.target.value)} disabled={disableUpdate}></InputForm>
                <InputForm label='Capital' type="text" id="capital" name="capital" value={capital} onChange={x => setCapital(x.target.value)} disabled={disableUpdate}></InputForm>

                
                <h2>Coordonnées</h2>
                <InputForm label='Adresse' type="text" id="address" name="address" value={address} onChange={x => setAddress(x.target.value)} disabled={disableUpdate}></InputForm>
                <InputForm label='Complément' type="text" id="complement" name="complement" value={complement} onChange={x => setComplement(x.target.value)} disabled={disableUpdate}></InputForm>
                <InputForm label='Code postal' type="text" id="zip" name="zip" value={zip} onChange={x => setZip(x.target.value)} disabled={disableUpdate}></InputForm>
                <InputForm label='Ville' type="text" id="city" name="city" value={city} onChange={x => setCity(x.target.value)} disabled={disableUpdate}></InputForm>
                <InputForm label='Région' type="text" id="region" name="region" value={region} onChange={x => setRegion(x.target.value)} disabled={disableUpdate}></InputForm>
                <InputForm label='Pays' type="text" id="country" name="country" value={country} onChange={x => setCountry(x.target.value)} disabled={disableUpdate}></InputForm>

                <h2>Télécommunication</h2>
                <InputForm label='Téléphone' type="text" id="phone" name="phone" value={phone} onChange={x => setPhone(x.target.value)} disabled={disableUpdate}></InputForm>
                <InputForm label='Email' type="text" id="email" name="email" value={email} onChange={x => setEmail(x.target.value)} disabled={disableUpdate}></InputForm>
                <InputForm label='Site web' type="text" id="website" name="website" value={website} onChange={x => setWebsite(x.target.value)} disabled={disableUpdate}></InputForm>

                
                <h2>Immatriculation</h2>
                <InputForm label='N° SIRET' type="text" id="siret" name="siret" value={siret} onChange={x => setSiret(x.target.value)} disabled={disableUpdate}></InputForm>
                <InputForm label='Identifiant TVA' type="text" id="vatIdentifier" name="vatIdentifier" value={vatIdentifier} onChange={x => setVatIdentifier(x.target.value)} disabled={disableUpdate}></InputForm>
                <InputForm label='Code NAF' type="text" id="nafCode" name="nafCode" value={nafCode} onChange={x => setNafCode(x.target.value)} disabled={disableUpdate}></InputForm>

                {disableUpdate ? null : <ButtonForm type='submit' value='Enregistrer'></ButtonForm>}
            </form>
        </div>
    );
};

export default CompanySettings;