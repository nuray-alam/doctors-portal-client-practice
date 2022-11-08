import React from 'react';

const AccentButton = ({children}) => {
    return (
        <button class="btn btn-info text-white uppercase font-bold">{children}</button>
    );
};

export default AccentButton;