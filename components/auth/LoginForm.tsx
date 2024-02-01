import React, {FC} from 'react';
import { CardWrapper } from "@/components/auth/CardWrapper";

export const LoginForm: FC = ({}) => {
    return (
        <CardWrapper
            headerLabel="Welcome back"
            backButtonLabel="Don't have an account?"
            backButtonHref="/auth/register"
            showSocial
        >
            LoginForm
        </CardWrapper>
    );
}