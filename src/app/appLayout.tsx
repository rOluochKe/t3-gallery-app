"use client";

import React, { useState } from 'react';
import NavBar from "~/app/_components/NavBar";

export default function AppLayout({
  children,
  withNavbar = true
}: {
  children: React.ReactNode;
  withNavbar?: boolean;
}) {
  const [isNavBarOpen, setIsNavBarOpen] = useState(withNavbar);

  const toggleNavBar = () => {
    setIsNavBarOpen(!isNavBarOpen);
  };

  return (
    <div className="flex min-h-screen">
      {isNavBarOpen && (
        <aside className="w-1/4 rounded-tr-3xl rounded-br-3xl sticky top-0 h-screen">
          <NavBar />
        </aside>
      )}
      <main className="flex-1 bg-background p-9 overflow-y-auto">
        <button
          onClick={toggleNavBar}
          className="mb-4 bg-accent text-light px-4 py-2 rounded-lg"
        >
          {isNavBarOpen ? 'Hide Menu' : 'Show Menu'}
        </button>
        {children}
      </main>
    </div>
  );
}