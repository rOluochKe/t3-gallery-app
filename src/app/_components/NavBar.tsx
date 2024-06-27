"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from './Button';

const NavBar: React.FC = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-primary p-4 flex flex-col justify-between items-center h-screen rounded-tr-lg rounded-br-lg">
      <div className="flex flex-col items-center justify-center space-y-4 h-full w-full">
        <Link href="/" className="w-full flex justify-center group">
          <Button
            variant={isActive("/") ? "active" : "default"}
            width="100%"
          >
            Community
          </Button>
        </Link>
        <Link href="/mystore" className="w-full flex justify-center group">
          <Button
            variant={isActive("/mystore") ? "active" : "default"}
            width="100%"
          >
            My Store
          </Button>
        </Link>
      </div>

      <div className="mt-auto w-full flex justify-center group">
        <Link href="/signin" className="w-full flex justify-center">
          <Button
            variant={isActive("/signin") ? "active" : "hover"}
            width="100%"
          >
            Sign In
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
