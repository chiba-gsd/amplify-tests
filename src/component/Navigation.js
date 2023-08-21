import React from 'react';
import { Heading, Button } from '@aws-amplify/ui-react';

const Navigation = ({ username, onSignOut }) => {
  return (
    <div style={styles.navigation}>
      <Heading level={1}>こんにちは。 {username}さん</Heading>
      <Button style={styles.button} onClick={onSignOut}>サインアウト</Button>
    </div>
  );
};

const styles = {
  navigation: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    padding: '0 20px', /* 左右のスペースを追加 */
  },

  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    fontSize: 16,
    border: 'none',
    borderRadius: 4,
  },

};

export default Navigation;