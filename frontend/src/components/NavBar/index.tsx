import React from 'react';

import {
  Container,
  Wrapper,
  WrapperGames,
  Avatar,
  NotificationIcon,
  ControlIcon,
  Separator,
  BusinessIcon,
  GameIcon,
  NewsIcon,
  ChatIcon,
  SavesIcon,
  SupportIcon,
  SettingsIcon,
} from './styles';
import logo from '../../assets/images/Logo.svg';

const NavBar: React.FC = () => (
  <Container>
    <img src={logo} alt="Logo" />

    <Wrapper>
      <Avatar />
      <NotificationIcon />
    </Wrapper>

    <WrapperGames>
      <ControlIcon />
      <Separator />
      <BusinessIcon />
      <BusinessIcon />
      <Separator small />
      <GameIcon />
      <GameIcon />
      <GameIcon />
    </WrapperGames>

    <Wrapper>
      <Separator />
      <NewsIcon />
      <ChatIcon />
      <SavesIcon />
      <Separator />
    </Wrapper>

    <Wrapper>
      <SupportIcon />
      <SettingsIcon />
    </Wrapper>
  </Container>
);

export default NavBar;
