"use client";
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems } from "flowbite-react";
import { Avatar } from "flowbite-react";
import { useState } from "react"
import { Drawer, DrawerItems } from "flowbite-react"
import { RxHamburgerMenu } from "react-icons/rx";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { usePathname } from 'next/navigation'
import clsx from "clsx";
import Link from 'next/link';
export default function ResponsiveSidebarComponent() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const sidebarContent = (
    <Sidebar aria-label="Sidebar nav"
      // className="h-full 
      // [&>div]:bg-[rgb(0.961151 0 0)]
      //  [&>div]:p-0"
      className="h-full 
  [&>div]:bg-[rgb(0.961151 0 0)]
     [&>div]:p-0
    [&>div]:rounded-none
     "


    >
      <div className="flex flex-col
    justify-between h-screen">
        <div>
          <div className="flex flex-wrap gap-2 mt-[50px]">
            <Avatar img="/avatar.avif" alt="avatar of Jese" size="xl" rounded className="mx-auto" />
          </div>
          <SidebarItems>
            <SidebarItemGroup>
              <SidebarItem
              as={Link}
                 className={clsx('hover:bg-gray-200 rounded-none', {
                  'bg-gray-100': pathname === '/'
              })}
                href="/" >
                Home
              </SidebarItem>
              <SidebarItem
              as={Link}
                    className={clsx('hover:bg-gray-200 rounded-none', {
                      'bg-gray-100': pathname === '/projects'
                  })}
                href="/projects">
                Projects
              </SidebarItem>
              <SidebarItem
              as={Link}
                   className={clsx('hover:bg-gray-200 rounded-none', {
                    'bg-gray-100': pathname === '/blogs'
                })}
                href="/blogs">
                Blogs
              </SidebarItem>
              <SidebarItem
              as={Link}
                  className={clsx('hover:bg-gray-200 rounded-none', {
                    'bg-gray-100': pathname === '/cv'
                })}
                href="/cv" >
                CV
              </SidebarItem>
              <SidebarItem
              as={Link}
                 className={clsx('hover:bg-gray-200 rounded-none', {
                  'bg-gray-100': pathname === '/contact'
              })}
                href="/contact" >
                Contact
              </SidebarItem>
            </SidebarItemGroup>
          </SidebarItems>
        </div>


        <div className=" flex justify-center gap-6 mb-[20px]">
          <a
    href="https://github.com/Zetong999"
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-pointer text-black hover:text-gray-600"
  >
    <FaGithub size={20} />
  </a>

  

  <a
    href="https://www.linkedin.com/in/zetong-liu-237216266"
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-pointer text-black hover:text-gray-600"
  >
    <FaLinkedinIn size={20}/>
  </a>
</div>
     </div>

    </Sidebar>
  );

  return (
    <>
      {/* 移动端按钮 */}
      <div className="sm:hidden p-4 flex flex-row">
        {/* <Button onClick={() => setOpen(true)} color="gray"> */}
        <RxHamburgerMenu className="hover:cursor-pointer" onClick={() => setOpen(true)} />
        <div className="text-black flex  mx-auto">
          Portfolio ⚡️
        </div>
        {/* </Button> */}
      </div>

      {/* 抽屉 Drawer */}

      <Drawer
        className="p-0 w-[256px]"
        open={open} onClose={() => setOpen(false)} position="left">
        {/* <DrawerHeader title="Menu" /> */}
        <DrawerItems className="h-screen w-[256px] ">

          {sidebarContent}

        </DrawerItems>
      </Drawer>

      {/* 大屏固定 Sidebar */}
      <div className="hidden sm:block h-screen ">
        {sidebarContent}
      </div>
    </>
  )
}