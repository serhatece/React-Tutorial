import React from 'react'

function Container({ children }) {
    return (
        <div>
            Container
            <div>{children}</div>
        </div>
    )
}

export default Container