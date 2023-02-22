import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, SvgIcon } from '../../../components';
import { ButtonInner, TextBox, Text, Logo } from './styles';
import { KAKAO_API, TEXT, ROUTE, ALERT } from '../../../constants';
import {
  GoogleAuthProvider,
  auth,
  signInWithPopup,
  GithubAuthProvider,
} from '../../../utils/firebase';

function ConsumerLogin() {
  const navigate = useNavigate();

  const handleOnSubmit = (api) => (e) => {
    e.preventDefault();
    window.location.assign(api);
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    alert(ALERT.CLIENT[400].MESSAGE);
  };

  const GoogleProvider = new GoogleAuthProvider();
  const GithubProvider = new GithubAuthProvider();

  const GoogleSignUp = () => {
    signInWithPopup(auth, GoogleProvider)
      .then(() => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        // const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        return navigate(ROUTE.HOME.PATH);
      })
      .catch((err) => {
        // Handle Errors here.
        const errorCode = err.code;
        const errorMessage = err.message;
        // The email of the user's account used.
        // const email = err.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(err);
        console.log(errorCode, errorMessage);
      });
  };

  const GithubSignUp = () => {
    signInWithPopup(auth, GithubProvider)
      .then(() => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        // const credential = GithubAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        // const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // return navigate(ROUTE.HOME.PATH);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GithubAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <Form.Container onSubmit={handleOnSubmit(KAKAO_API.URI())}>
      <Logo>YAPICK</Logo>
      <Form.Wrapper>
        <ButtonInner>
          <Form.Button type="submit" color="#ffeb00">
            <TextBox>
              <SvgIcon name="kakao" />
              <Text>{TEXT.CONSUMERLOGIN.KAKAO_LOGIN}</Text>
            </TextBox>
          </Form.Button>
          <Form.Button
            type="button"
            color="#2f3337"
            fontColor="#fdfdfd"
            onClick={GithubSignUp}
          >
            <TextBox>
              <SvgIcon name="gitHub" />
              <Text>{TEXT.CONSUMERLOGIN.GITHUB_LOGIN}</Text>
            </TextBox>
          </Form.Button>
          <Form.Button type="button" onClick={GoogleSignUp}>
            <TextBox>
              <SvgIcon name="google" />
              <Text>{TEXT.CONSUMERLOGIN.GOOGLE_LOGIN}</Text>
            </TextBox>
          </Form.Button>
          <Form.Button
            type="button"
            color="#385499"
            fontColor="#fdfdfd"
            onClick={handleOnClick}
          >
            <TextBox>
              <SvgIcon name="faceBook" />
              <Text>{TEXT.CONSUMERLOGIN.FACEBOOK_LOGIN}</Text>
            </TextBox>
          </Form.Button>
        </ButtonInner>
      </Form.Wrapper>
    </Form.Container>
  );
}

export default ConsumerLogin;
