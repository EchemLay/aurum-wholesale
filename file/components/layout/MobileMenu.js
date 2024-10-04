'use client'
import Link from "next/link"
import { useState } from 'react'

export default function MobileMenu() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
             <ul className="navigation clearfix">
        {/* Main Navigation Items */}
        <li><Link href="/">Home</Link></li>
        <li><Link href="/page-about">About Us</Link></li>
        <li><Link href="/page-services">Services</Link></li>
        <li><Link href="/page-contact">Contact</Link></li>
      </ul>
        </>
    )
}
