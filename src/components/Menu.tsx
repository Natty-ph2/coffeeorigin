"use client"
import React, { useState } from "react";
import Link from "next/link";
import { Bars4Icon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";







// <Bars4Icon className="h-6 w-6 text-black cursor-pointer" onClick={() => setOpen(true)} />
{/* <XMarkIcon className="h-6 w-6 text-black cursor-pointer" onClick={() => setOpen(false)} /> */}

const links = [
    {id: 1, title: "Home", url: "/"},
    {id: 2, title: "Features", url: "/#feature-sec"},
    {id: 3, title: "Get App", url: "/#getApp"},
    {id: 4, title: "Privacy Policy", url: "/"},
    {id: 5, title: "Term and Conditions", url: "/"},
    {id: 6, title: "About", url: "/"},
]


const Menu = () => {
    const [open, setOpen] = useState(false);

    return (
        
       <div>
                {!open ? (
                        <Bars4Icon className="h-5 cursor-pointer" onClick={() => setOpen(true)} />
                        ) : (
                        <XMarkIcon className="h-5 cursor-pointer" onClick={() => setOpen(false)} />
                        )}


               {open && (
                <div className="bg-gray-100 absolute left-0 top-32 w-full h-[calc(100vh-7rem)] flex flex-col gap-12 items-center justify-center text-3xl z-10">
                        {links.map((item) => (
                            <Link href={item.url} key={item.id} onClick={() => setOpen(false)} >{item.title}  </Link>
                        ) )}

                        <Link href="/" onClick={() => setOpen(false)}>Contact Us</Link>
                </div>

             )}
       </div>
    )

}

export default Menu;