'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
  >
    <Menu setActive={setActive} >
        <Link href={'/'}>
        <MenuItem setActive={setActive} active={active} item="Home"></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Services">
   {/* <div className="flex flex-col space-y-4 text-sm ">
   <HoveredLink href="/Services">App Development</HoveredLink>
        <HoveredLink href="/Services">Web Development</HoveredLink>
        <HoveredLink href="/Services">AI & ML</HoveredLink>
        <HoveredLink href="/Services">BlockChain</HoveredLink>
   </div> */}
        </MenuItem>
        <Link href={'/About'}>
        <MenuItem setActive={setActive} active={active} item="About"></MenuItem>
        </Link>
        <Link href={'/Contact Us'}>
        <MenuItem setActive={setActive} active={active} item="Contact"></MenuItem>
        </Link>
    </Menu>
  </div>
  )
}

export default Navbar