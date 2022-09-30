import React from 'react';

export default function Profiles({ children, ...restProps }) {
    return <Container ...restProps>{children}</Container>;
}

Profiles.Title = function ProfilesTitle({ children, ...restProps }) {
    return <Title {...restProps}{children}</Title>;
}

Profiles.List = function ProfilesTitle({ children, ...restProps }) {
    return <List {...restProps}{children}</List>;
}

Profiles.User = function ProfilesUser({ children, ...restProps }) {
    return <User {...restProps}{children}</User>;
}

Profiles.Picture = function ProfilesPicture({ children, ...restProps }) {
    return <Picture {...restProps}{children}</Picture>;
}
