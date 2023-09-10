import styled from 'styled-components';

const SelectForm = ({ label, id, name, list, value, onChange }) => {
    return (
        <div>
            <Label htmlFor={id}>{label}</Label>
            <Select id={id} name={name} value={value} onChange={onChange}>
                { list?.length > 0 ? list.map((item, index) => <option key={index} value={item}>{item}</option>) : null }
            </Select>
        </div>
    );
}
export default SelectForm;

const Label = styled.label`
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
    text-align: left;
`;

const Select = styled.select`
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    width: 100%;
`;