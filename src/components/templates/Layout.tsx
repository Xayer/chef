import { ChefHat, HomeIcon, Menu } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import { Button } from "../ui/button";
import { SheetTrigger, SheetContent, Sheet } from "../ui/sheet";
import UserProfile from "../ui/UserProfile";

export default function Layout() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link to="/" className="flex items-center gap-2 font-semibold py-2">
              <ChefHat className="h-6 w-6" />
              <span>Chef</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                to="/recipes"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <HomeIcon className="h-4 w-4" />
                Recipes
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <UserProfile />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 md:hidden items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  to="/"
                  className="gap-2 text-lg font-semibold mx-[-0.65rem] flex items-center gap-4 rounded-xl px-2 py-2 "
                >
                  <ChefHat className="h-6 w-6" />
                  <span>Chef</span>
                </Link>
                <Link
                  to="/recipes"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <HomeIcon className="h-5 w-5" />
                  Recipes
                </Link>
              </nav>
              <div className="mt-auto">
                <UserProfile />
              </div>
            </SheetContent>
          </Sheet>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
