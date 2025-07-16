"use client"
import React from 'react'
import styles from './BlogContent.module.scss'
import {makeStyles} from '@mui/styles'
// import Image from 'next/legacy/image'

import Box from '@mui/material/Box'

const useStyles = makeStyles(() => ({
    content: {
        '& .alignright': {
            position: 'relative',
            left: '100%',
            transform: 'translate(-100%, 0)'
        }
    }
}))

interface BlogContentProps {
    content: string
    // author: string
    // authorAvatar: string
    // dateTime: string
}

export const BlogContent: React.FC<BlogContentProps> = ({content, 
    // author,
    //  authorAvatar
    // , dateTime
}) => {
    const classes = useStyles()
    return (
        <Box>
            <div className='grid grid-cols-24 gap-2'>
                <div className='xs:col-span-1 lg:col-span-2'></div>
                <div className='xs:col-span-22 lg:col-span-20'>
                    <div>
                        <div className={styles.detailWrapper}>
                            <div className={styles.detailContainer}>
                                {/* <div className={styles.author}>{author}</div> */}
                                {/* <div className={styles.dateTime}>{moment(dateTime).utcOffset(-10).format('LLL')}</div> */}
                            </div>
                            {/* <div className={styles.avatar}>
                                <Image src={authorAvatar} alt="" width={96} height={96} />
                            </div> */}
                        </div>
                        <div
                            className={`${styles.content} ${classes.content}`}
                            dangerouslySetInnerHTML={{__html: content || ''}}
                        />
                    </div>
                </div>
                <div className='xs:col-span-1 lg:col-span-2'></div>
            </div>
        </Box>
    )
}

