import React from 'react';

const Logo = () => {
    return (
        <div className='logo'>
            {/* les images importées depuis la balise img sont accessibles dans "public" */}
            <img src="./toucan.png" alt="logo bird" />
            <h3>FLAGADA</h3>
            
        </div>
    );
};

export default Logo;