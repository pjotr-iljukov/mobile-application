import React from 'react';
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
import ExploreContainer from '../../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton text="Home" defaultHref="/home" />
                </IonButtons>
                <IonTitle>Tab 2</IonTitle>
            </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 2 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
