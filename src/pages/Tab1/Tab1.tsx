import React, { useEffect, useState } from "react";

import {
  IonButtons,
  IonBackButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  useIonViewDidEnter,
  useIonViewDidLeave,
  IonLabel
} from "@ionic/react";
import "./Tab1.css";

const Tab2: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonHeader collapse="condense">
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton text="Home" defaultHref="/home" />
                </IonButtons>
                <IonTitle>Tab 1</IonTitle>
            </IonToolbar>
          </IonHeader>
        </IonContent>
      </IonPage>
    );
  };

export default React.memo(Tab2);
