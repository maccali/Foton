import {
  IonList,
  IonButton,
  IonItem,
  IonInput,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSpinner,
  IonToast
} from '@ionic/react';
import React, { useState } from 'react';
import './Login.css';

import Auth from '../../helpers/Auth'
import api from '../../services/api'


const Login: React.FC = () => {

  const [email, setEmail] = useState<string>('admin@gmail.com');
  const [password, setPassword] = useState<string>('password');

  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const [load, setLoad] = useState<boolean>(false);

  interface ObjectToken {
    access_token: string,
    expires_in: number,
  }

  async function submit() {
    setError(false)
    setLoad(true)

    var data = { email, password }

    api.post('/api/auth/login', data).then(response => {
      if (response.status === 200) {
        const { access_token, expires_in } = response.data

        Auth.saveToken(access_token, String(expires_in))

        console.log(Auth.getToken())

        window.location.href = '/'

      }
    }).catch(error => {
      console.log('erro')
      setErrorMessage('Email ou senha Invalidos')
      setError(true)
      setLoad(false)
    })
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
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
            <IonInput value={email} type="email" placeholder="E-mail" onIonChange={e => setEmail(e.detail.value!)}></IonInput>
          </IonItem>
          <IonItem>
            <IonInput value={password} type="password" placeholder="Password" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
          </IonItem>
          {!load ? <IonButton
            expand="block"
            fill="outline"
            onClick={() => submit()}>
            Salvar
            </IonButton> :
            <IonSpinner name="crescent" />
          }

        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Login;
