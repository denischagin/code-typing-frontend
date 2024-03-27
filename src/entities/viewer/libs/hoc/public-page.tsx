import {ReactNode, useEffect, useState} from "react";

import {Progress} from "@chakra-ui/react";

import {useRefresh, useViewer} from "@entities/viewer";

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
                loginViewer(access);
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
