import styled from 'styled-components'
import PageColumn from '../components/PageColumn'

const Home = () => {
  return (
    <Div>
      <PageColumn />
      <PageColumn flex={3}>
        <Image
          alt="meeting d'entreprise"
          src="https://c0.wallpaperflare.com/preview/811/935/645/adults-analysis-brainstorming-collaboration.jpg"
        />
        <h1>Page d&apos;acceuil sage:</h1>
        <p>
          Bienvenu sur l&apos;application sage en version SaaS,
          <br />
          <br /> cette version permet aux utilisateurs de se connecter à leur
          compte sage et de gérer leur entreprise sans à avoir à héberger des
          serveurs sur site ou on promise.
          <br />
          <br /> Cette version est en cours de développement, elle est
          actuellement en version alpha.
          <br /> De nouvelles fonctionnelités seront ajoutées au fur et à
          mesure.
          <br />
          <br /> Pour le moment, vous pouvez gérer vos tiers, vos produits et
          vos commandes.
        </p>
      </PageColumn>
      <PageColumn />
    </Div>
  )
}

export default Home

const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
`

const Image = styled.img`
  /* width: 100%; */
  /* width: 1273px; */
  height: 500px;
`
