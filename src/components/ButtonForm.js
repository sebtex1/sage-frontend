import styled from 'styled-components';

const ButtonForm = ({ type = '', value }) => {
    return (
        <Button type={type}>{value}</Button>
    );
}
export default ButtonForm;

const Button = styled.button`
    background-color: rgb(0, 126, 69);
    border: none;
    border-radius: 25px;
    color: white;
    padding: 12px 20px;
    margin: 8px 0;
    width: 100%;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        background-color: rgb(0, 101, 55);
    }
`;