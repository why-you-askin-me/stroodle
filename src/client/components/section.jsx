import React from 'react'
import block from 'bem-cn'

const b = block('section')

const Section = ({title, subtitle, children}) => (
    <div className={b}>
        <div className={b('title')}>
            {title}
        </div>
        <div className={b('subtitle')}>
            {subtitle}
        </div>
        <div className={b('body')}>
            {children}
        </div>
    </div>
)

export default Section
