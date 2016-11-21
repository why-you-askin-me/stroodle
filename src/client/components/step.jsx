import React from 'react'
import block from 'bem-cn'

const b = block('step')

const Step = ({num, children}) => (
    <div className={b}>
        <div className={b('title')}>
            Step {num}
        </div>
        <div className={b('body')}>
            {children}
        </div>
    </div>
)

export default Step
