import {
    TodoCreateForm 
   } from '../ui-components';
import { useNavigate } from "react-router-dom"
import { withAuthenticator } from '@aws-amplify/ui-react';
import Navigation from './Navigation';
import { DataStore } from 'aws-amplify';
import { Todo } from '../models';
   

const TestPageFigma = ({signOut, user}) => {
    const navigate = useNavigate()

    // 登録処理
    const handleAddTodo = async (fields) => {
        try {
            await DataStore.save(
                new Todo({
                    name: fields.name,
                    description: fields.description,
                    isDone: false,
                    userId: user.attributes.sub,
                })
            );        
        } catch (error) {
            // エラーハンドリング（データ登録が失敗した場合の処理）
            console.error('Todoの追加中にエラーが発生しました:', error);
        }

        navigate('/')
    };
  
    return (
        <div>
            <Navigation username={user.username} onSignOut={signOut} />
            <TodoCreateForm
                onSubmit={async (fields) => {
                // 入力されたデータの文字列の前後の空白を削除する例
                const updatedFields = {};
                Object.keys(fields).forEach((key) => {
                    if (typeof fields[key] === 'string') {
                        updatedFields[key] = fields[key].trim();
                    } else {
                        updatedFields[key] = fields[key];
                    }
                });
                // 入力されたデータを使ってhandleAddTodo関数を呼び出す
                await handleAddTodo(updatedFields);
                }}
            />
        </div>
    );
  };
  
  export default withAuthenticator(TestPageFigma);
