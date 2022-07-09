import { Button, useAuthenticator } from '@aws-amplify/ui-react'
import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import '../styles/site.scss'
import styles from './layout.module.scss'
import Nav from './nav'

const Layout = () => {
    const [toggleNav, setToggleNav] = React.useState(false)
    
    return (

        <div className={styles.container}>
            <Nav/>
            <div className={styles.contentWrapper}>
                <Outlet/>
            </div>
        </div>


        // <div className={`${layoutStyles.siteWrapper} ${toggleNav ? `${layoutStyles.siteHeadOpen}` : ``}`}>
        //     <header className={layoutStyles.siteHead}>
        //         <div className={layoutStyles.siteHeadContainer}>
        //             <button
        //                 className={layoutStyles.navBurger}                                            
        //                 onClick={() => setToggleNav(!toggleNav)}
        //                 aria-label="nav-menu"
        //             >
        //                 <div
        //                     className={`${layoutStyles.hamburger} ${layoutStyles.hamburgerCollapse}`}                            
        //                     role="button"
        //                     aria-label="nav-menu"
        //                 >
        //                     <div className={layoutStyles.hamburgerBox}>
        //                         <div className={layoutStyles.hamburgerInner} />
        //                     </div>
        //                 </div>
        //             </button>
        //             <nav className={layoutStyles.siteHeadLeft}>
        //                 <ul className={layoutStyles.nav}>
        //                     <li><Link to="/">Home</Link></li>                            
        //                     <li><Link to="/new-workflow">New Workflow</Link></li>
        //                     <li><Button onClick={useAuthenticator().signOut}>Sign Out</Button></li>
        //                 </ul>
        //             </nav>                    
        //         </div>  
        //     </header> 
        //     <div className={layoutStyles.contentWrapper}>  
        //         <Outlet/>
        //     </div>
        // </div>
    )
}

export default Layout;