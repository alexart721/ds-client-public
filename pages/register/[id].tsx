import React, { useState } from 'react';
import { GetServerSideProps } from 'next';
import Register from '../../components/Register/Register';
import styles from '../../styles/signup.module.css';
import { User } from '../../types';
import { checkToken, fetchUser } from '../../services/apiServices';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const accessToken = context.params?.id;
  let user: User;
  const roles = 'User';

  function isString(checkAccessToken: string | string[] | undefined): checkAccessToken is string {
    return (checkAccessToken as string).trim !== undefined;
  }

  if (!accessToken) {
    return {
      notFound: true,
    };
  }

  if (isString(accessToken)) {
    const response = await checkToken(accessToken, roles).then((res) => res.json());
    if (response.message === 'Approved') {
      user = await fetchUser(accessToken, response.id).then((res) => res.json());

      return {
        props: { user, accessToken },
      };
    }
  }

  return {
    notFound: true,
  };
};

interface Props {
  user: User,
  accessToken: string,
}

const RegisterPage: React.FC<Props> = ({ user, accessToken }) => {
  const [isApproved] = useState<boolean>(Boolean(user));

  const filteredUser: User = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    license: user.license,
    state: user.state,
  };

  return (
    <div className={styles.container}>
      {isApproved
        ? <Register user={filteredUser} accessToken={accessToken} />
        : <div>Link no longer valid.</div>}
    </div>
  );
};

export default RegisterPage;
