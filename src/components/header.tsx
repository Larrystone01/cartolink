"use client";
import {
  ChevronDown,
  House,
  Image,
  Video,
  WandSparkles,
  DraftingCompass,
  Folder,
  ImagePlus,
  Headset,
  Bell,
  Moon,
  Sun,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./themetoggle";

const NavIcons = [
  {
    icon: <House size={20} fill="black" />,
    name: "Home",
    href: "/",
  },
  {
    icon: <Image size={20} />,
    name: "Image",
    href: "",
  },
  {
    icon: <Video size={20} fill="black" />,
    name: "Video",
    href: "",
  },
  {
    icon: <WandSparkles size={20} />,
    name: "Enhancer",
    href: "",
  },
  {
    icon: <DraftingCompass size={20} fill="black" />,
    name: "Edit",
    href: "",
  },
  {
    icon: <Folder size={20} fill="black" />,
    name: "Asset",
    href: "",
  },
];
export default function Header() {
  const path = usePathname();
  return (
    <>
      <header className="my-5 fixed h-10 top-0 left-0 w-full z-20">
        <nav className="container mx-auto px-6">
          <div className="nav-container flex justify-between">
            <div className="logo flex items-center gap-3">
              <svg
                aria-label="Krea Logo"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                className="svelte-qzh0aw"
              >
                <path
                  d="M8.34 1.266c1.766-.124 3.324 1.105 3.551 2.802.216 1.612-.887 3.171-2.545 3.536-.415.092-.877.066-1.317.122a4.63 4.63 0 0 0-2.748 1.34l-.008.004-.01-.001-.006-.005-.003-.009q0-.009.005-.016a.04.04 0 0 0 .007-.022 438 438 0 0 1-.01-4.541c.003-1.68 1.33-3.086 3.085-3.21"
                  className="svelte-qzh0aw"
                ></path>
                <path
                  d="M8.526 15.305c-2.247-.018-3.858-2.23-3.076-4.3a3.31 3.31 0 0 1 2.757-2.11c.384-.04.845-.03 1.215-.098 1.9-.353 3.368-1.806 3.665-3.657.066-.41.031-.9.128-1.335.449-2.016 2.759-3.147 4.699-2.236 1.011.476 1.69 1.374 1.857 2.447q.051.33.034.818c-.22 5.842-5.21 10.519-11.279 10.47m2.831.93a.04.04 0 0 1-.021-.02l-.001-.006.002-.006q0-.003.003-.004l.006-.003q3.458-.792 5.992-3.185.045-.042.083.007c.27.357.554.74.78 1.106a10.6 10.6 0 0 1 1.585 4.89q.037.53.023.819c-.084 1.705-1.51 3.08-3.31 3.09-1.592.01-2.992-1.077-3.294-2.597-.072-.36-.05-.858-.11-1.238q-.282-1.755-1.715-2.84zm-3.369 6.64c-1.353-.235-2.441-1.286-2.684-2.593a5 5 0 0 1-.05-.817V15.14q0-.021.016-.007c.884.786 1.814 1.266 3.028 1.346l.326.01c1.581.051 2.92 1.087 3.229 2.592.457 2.225-1.557 4.195-3.865 3.793"
                  className="svelte-qzh0aw"
                ></path>
              </svg>

              <div className="login-details flex gap-2 items-center">
                <div className="profile-image bg-gradient-to-r from-[pink] via-[#afb9f1] to-[#d0d0e9] w-5 h-5 rounded-full"></div>
                <div className="profile-name">
                  <h4>Larrystone</h4>
                </div>
                <ChevronDown size={14} />
              </div>
            </div>
            <div className="nav-icons relative flex items-center space-x-7 bg-gray-200/90 p-2 rounded-[20px]">
              {NavIcons.map((icons, index) => {
                const IsActive = icons.href === path;
                return (
                  <div
                    key={index}
                    className={`${
                      IsActive
                        ? "bg-white p-3 rounded-[10px]"
                        : "hover:bg-gray-300 px-3 py-2 rounded-[10px]"
                    } flex flex-col items-center group relative`}
                  >
                    <Link href={icons.href}>{icons.icon}</Link>
                    <p className="hidden absolute -bottom-10 group-hover:block bg-gray-200 px-1 rounded-[5px] text-center text-[12px]">
                      {icons.name}
                    </p>
                  </div>
                );
              })}
            </div>
            <div
              className="sub-nav flex space-x-3
            items-center"
            >
              <button className="gallery flex items-center bg-gray-200/90 hover:bg-gray-300 px-3 py-2 space-x-2 rounded-[10px] cursor-pointer">
                <span>
                  <ImagePlus size={20} />
                </span>
                <span className="text-[12px]">Gallery</span>
              </button>
              <button className="support flex items-center bg-gray-200/90 hover:bg-gray-300 px-3 py-2 space-x-2 rounded-[10px] cursor-pointer">
                <span>
                  <Headset size={20} />
                </span>
                <span className="text-[12px]">Support</span>
              </button>
              <button className="bell bg-gray-200/90 hover:bg-gray-300 px-2 py-2 space-x-2 rounded-[10px] cursor-pointer">
                <Bell size={16} />
              </button>
              <ThemeToggle />
              <div className="profile-image bg-gradient-to-r from-[pink] via-[#afb9f1] to-[#d0d0e9] w-5 h-5 rounded-full"></div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
