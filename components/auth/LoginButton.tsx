"use client";

import React, { memo, FC, ReactNode } from 'react';
import { useRouter } from "next/navigation";

interface LoginButtonProps {
    children: ReactNode;
    mode?: "modal" | "redirect";
    asChild?: boolean;
}

export const LoginButton: FC<LoginButtonProps> = memo(({
    children,
    mode,
    asChild
}) => {
    const router = useRouter();
    
    const onClick = () => {
        router.push('/auth/login');
    }

    if(mode == "modal") {
        return (
            <span>
                TODO: Implement me
            </span>
        );
    }

    return (
        <span onClick={onClick} className="cursor-pointer">
            {children}
        </span>
    );
});