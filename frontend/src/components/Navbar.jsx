import React, { useEffect } from "react";
import { LogOutIcon, Plus } from "lucide-react";
import { Link } from "react-router";
import ThemeController from "./ThemeController";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

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

            <div>
              {user ? (
                <button
                  onClick={logout}
                  className="btn btn-primary btn-sm flex items-center gap-2"
                >
                  <LogOutIcon className=" h-5 w-5" />{" "}
                  <span className="hidden md:inline">Logout</span>
                  {/* replace with an icon you like */}
                </button>
              ) : (
                <Link to="/auth" className="btn btn-primary btn-sm md:btn-md">
                  Login / Signup
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
