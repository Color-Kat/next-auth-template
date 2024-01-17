import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppinsFont = Poppins({
    weight: ["600"],
    subsets: ["latin"],
})

export default function Home() {
    return (
        <main className="h-full flex items-center justify-center flex-col bg-slate-900 text-indigo-50">
            <div className="space-y-6 text-center">

                <h1 className={cn(
                    "text-6xl font-semibold drop-shadow-md",
                    poppinsFont.className
                )}>
                    Auth
                </h1>

                <p>
                    NextAuthentication service by @ColorKat
                </p>

                <div className="">
                    <Button variant="secondary" size="lg">
                        Sign in
                    </Button>
                </div>

            </div>
        </main>
    );
}
