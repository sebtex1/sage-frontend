import HttpRequest from '../functions/HttpRequest'

const CompanyService = {
  GetCompanyMe: (setCompanyMe) => {
    HttpRequest.Send('get', 'companies/me', null, null, true, true)
      .then((result) => {
        console.log('companies/me', result.data)
        if (result.status === 200) {
          setCompanyMe(result.data)
        }
      })
      .catch((error) => {
        console.error('error', error)
      })
  },
  UpdateCompany: async (company) => {
    return HttpRequest.Send('put', 'companies/me', null, company, true, true)
  },
}

export default CompanyService
