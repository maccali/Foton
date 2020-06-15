import {
  IonList,
  IonFab,
  IonItem,
  IonLabel,
  IonFabButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonSpinner
} from '@ionic/react';
import { add } from 'ionicons/icons';

import React, { useState, useEffect } from 'react';
import './PostList.css';

import api from '../../services/api';

const PostList: React.FC = () => {

  const [postsList, setPostsList] = useState<[]>([]);
  const [load, setLoad] = useState<boolean>(true)

  interface Post {
    postId: number,
    title: string,
    abstract: string,
    text: string
  }

  useEffect(() => {
    (async function () {

      api.get('/api/posts').then(response => {
        if (response.status === 200) {
          console.log(response.data)
          setPostsList(response.data.reverse())
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
          <IonTitle>Lis Of Posts</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton href="/create-post">
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
        <IonList>

          {load ? <IonSpinner name="crescent" /> : ''}
          
          {postsList.map((post: Post) =>
            <IonItem key={post.postId} href={`/post-detail/${post.postId}`}>
              <IonLabel>{post.title}</IonLabel>
            </IonItem>
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default PostList;
