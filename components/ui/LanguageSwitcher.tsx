import React, { useState } from "react";
import { ArrowRight, Globe2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface LanguageSwitcherProps {
  language: string;
  onLanguageChange: (newLanguage: string) => void;
}

export default function LanguageSwitcher({
  language,
  onLanguageChange,
}: LanguageSwitcherProps) {
  const handleLanguageChange = () => {
    const newLanguage = language === "fr" ? "en" : "fr";
    onLanguageChange(newLanguage);
  };

  return (
    <div className="space-y-3">
      <div>
        <h5 className="text-lg md:text-xl font-mono font-medium uppercase">
          Changer de langue.
        </h5>
      </div>
      <div>
        <ul className="list-none">
          <li>
            <button
              title="changer de langue"
              className="space-x-1 flex items-center"
              onClick={handleLanguageChange}
            >
              <Globe2 className="h-6 w-6" />
              <DropdownMenu>
                <DropdownMenuTrigger className="lg:hidden">
                  {language === "fr" ? "Français" : "English"}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="font-mono uppercase bg-white">
                  <DropdownMenuItem className="hidden space-x-2 items-center">
                    Français
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hidden space-x-2 items-center">
                    English
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
