import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/contexts/AuthContext";
import { User, Settings, LogOut } from "lucide-react";

const UserMenu = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  // Get user initials or use email for avatar
  const getUserInitials = () => {
    if (!user) return "U";

    if (user.user_metadata?.full_name) {
      const nameParts = user.user_metadata.full_name.split(" ");
      if (nameParts.length === 1) return nameParts[0].charAt(0).toUpperCase();
      return (
        nameParts[0].charAt(0).toUpperCase() +
        nameParts[nameParts.length - 1].charAt(0).toUpperCase()
      );
    }

    return user.email ? user.email.substring(0, 2).toUpperCase() : "U";
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-10 w-10 rounded-full border border-gray-700 hover:bg-gray-800"
        >
          <Avatar className="h-9 w-9">
            <AvatarImage
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user?.id || "default"}`}
              alt={user?.email || "User"}
            />
            <AvatarFallback className="bg-gray-800 text-lime-500">
              {getUserInitials()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56 bg-gray-900 border border-gray-800"
        align="end"
        forceMount
      >
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none text-white">
              {user?.user_metadata?.full_name || "User"}
            </p>
            <p className="text-xs leading-none text-gray-400">{user?.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-800" />
        <DropdownMenuGroup>
          <DropdownMenuItem className="text-white hover:bg-gray-800 hover:text-lime-400 cursor-pointer">
            <Link to="/account" className="flex w-full items-center">
              <User className="mr-2 h-4 w-4 text-lime-500" />
              <span>Account</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-white hover:bg-gray-800 hover:text-lime-400 cursor-pointer">
            <Link to="/settings" className="flex w-full items-center">
              <Settings className="mr-2 h-4 w-4 text-lime-500" />
              <span>Settings</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-gray-800" />
        <DropdownMenuItem
          className="text-white hover:bg-gray-800 hover:text-red-400 cursor-pointer"
          onClick={handleSignOut}
        >
          <LogOut className="mr-2 h-4 w-4 text-red-500" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
