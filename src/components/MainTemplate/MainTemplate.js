import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function MainTemplate(props) {
    const {
        headerAppTitle, logo,
        navItems,
        authNavItems,
        footerCopyright,
        children
    } = props;

    return (
        <div className="mx-auto">
            <Header
                logo={logo}
                appTitle={headerAppTitle}
                navItems={navItems}
                authNavItems={authNavItems}
            />
            {children}
            <Footer
                copyright={footerCopyright}
                navItems={navItems}
            />
        </div>
    )
}

export default MainTemplate;