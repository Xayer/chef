import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock9Icon } from "lucide-react";
import { useRecipes } from "../../api/recipes";
import { Link, redirect, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Recipe() {
  const { recipes, isLoading } = useRecipes();
  const id = useParams<{ id: string }>().id;

  const recipe = id && recipes && recipes[id as string];

  useEffect(() => {
    if (!recipe) redirect("/recipes");
  }, [id, recipe, recipes]);

  return (
    recipe && (
      <>
        <div className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="grid h-full">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle></CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6">
                {isLoading && <div className="">Loading...</div>}
                {!!recipes &&
                  Object.entries(recipes).map(([id, recipe]) => (
                    <Link
                      to={`/recipes/${id}`}
                      className="flex items-center p-2 px-4 rounded gap-2 hover:bg-muted/50"
                      key={id}
                    >
                      <div className="grid gap-1">
                        <p className="text-sm font-medium leading-none">
                          {recipe.title}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {recipe.description}
                        </p>
                      </div>
                      <div className="ml-auto font-medium">
                        <span className="flex gap-2 items-center">
                          <Clock9Icon className="h-5 w-5" />
                          {recipe.duration}
                        </span>
                      </div>
                      <div className="flex gap-0.5">
                        {recipe.authors.map((author) => {
                          return (
                            <Avatar className="w-5 h-5" key={author}>
                              <AvatarImage
                                src={`https://github.com/${author}.png`}
                                alt={`@${author}`}
                              />
                              <AvatarFallback>{author}</AvatarFallback>
                            </Avatar>
                          );
                        })}
                      </div>
                    </Link>
                  ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </>
    )
  );
}
