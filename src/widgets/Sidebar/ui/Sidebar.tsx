import ThemeToggle from "@/widgets/ThemeToggler/ThemeToggler";
import { Home, MessageCircle, Search, User } from "lucide-react";
import { SidebarItem } from "./SidebarItem";

function Sidebar() {
  const menuItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Search, label: "Search", href: "/" },
    { icon: User, label: "Profile", href: "/" },
    { icon: MessageCircle, label: "Chats", href: "/" },
  ];
  return (
    <div className="sticky top-0 bg-white z-40">
      {menuItems.map((item) => (
        <SidebarItem
          key={item.label}
          icon={item.icon}
          label={item.label}
          href={item.href}
        />
      ))}
      <ThemeToggle />
    </div>
  );
}

export { Sidebar };
