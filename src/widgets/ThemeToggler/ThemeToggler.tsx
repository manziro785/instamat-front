import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../app/providers/ThemeProvider/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div onClick={toggleTheme} className=" flex">
      {theme === "dark" ? (
        <>
          <Sun className="mr-[5px]" /> Light mode
        </>
      ) : (
        <>
          <Moon className="mr-[5px]" /> Dark mode
        </>
      )}
    </div>
  );
};

export default ThemeToggle;
