import React from 'react'
import block from 'bem-cn'

const b = block('section')

const Section = ({name, children}) => (
    <div className={b}>
        <div className={b('title')}>
            {name}
        </div>
        <div className={b('body')}>
            {children}
        </div>
    </div>
)

export default Section
