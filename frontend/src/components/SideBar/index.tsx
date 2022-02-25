import React from 'react';

import {
  Container,
  Logo,
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

const SideBar: React.FC = () => (
  <Container>
    <Logo />

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

export default SideBar;
