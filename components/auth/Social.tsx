"use client";

import React, { FC } from 'react';
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

interface SocialProps {

}

export const Social: FC<SocialProps> = ({}) => {


    return (
        <div className="flex items-center w-full gap-x-2">
            {/*  Google */}
            <Button
                size="lg"
                variant="outline"
                className="w-full"
                onClick={() => {
                }}
            >
                <FcGoogle className="w-5 h-5"/>
            </Button>

            {/*  Github  */}
            <Button
                size="lg"
                variant="outline"
                className="w-full"
                onClick={() => {}}
            >
                <FaGithub className="w-5 h-5" />
            </Button>
        </div>
    );
};