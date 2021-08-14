import React, { FC, useMemo } from "react";
import {IonIcon} from "@ionic/react";

import styles from "./Tabs.module.css";

interface TabIconProps {
    icon: string;
    active?: boolean;
    title?: string
}   

export const TabIcon: FC<TabIconProps> = (props) => {
    const {icon, active, title} = props;

    const activeStyle = useMemo(() => ({color: active ? '#0076ff' : '#999'}), [active]);

    return (
        <div className={styles.tabIcon}>
            <IonIcon icon={icon} style={activeStyle} size="small" />
            {!!title && <small style={activeStyle}>{title}</small>}
        </div>
    )
}