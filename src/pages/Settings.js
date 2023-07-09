import { useState, useEffect } from 'react';
import styled from 'styled-components';
import PageColumn from '../components/PageColumn';

// q: j'ai une erreur 'too many re-renders' sur la ligne 30, je ne comprends pas pourquoi
// r: la fonction checkOne est appelée à chaque rendu de la page, il faut la passer en callback

const Setting = () => {
    const [users, setUsers] = useState([
        { name: 'Lucas STROHL', role: 'Collaborator', checked: false },
        { name: 'Olivier COUJANDASSAMY', role: 'Collaborator', checked: false }
    ])
    const [checkAllState, setCheckAllState] = useState(false)

    useEffect(() => {
        console.log(users)
    }, [users])

    const checkOne = (index) => {
        setUsers(users.map((user, i) => {
            if (i === index) {
                return {
                    ...user,
                    checked: !user.checked
                }
            }
            return user
        }))
    }

    // Buged n'affiche jamais le bon état
    const checkAll = async () => {
        await setCheckAllState(!checkAllState)
        setUsers(users.map((user) => {
            return {
                ...user,
                checked: checkAllState
            }
        }))
    }



    return (
        <>
            <User>
                <Img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
                <UserName>
                    <Name>Sébastien TEXIER</Name>
                    <Role>Admin</Role>
                </UserName>
            </User>
            <Div>
                <PageColumn>
                    <h3>Compte</h3>
                    <h3>Taxes</h3>
                </PageColumn>
                <PageColumn flex={2}>
                    <Div>
                        <Title>Gestion des accèss</Title>
                        <AddButton>Ajouter un utilisateur</AddButton>
                    </Div>
                    <CardManageAccess>
                        <FirstRow>
                            <SelectAll>
                                <input type="checkbox" defaultChecked={checkAllState} onClick={checkAll} />
                                <p>Tout sélectionner</p>
                            </SelectAll>
                            <p>Type</p>
                        </FirstRow>
                        <SearchRow>
                            <Search type="text" placeholder="Rechercher un utilisateur" />
                        </SearchRow>
                        { 
                            users.map((user, index) => {
                                return (
                                    <Div key={index}>
                                        <input type="checkbox" defaultChecked={user.checked} onClick={() => { checkOne(index) } } />
                                        <User>
                                            <Img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
                                            <UserName>
                                                <Name>{user.name}</Name>
                                                <Role>{user.role}</Role>
                                            </UserName>
                                        </User>
                                        <p>Supprimer</p>
                                    </Div>
                                )
                            })
                        }
                    </CardManageAccess>
                    <p>&gt; Previous Next &gt;</p>
                </PageColumn>
                <PageColumn></PageColumn>
            </Div>
        </>
    );
}
export default Setting;

const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
`;

const CardManageAccess = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid black;
    border-radius: 5px;
    margin: 10px 0;
`;

const Title = styled.h1`
    margin: 0;
    padding: 0;
`;

const AddButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0 10px 0 10px;
    font-weight: bold;
    cursor: pointer;
    color: white;
    background-color: rgb(0, 126, 69);
    transition: 0.3s;
    &:hover {
        background-color: rgb(0, 101, 55);
    }
`;

const FirstRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid black;
    border-radius: 5px 5px 0 0;
    background-color: #E7ECF0;
`;

const SelectAll = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const SearchRow = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
    border-bottom: 1px solid black;
`;

const Search = styled.input`
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 12px 20px;
    margin: 0 0 0 10px;
    box-sizing: border-box;
    width: 100%;
`;

const User = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 10px 0 10px;
    width: 95%;
    height: 50px;
`;

const Img = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

const UserName = styled.div`
    display: flex;
    flex-direction: column;
    height: 10px;
    margin: 0 0 0 10px;
`;

const Name = styled.p`
    margin: 0;
    padding: 0;
    color: blue;
    font-weight: bold;
`;

const Role = styled.p`
    margin: 0;
    padding: 0;
`;