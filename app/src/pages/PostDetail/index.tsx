import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import './Page.css';

const Page: React.FC = () => {

  const { id } = useParams<{ id: string; }>();

  const [title, setTitle] = useState<string>('');
  const [abstract, setAbstract] = useState<string>('');
  const [text, setText] = useState<string>('');

  useEffect(() => {
    console.log('detail')
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={name} />
      </IonContent>
    </IonPage>
  );
};

export default Page;
