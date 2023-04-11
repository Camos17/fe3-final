import React, { useContext } from 'react';
import { ContextGlobal } from "./utils/global.context";

const Layout = ({children}) => {
    const {theme} = useContext(ContextGlobal);
    console.log('theme', theme);

return (
    <div className="layout" style={{background: theme.background, color: theme.font}}>
        {children}
    </div>
  );
};

export default Layout