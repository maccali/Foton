import {
  IonList,
  IonItemDivider,
  IonItem,
  IonLabel,
  IonInput,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React, { useState, useEffect } from 'react';
import './PostList.css';

const PostList: React.FC = () => {

  const [postsList, setPostsList] = useState<[]>([]);

  interface Post {
    id: number,
    title: string,
    abstract: string,
    text: string

  }

  useEffect(() => {
    console.log('po')
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lis Of Posts</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonList>
          {postsList.map((post: Post) => 
            <IonItem key={post.id}>
              <IonLabel>{post.title}</IonLabel>
            </IonItem>
          )}
          <IonItem>
            <IonLabel>Pokémon Yellow</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Mega Man X</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>The Legend of Zelda</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Pac-Man</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Super Mario World</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default PostList;
