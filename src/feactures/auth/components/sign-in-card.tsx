import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FaGithub } from "react-icons/fa";
import { AuthAction } from "../types";
import { useState } from "react";

interface SignInCardProps {
    setState: (state: AuthAction) => void;
}

export const SignInCard: React.FC<SignInCardProps> = ({ setState }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <Card className="w-full h-full p-8">
            <CardHeader className="px-0 pt-0">
                <CardTitle>Login para continuar</CardTitle>
                <CardDescription>
                    Use seu email ou outro serviço para continuar
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-5 px-0 pb-0">
                <form className="space-y-2.5">
                    <Input
                        disabled={false}
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Email"
                        type="email"
                        required
                    />
                    <Input
                        disabled={false}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Password"
                        type="password"
                        required
                    />
                    <Button
                        type="submit"
                        className="w-full"
                        size={"lg"}
                        disabled={false}
                    >
                        Continue
                    </Button>
                </form>
                <Separator />
                <div className="flex flex-col gap-y-2.5">
                    <Button
                        disabled={false}
                        onClick={() => {}}
                        variant={"outline"}
                        size={"lg"}
                        className="w-full relative"
                    >
                        <FcGoogle className="size-5 absolute top-2.5 left-2.5" />
                        Cadastre com google
                    </Button>
                    <Button
                        disabled={false}
                        onClick={() => {}}
                        variant={"outline"}
                        size={"lg"}
                        className="w-full relative"
                    >
                        <FaGithub className="size-5 absolute top-2.5 left-2.5" />
                        Cadastre com github
                    </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                    Caso não tenha conta?
                    <span
                        className="text-sky-700 hover:underline cursor-pointer ml-1"
                        onClick={() => setState(AuthAction.SignUp)}
                    >
                        Cadastre-se aqui
                    </span>
                </p>
            </CardContent>
        </Card>
    );
};
