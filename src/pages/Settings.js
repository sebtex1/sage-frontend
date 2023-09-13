import { useState, useEffect } from 'react';
import styled from 'styled-components';
import PageColumn from '../components/PageColumn';
import Icon from '@mdi/react';
import { mdiChevronLeft } from '@mdi/js';
import { mdiChevronRight } from '@mdi/js';
import axios from 'axios';
import HttpRequest from '../functions/HttpRequest';
import UserService from '../services/UserService';
import { Link } from 'react-router-dom'
import UserAccess from './UserAccess';
import Accounts from './Accounts';

const Setting = () => {
    const [page, setPage] = useState('account');
    const [userMe, setUserMe] = useState({});
    const scope = localStorage.getItem('scope');
    useEffect(() => {  
        console.log('GetUserMe');
        UserService.GetUserMe(setUserMe);
        }, [])
    

    return (
        <>
            <User>
                <Img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
                <UserName>
                    <Name>{`${userMe.lastName} ${userMe.firstName}`}</Name>
                    <Role>{userMe.role}</Role>
                </UserName>
            </User>
            <Div>
                <PageColumn>
                    <button onClick={() => setPage('account')}>Mon compte</button>
                    {
                        scope.includes('super_admin')
                        ? <button onClick={() => setPage('user_access')}>Gestion des accèss</button>
                        : null
                    }
                    <button>Taxes</button>
                </PageColumn>
                <PageColumn flex={2}>

                    { page === 'user_access' ? <UserAccess userMe={userMe}/> : null }
                    { page === 'account' ? <Accounts userMe={userMe} setUserMe={setUserMe}/> : null }


                    {/* <RowPagination>
                        <Icon path={mdiChevronLeft} size={1} color="black" />
                        <NumberPagination>1</NumberPagination>
                        <NumberPagination>...</NumberPagination>
                        <NumberPagination>5</NumberPagination>
                        <Icon path={mdiChevronRight} size={1} color="black" />
                    </RowPagination> */}
                </PageColumn>
                <PageColumn></PageColumn>
            </Div>
        </>
    );
}
export default Setting;


const LinkContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
`;

const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
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

const RowPagination = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
`;

const NumberPagination = styled.p`
    margin: 0 10px;
    padding: 0;
`;

const LinkStyled = styled(Link)`
    text-decoration: none;
    color: black;
    margin: auto 10px;
    display: block;
    width: 50px;
    height: 25px;
`;