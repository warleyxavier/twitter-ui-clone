import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  EditButton,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Warley Xavier</h1>
        <h2>Jovem mineiro, admirado pelo louco mundo da programação</h2>

        <p>Líder Técnico na Eagle Tecnologia</p>

        <ul>
          <li>
            <LocationIcon />
            Minas Gerais, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido em 16 de abril de 1996
          </li>
        </ul>

        <Followage>
          <span>
            Seguindo <strong>13</strong>
          </span>
          <span>
            <strong>579</strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed/>
    </Container>
  );
};

export default ProfilePage;
