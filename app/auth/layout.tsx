import { ReactNode } from "react";

const AuthLayout = ({
    children
}: {
    children: ReactNode
}) => {

    return (
        <div className="h-full flex items-center justify-center bg-slate-900 text-indigo-50">
            {children}
        </div>
    );
};

export default AuthLayout