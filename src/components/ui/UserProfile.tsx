import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { LogOutIcon } from "lucide-react";
import { Button } from "./button";
import { Card, CardHeader, CardTitle } from "./card";

export default function UserProfile() {
  const userName = "Xayer";

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className="flex gap-2 items-center justify-between">
            <span className="flex gap-2 items-center">
              <Avatar key={userName} className="w-6 h-6">
                <AvatarImage
                  src={`https://github.com/${userName}.png`}
                  alt={`@${userName}`}
                />
                <AvatarFallback>{userName}</AvatarFallback>
              </Avatar>
              {userName}
            </span>
            <Button variant="ghost" size="icon">
              <LogOutIcon className="h-5 w-5" />
              <span className="sr-only">signout</span>
            </Button>
          </CardTitle>
        </CardHeader>
      </Card>
    </>
  );
}
