import { Button } from "@/components/ui/button"
import { Logo } from "./logo"

export const Footer=()=>{
    return (
        <div className="flex items-center p-6 w-full bg-background z-50">
            <Logo/>
            <div className="md:ml-auto w-full md:justify-end flex items-center gap-x-2  text-muted-foreground">
                <Button variant="goast" size="sm">
                    privacy policy
                </Button>
                <Button variant="goast" size="sm">
                    Terms & conditions
                </Button>
            </div>
        </div>
    )
}