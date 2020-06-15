import {
  IonButton,
  IonItem,
  IonInput,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonTextarea,
  IonSpinner,
  IonToast,
  IonBackButton,
  IonButtons
} from '@ionic/react';
import React, { useState } from 'react';
import './PostCreate.css';

import api from '../../services/api'


const PostCreate: React.FC = () => {

  const [title, setTitle] = useState<string>('');
  const [abstract, setAbstract] = useState<string>('');
  const [text, setText] = useState<string>('');

  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const [load, setLoad] = useState<boolean>(false);

  async function submit() {
    setError(false)
    setLoad(true)

    var data = { title, abstract, text }

    api.post('/api/posts', data).then(response => {
      if (response.status === 200) {
        window.location.href = '/'
      }
    }).catch(error => {
      console.log('erro')
      setErrorMessage('Dados inválidos')
      setError(true)
      setLoad(false)
    })

  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>Create Post</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonList>
          <IonToast
            isOpen={error}
            onDidDismiss={() => setError(false)}
            message={errorMessage}
            duration={2000}
            color="danger"
          />
          <IonItem>
            <IonInput
              value={title}
              placeholder="Titulo"
              onIonChange={e => setTitle(e.detail.value!)}>
            </IonInput>
          </IonItem>
          <IonItem>
            <IonTextarea
              value={abstract}
              placeholder="Resumo"
              onIonChange={e => setAbstract(e.detail.value!)}>
            </IonTextarea>
          </IonItem>
          <IonItem>
            <IonTextarea
              value={text}
              placeholder="Conteúdo"
              onIonChange={e => setText(e.detail.value!)}>
            </IonTextarea>
          </IonItem>


          {!load ? <IonButton expand="block" fill="outline" onClick={() => submit()}>Salvar</IonButton>
            : <IonSpinner name="crescent" />
          }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default PostCreate;
