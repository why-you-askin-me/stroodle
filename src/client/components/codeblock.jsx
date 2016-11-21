import React from 'react'
import block from 'bem-cn'

const b = block('codeblock')

const Codeblock = ({children}) => (
    <div className={b}>
        {children}
    </div>
)

export default Codeblock
