import React, { FC } from "react";
import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";

interface NavbarProps {
    title: string
}

export const Navbar: FC<NavbarProps> = (props) => {
    const {title} = props;

    return (
        <IonHeader>
            <IonToolbar>
                <IonTitle>{title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    )
}