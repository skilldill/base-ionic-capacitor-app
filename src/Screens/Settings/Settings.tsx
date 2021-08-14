import React from "react";
import {IonContent, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar} from "@ionic/react";

export const Settings = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Settings</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonItem>
                    <IonLabel>
                        Item
                    </IonLabel>
                </IonItem>
            </IonContent>
        </IonPage>
    )
}