import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import InfoCard from "./InfoCard";
export function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <p className="text-center w-full bg-slate-600 text-white font-bold mb-4 p-2">
        Get Your Coffee
      </p>
      <div className="relative w-full">
        <SearchIcon
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={20}
        />
        <Input
          className="w-full p-2 pl-8"
          id="search"
          type="search"
          placeholder="Search for coffee..."
        />
      </div>

      <InfoCard
        title="Coffee"
        description="Premium coffee beans"
        price="$9.99"
      />
      <InfoCard
        title="Coffee"
        description="Premium coffee beans"
        price="$9.99"
      />

      {/* <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <div>
          <Button variant="link">Sign Up</Button>
        </div>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter> */}
    </Card>
  );
}

export default CardDemo;
