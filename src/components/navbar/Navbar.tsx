import { useEffect, useState } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const menuItems = [
    { name: "About", href: "about", target: "_self" },
    { name: "Services", href: "services", target: "_self" },
    { name: "Projects", href: "projects", target: "_self" },
    { name: "Contact", href: "contact", target: "_self" },
  ];

  const resume = {
    name: "Resume",
    href: "https://drive.google.com/file/d/1ES7apA3yrxR7kN403rBz4DNjynu9mtt9/view?usp=sharing",
    target: "_blank",
  };

  const scrollConfig = {
    smooth: true,
    offset: 0,
    duration: 500,
  };

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
      <nav className="mx-auto flex items-center justify-between p-4 w-full max-w-[var(--max_width)] ">
        <div className="nav-items">
          <ScrollLink
            to="/"
            target="_self"
            {...scrollConfig}
            className="cursor-pointer "
          >
            <div className="flex items-center gap-2 text-xl  font-semibold">
              <span className="text-muted-foreground">[&gt;]</span>
              <span className="logo">nassim.dev</span>
            </div>{" "}
          </ScrollLink>
        </div>

        <div className="hidden md:flex items-center">
          <ul className="flex items-center gap-6 nav-items">
            {menuItems.map((item) => (
              <li key={item.name} className="nav-item">
                <ScrollLink
                  to={item.href}
                  target={item.target}
                  {...scrollConfig}
                  className="text-lg font-medium  hover:underline"
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}

            <a
              href={resume.href}
              target="_blank"
              className="text-lg font-medium hover:underline"
            >
              {resume.name}
            </a>
          </ul>
        </div>

        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 text-black">
                <Menu size={28} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="p-6 bg-slate-800 text-white">
              <ul className="flex flex-col gap-4 mt-8">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <ScrollLink
                      to={item.href}
                      target={item.target}
                      {...scrollConfig}
                      className="text-lg font-medium hover:underline"
                    >
                      <SheetClose>{item.name}</SheetClose>
                    </ScrollLink>
                  </li>
                ))}

                <li>
                  <a
                    href={resume.href}
                    target="_blank"
                    className="text-lg font-medium hover:underline"
                  >
                    {resume.name}
                  </a>
                </li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
