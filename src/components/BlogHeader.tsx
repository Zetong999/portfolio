import React from 'react'
import styles from './BlogHeader.module.scss'
import Image from 'next/image'
import {Breadcrumbs, Typography} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import Link from 'next/link'

interface BlogHeaderProps {
    title: string
    description: string
    image: string
}

const BlogHeader: React.FC<BlogHeaderProps> = ({
    // title,
     description, image}) => {
    return (
        <div>
            <div className={styles.bannerWrapper}>
                <div className={styles.bannerImage}>
                    <Image src={image} alt="student image" layout="fill" objectFit="cover" />
                </div>

                <div className={styles.bannerContent}>
                    <Typography variant="h1">{description}</Typography>
                    <Breadcrumbs aria-label="breadcrumb" className={styles.breadcrumb} style={{zIndex: '99'}}>
                        <Link href={`/`}>
                            <HomeIcon fontSize="small" style={{paddingBottom: '2px'}} />
                        </Link>
                        <Link href={`/blogs/1`}>{'Blog'}</Link>
                    </Breadcrumbs>
                </div>
            </div>
        </div>
    )
}

export default BlogHeader
