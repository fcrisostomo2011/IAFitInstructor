import { Avatar, Button, Card, Text } from 'react-native-paper';
import React from 'react';
import { ImageBackground } from 'react-native';
const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

export const MyComponent = () => (
  <Card >
    <Card.Title title="Card Prueba" subtitle="Prueba Subtitle" left={LeftContent} />
    <Card.Content>
      <Text variant="titleLarge">Prueba</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button >Cancel</Button>
      <Button dark="true">OK</Button>
    </Card.Actions>
  </Card>
);

