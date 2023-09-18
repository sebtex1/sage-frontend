import HttpRequest from '../functions/HttpRequest'

const UserService = {
  GetUserMe: (setUserMe) => {
    HttpRequest.Send('get', 'companies/me/users/me', null, null, true, true)
      .then((result) => {
        setUserMe(result.data)
      })
      .catch((error) => {
        console.error('error', error)
      })
  },
  GetUsersMe: (setUsers) => {
    HttpRequest.Send('get', 'companies/me/users', null, null, true, true)
      .then((result) => {
        console.info('result-GetUsersMe', result)
        setUsers(result.data)
      })
      .catch((error) => {
        console.error('error', error)
      })
  },
  UpdateUser: async (user) => {
    return HttpRequest.Send(
      'put',
      'companies/me/users/me',
      null,
      user,
      true,
      true,
    )
  },
}

export default UserService
