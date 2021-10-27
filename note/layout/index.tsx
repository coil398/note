import { NextPage } from 'next'
import Footer from './footer'
import Header from './header'
import NavBar from './navbar'
import SideBar from './sidebar'

const Component: NextPage = ({ children }) => (
  <>
    <Header />
    <NavBar />
    <SideBar />
    <main>{children}</main>
    <Footer />
  </>
)

export default Component
