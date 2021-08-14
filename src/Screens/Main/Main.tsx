import React from "react";
import {IonContent, IonHeader, IonItem, IonLabel, IonPage, IonTitle, IonToolbar} from "@ionic/react";

export const Main = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>List</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                
                <h1>Main</h1>
            </IonContent>
        </IonPage>
    )
}