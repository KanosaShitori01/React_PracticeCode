import React from 'react'
import contentStyles from './contentSt.module.css';
function Content() {
    return (
        <>
            <h2 className={contentStyles.title}>This is title of content for echo</h2>
            <p className={contentStyles.content}>Nothing is here, just a empty space</p>
        </>
    )
}

export default Content
