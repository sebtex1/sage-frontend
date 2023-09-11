import styled from 'styled-components';

const SwitchForm = ({ label, id, name, value = false, onChange }) => {
    return (
        <div>
            <Label htmlFor={id}>{label}</Label>
            <Switch>
                <Input type="checkbox" defaultChecked={value} value={value} onClick={() => {onChange()}} />
                <Span id={id} name={name} />
            </Switch>
        </div>
    );
}
export default SwitchForm;

const Label = styled.label`
    font-weight: bold;
    display: block;
    margin-bottom: 20px;
    text-align: left;
`;

const Switch = styled.label`
    position: relative;
    display: inline-block;
    width: 50px;
    height: 25px;
`;

const Span = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 34px;
    &:before {
        position: absolute;
        content: "";
        height: 18px;
        width: 18px;
        left: 3px;
        bottom: 4px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 50%;
    }
`;

const Input = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + ${Span} {
        background-color: #2196F3;
    }
    &:focus + ${Span} {
        box-shadow: 0 0 1px #2196F3;
    }
    &:checked + ${Span}:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }
`;