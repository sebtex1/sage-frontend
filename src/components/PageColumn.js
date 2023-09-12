import styled from 'styled-components'

function PageColumn({ children, flex }) {
  return <Main $flex={flex}>{children}</Main>
}
export default PageColumn

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: ${(props) => (props.$flex ? props.$flex : 1)};
  padding: 10px;
  margin: 10px;
`
