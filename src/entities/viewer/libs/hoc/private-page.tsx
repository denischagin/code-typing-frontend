import {ReactNode, useEffect} from "react";
import {useRefresh, useViewer} from "@entities/viewer";
import {useNavigate} from "react-router-dom";
import {paths} from "@pages/routes";
import {TokenService} from "@entities/token";
import {Progress} from "@chakra-ui/react";

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
                loginViewer();
                TokenService.setAccessToken(access);
            },
            onError: () => {
                navigate(paths.loginPage);
            }
        });
    }, []);

    if (isPending)
        return <Progress isIndeterminate/>;

    return (isAuthenticated ? children : null);
}
