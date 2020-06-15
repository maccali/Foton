import {
  IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
  IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonBackButton, IonSpinner
} from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import './PostDetail.css';
import api from '../../services/api'


const PostDetail: React.FC = () => {

  const { id } = useParams<{ id: string; }>();

  const [title, setTitle] = useState<string>('');
  const [abstract, setAbstract] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [load, setLoad] = useState<boolean>(true);

  useEffect(() => {
    (async function () {

      api.get(`/api/posts/${id}`).then(response => {
        if (response.status === 200) {
          const { title, abstract, text } = response.data
          setTitle(title);
          setAbstract(abstract);
          setText(text);
          console.log(response.data)
          setLoad(false)
        }
      }).catch(error => {
        console.log('erro')
        setLoad(false)
      })

    })()
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        {load ?
          <IonSpinner name="crescent" /> :
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Resumo</IonCardTitle>
              <IonCardSubtitle>{abstract}</IonCardSubtitle>
              <IonCardTitle>Texto Completo</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>{text}</IonCardContent>
          </IonCard>
        }

      </IonContent>
    </IonPage>
  );
};

export default PostDetail;
