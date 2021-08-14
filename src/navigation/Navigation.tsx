import React from "react";
import {IonIcon} from "@ionic/react";
import {person, settings, image} from "ionicons/icons";

import { Tabs, Tab, TabIcon } from "../core/components/Tabs";
import {Settings, Profile, Main} from "../Screens";

export const Navigation = () => {
    return (
        <Tabs>
            <Tab 
                title={<TabIcon icon={person} title="Профиль" />} 
                titleActive={<TabIcon icon={person} active title="Профиль" />}
            >
                <Profile />
            </Tab>

            <Tab 
                title={<TabIcon icon={image} title="Список" />} 
                titleActive={<TabIcon icon={image} active title="Список" />} 
            >
                <Main />
            </Tab>

            <Tab 
                title={<TabIcon icon={settings} title="Настройки" />} 
                titleActive={<TabIcon icon={settings} active title="Настройки" />} 
            >
                <Settings />
            </Tab>
        </Tabs>
    )
}