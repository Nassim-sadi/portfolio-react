import React, { useEffect, useState } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  const menuItems = [
    { name: "About", href: "#about", target: "_self" },
    { name: "Services", href: "#services", target: "_self" },
    { name: "Projects", href: "#projects", target: "_self" },
    { name: "Skills", href: "#skills", target: "_self" },
    { name: "Contact", href: "#contact", target: "_self" },
    {
      name: "Resume",
      href: "https://drive.google.com/file/d/1ES7apA3yrxR7kN403rBz4DNjynu9mtt9/view?usp=sharing",
      target: "_blank",
    },
  ];

  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY < lastScrollY || currentY < 10);
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="mx-auto flex items-center justify-between px-6 py-4 lg:px-12 max-w-7xl bg-indigo-800 rounded-b-2xl shadow-lg">
        <div className="flex items-center text-white font-bold text-xl">
          <a href="/">Logo</a>
        </div>

        <div className="hidden md:flex items-center">
          <ul className="flex items-center gap-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  target={item.target}
                  className="text-lg font-medium text-white hover:underline"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 text-white">
                <Menu size={28} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="p-6 bg-indigo-800 text-white">
              <ul className="flex flex-col gap-4 mt-8">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target={item.target}
                      className="text-lg font-medium hover:underline"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
