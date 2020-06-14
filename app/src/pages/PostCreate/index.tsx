import {
  IonButton,
  IonItem,
  IonInput,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React, { useState } from 'react';
import './PostCreate.css';

const PostCreate: React.FC = () => {

  const [title, setTitle] = useState<string>('');
  const [abstract, setAbstract] = useState<string>('');
  const [text, setText] = useState<string>('');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Create Post</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div className="content-center">

          <IonItem>
            <IonInput
              value={title}
              placeholder="Titulo"
              onIonChange={e => setTitle(e.detail.value!)}>
            </IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              value={abstract}
              placeholder="Resumo"
              onIonChange={e => setAbstract(e.detail.value!)}>
            </IonInput>
          </IonItem>
          <IonItem>
            <IonInput
              value={text}
              placeholder="Conteúdo"
              onIonChange={e => setText(e.detail.value!)}>
            </IonInput>
          </IonItem>
          <IonButton expand="block" fill="outline">Salvar</IonButton>

        </div>
        {/* </IonList> */}
      </IonContent>
    </IonPage>
  );
};

export default PostCreate;
