import Footer from './footer'
import Header from './header'
import NavBar from './navbar'
import SideBar from './sidebar'

const Component: React.FC = (props, { children }) => (
  <>
    <Header />
    <NavBar />
    <SideBar />
    <main>{children}</main>
    <Footer />
  </>
)

export default Component