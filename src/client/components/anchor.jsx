import React from 'react'
import block from 'bem-cn'

const b = block('anchor')

const Anchor = () => (
    <div className={b}>
        <a className={b('link')} href="#Prologue">Prologue</a>
        <a className={b('link')} href="#EndGoal">End Goal</a>
        <a className={b('link')} href="#Step1">Step 1</a>
        <a className={b('link')} href="#Step2">Step 2</a>
        <a className={b('link')} href="#Step3">Step 3</a>
        <a className={b('link')} href="#Step4">Step 4</a>
        <a className={b('link')} href="#Step5">Step 5</a>
        <a className={b('link')} href="#Step6">Step 6</a>
        <a className={b('link')} href="#Step7">Step 7</a>
        <a className={b('link')} href="#Conclusion">Conclusion</a>
        <a className={b('link')} href="#Credits">Credits</a>
    </div>
)

export default Anchor
