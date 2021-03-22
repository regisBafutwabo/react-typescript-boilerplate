import React from "react";
import { Header } from "components/organisms";

import { useQuery } from "@apollo/client";
import { getLocalUser } from "apollo/Operations/Client/Queries";
import { AuthService } from "services";
import { initialUser } from "apollo/State";
import { Container, Body } from "./styles";

const StandardTemplate: React.FC = (props: any) => {
    const { children } = props;

    const { loading, error, data } = useQuery(getLocalUser);

    const login = async () => {
        try {
            await AuthService.login();
        } catch (err) {
            alert(err);
        }
    };

    const logout = async () => {
        try {
            await AuthService.logout();
        } catch (err) {
            alert(err);
        }
    };

    return (
        <Container>
            <Header
                Login={login}
                Logout={logout}
                loading={loading}
                error={error}
                data={data}
            />
            <Body>{children}</Body>
        </Container>
    );
};

export default StandardTemplate;
