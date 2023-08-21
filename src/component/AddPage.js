import React from 'react';
import { DataStore } from 'aws-amplify';
import { Todo } from '../models';
import { useNavigate } from "react-router-dom"
import { withAuthenticator } from '@aws-amplify/ui-react';
import Navigation from './Navigation';


const AddPage = ({signOut, user}) => {
  const navigate = useNavigate()

  const [inputTask, setInputTask] = React.useState('');
  const [inputDescription, setInputDescription] = React.useState('');

  // 登録処理
  const handleAddTodo = async (event) => {
    event.preventDefault(); // デフォルトのフォーム送信動作を防止

    await DataStore.save(
      new Todo({
        name: inputTask,
        description: inputDescription,
        isDone: false,
        userId: user.attributes.sub,
      })
    );

    // 入力欄をリセット
    setInputTask('');
    setInputDescription('');

    navigate('/')
  };

  const styles = {
    inputContainer: {
      display: 'flex',
      flexDirection: 'row', // 横並びに変更
      alignItems: 'center', // 入力欄とラベルを縦方向に中央揃え
      marginBottom: '10px',
    },
    inputLabel: {
      marginRight: '10px', // ラベルと入力欄の間にスペースを追加
      fontSize: '16px',
      fontWeight: 'bold',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      padding: '20px',
      // alignItems: 'center',
      width: '80%',
    },
    input: {
      width: '100%',
      padding: '10px',
      marginBottom: '10px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.addTodoContainer}>
      <Navigation username={user.username} onSignOut={signOut} />
      <form style={styles.form} onSubmit={handleAddTodo}>
        <div style={styles.inputContainer}>
          <label style={styles.inputLabel}>Task:</label>
          <input
            style={styles.input}
            type="text"
            placeholder="Task"
            value={inputTask}
            onChange={(event) => setInputTask(event.target.value)}
          />
        </div>
        <div style={styles.inputContainer}>
          <label style={styles.inputLabel}>Description: </label>
          <input
            style={styles.input}
            type="text"
            placeholder="Description"
            value={inputDescription}
            onChange={(event) => setInputDescription(event.target.value)}
          />
        </div>
        <button style={styles.button} type="submit">
          登録
        </button>
      </form>
    </div>
  )

};

export default withAuthenticator(AddPage);