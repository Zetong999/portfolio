'use client'

import React from 'react'
import Pagination from '@mui/material/Pagination'
import PaginationItem from '@mui/material/PaginationItem'
import Box from '@mui/material/Box'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface CustomPagerProps {
  currentPage: number
  totalPages: number
  link: string
}

export default function CustomPager({ currentPage, totalPages, link }: CustomPagerProps) {
  const router = useRouter()

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    // 这里是点击页码后，用 Next 的 App Router navigation
    router.push(`${link}/${value}`)
  }

  return (
    <Box display="flex" justifyContent="center" mt={4}>
      <Pagination
        page={currentPage}
        count={totalPages}
        color="primary"
        onChange={handleChange}
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            href={`${link}/${item.page}`}
            {...item}
          />
        )}
      />
    </Box>
  )
}