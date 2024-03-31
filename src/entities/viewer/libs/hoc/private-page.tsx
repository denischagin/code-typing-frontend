import {ReactNode, useEffect} from "react";

import {useNavigate} from "react-router-dom";

import {useRefresh, useViewer} from "@entities/viewer";
import {paths} from "@pages/routes";
import {CodeLoading, CodeLoadingProgress, CodeLoadingTitle} from "@shared/ui/loading";

export const privatePage = (children: ReactNode) => {
    return (
        <PrivatePage>
            {children}
        </PrivatePage>
    );
}

const PrivatePage = ({children}: { children: ReactNode }) => {
    const {mutate: refreshMutate, isPending} = useRefresh();
    const navigate = useNavigate();
    const {isAuthenticated, loginViewer} = useViewer()

    useEffect(() => {
        refreshMutate(undefined, {
            onSuccess: ({access}) => {
                loginViewer(access);
            },
            onError: () => {
                navigate(paths.loginPage);
            }
        });
    }, []);

    if (isPending)
        return (
            <CodeLoading>
                <CodeLoadingTitle/>
                <CodeLoadingProgress/>
            </CodeLoading>
        )

    return (isAuthenticated ? children : null);
}
