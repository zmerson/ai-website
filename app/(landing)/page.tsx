import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import Image from "next/image";

export default function LandingPage() {
  return (
   <div>Home Page
   <div>
        <a href="/sign-in">
            <Button>
                Log In
            </Button>
        </a>
        <a href="/sign-up">
            <Button>
                Register
            </Button>
        </a>
            

   </div>
   </div>
  );
}
