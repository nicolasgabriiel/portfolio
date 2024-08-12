import Header from '../components/Header'
import Hero from '../components/Hero'
import ProjectList from '../components/ProjectList'
import AboutMe from '../components/AboutMe'
import Techs from '../components/Techs'

function Home() {
  return (
    <body>
      <Header></Header>
      <div className="container">
        <Hero></Hero>
      </div>
      <ProjectList></ProjectList>
      <AboutMe></AboutMe>
      <Techs></Techs>
    </body>
  )
}

export default Home
