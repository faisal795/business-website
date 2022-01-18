import React from "react";

const Footer = () => {

    const year = new Date().getFullYear();
    return (<>
       <footer className="bg-light w-100 text-center">
           <p className="text-primary">Copyright © {year} Mian Faisal. All Rights Reserved | Terms & Condations</p>
       </footer>

    </>);
}
export default Footer;