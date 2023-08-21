import { useNavigate } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import { withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { DataStore } from 'aws-amplify';
import { Todo } from '../models';
import Navigation from './Navigation';
import { useAlert } from 'react-alert'

const HomePage = ({ signOut, user }) => {
    const navigate = useNavigate();
    const [todos, setTodos] = useState([]);
    const alert = useAlert()

    // イニシャルデータ読み込み
    useEffect(() => {
        async function fetchData() {
            const todos = await DataStore.query(Todo);
            setTodos(todos);
        }
        fetchData();
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            refreshTodoList();
            alert.show("メッセージ");
        }, 20000); // 5秒をミリ秒に変換して指定
    
        // コンポーネントがアンマウントされたときにintervalをクリアする
        return () => {
          clearInterval(intervalId);
        };
      }, [alert]);
    //　レコード読み込み
    const refreshTodoList = async () => {
        try {
            const todos = await DataStore.query(Todo);
            setTodos(todos)
        } catch (err) { console.log('レコードを取得できませんでした') }
    }

    // 更新処理
    const handleCheckboxChange = async (index, value) => {
        const todoToUpdate = todos[index];
        const original = await DataStore.query(Todo, todoToUpdate.id);
        await DataStore.save(
            Todo.copyOf(original, updated => {
            updated.isDone = value
            })
        );
        refreshTodoList();
    };

    // 削除処理
    const handleDelete = async (index) => {
        await DataStore.delete(Todo, todos[index].id);
        refreshTodoList();
    };


    const styles = {
        table: { width: '100%', borderCollapse: 'collapse', borderSpacing: '0' },
        todo: { marginBottom: 30 },
        center: { textAlign: 'center'},
    };


    return (
        <div className="app-container">
            <Navigation username={user.username} onSignOut={signOut} />
            <h2>Todoリスト</h2>
            <button onClick={() => navigate('/addPage')}>レコード登録</button>
            <button onClick={() => navigate('/figma')}>レコード登録_figma</button>
            <button onClick={() => navigate('/test')}>サンプルページ</button>
            <button onClick={() => navigate('/demo')}>APIデモページ</button>
            <table style={styles.table}>
            <thead>
            <tr>
                <th style={styles.center}>Done</th>
                <th style={styles.center}>Task</th>
                <th style={styles.center}>Description</th>
                <th style={styles.center}></th>
            </tr>
            </thead>
            <tbody>
            {todos?.map((todo, index) => (
                <tr key={todo.id ? todo.id : index} style={styles.todo}>
                    <td style={styles.center}>
                    <input
                        type="checkbox"
                        checked={todo.isDone ?? false}
                        onChange={(event) => handleCheckboxChange(index, event.target.checked)}
                    />
                    </td>
                    <td style={styles.center}>{todo.name}</td>
                    <td style={styles.center}>{todo.description.toString()}</td>

                    <td style={styles.center}>
                    <button onClick={() => handleDelete(index)}>削除</button>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
            
        </div>
    )

}
export default withAuthenticator(HomePage);