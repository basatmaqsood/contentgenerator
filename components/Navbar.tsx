'use client'
import Link from "next/link"
import {SignInButton, SignUpButton, UserButton, SignedOut, SignedIn, useAuth  } from "@clerk/nextjs"
import { useState } from "react"

export default function Navbar() {
    const { userId } = useAuth();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <div>

        </div>
    );
}