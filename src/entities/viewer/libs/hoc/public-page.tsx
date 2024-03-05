import {useRefresh, useViewer} from "@entities/viewer";
import {ReactNode, useEffect, useState} from "react";
import {TokenService} from "@entities/token";
import {Progress} from "@chakra-ui/react";

export const publicPage = (children: ReactNode) => {
    return (
        <PublicPage>
            {children}
        </PublicPage>
    );
}

const PublicPage = ({children}: { children: ReactNode }) => {
    const {mutate: refreshMutate, isPending} = useRefresh();
    const {loginViewer} = useViewer()
    const [isAccess, setAccess] = useState(false);

    useEffect(() => {
        refreshMutate(undefined, {
            onSuccess: ({access}) => {
                loginViewer();
                TokenService.setAccessToken(access);
            },
            onSettled: () => {
                setAccess(true);
            }
        });
    }, []);

    if (isPending)
        return <Progress isIndeterminate/>;

    return (isAccess ? children : null);
}
