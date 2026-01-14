import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";

interface SidebarItem {
  icon: LucideIcon;
  label: string;
  href: string;
}

const SidebarItem = ({ icon: Icon, label, href }: SidebarItem) => {
  return (
    <a href={href} className="mb-[1rem] flex no-underline">
      <Icon className="mr-[5px]" />
      <span className="font-medium">{label}</span>
    </a>
  );
};

export { SidebarItem };
