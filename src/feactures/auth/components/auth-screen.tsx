"use client";

import { useState } from "react";
import { AuthAction } from "../types";
import { SignInCard } from "./sign-in-card";
import { SignUpCard } from "./sign-up-card";

export const AuthScreen = () => {
    const [state, setState] = useState<AuthAction>(AuthAction.SignIn);

    return (
        <div className="h-full flex items-center justify-center bg-[#5C3B58]">
            <div className="md:h-auto md:w-[420px]">
                {state === AuthAction.SignIn ? (
                    <SignInCard setState={setState} />
                ) : (
                    <SignUpCard setState={setState} />
                )}
            </div>
        </div>
    );
};
