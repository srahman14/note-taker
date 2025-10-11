import React from "react";
import { Plus } from "lucide-react";
import { Link } from "react-router";
import ThemeController from "./ThemeController";

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-b-content/20">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl md:text-3xl font-bold text-primary font-mono tracking-tighter">
            NoteTaker
          </h1>

          <div className="flex gap-2 md:gap-4 justify-center items-center">
            <div>
              <Link to="/create" className="btn btn-primary btn-sm">
                <Plus className="size-4 md:size-5" />
                <span className="hidden md:inline">New Note</span>
              </Link>
            </div>

            <div>
              <ThemeController />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
