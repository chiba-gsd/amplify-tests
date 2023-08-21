import { useNavigate } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import { withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { DataStore } from 'aws-amplify';
import { Todo } from '../models';
import Navigation from './Navigation';
import { useAlert } from 'react-alert'


const ApiDemoPage = ({signOut, user}) => {
    const alert = useAlert()
    const [goods, setGoods] = useState([]);
    const [inputName, setInputName] = React.useState('');
    const [inputDescription, setInputDescription] = React.useState('');
    const [inputPrice, setInputPrice] = React.useState('');
    const [inputSearchName, setInputSearchName] = React.useState('');

    // IDでレコード取得
    const getDataFromDynamoDB = async (event) => {
        event.preventDefault();
        try {
            // const API_ENDPOINT = 'APIのURL';
            const API_ENDPOINT = 'https://t455aodda5.execute-api.ap-northeast-1.amazonaws.com/default/lambda-demo-db-api';
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: inputSearchName,
                })
            });
            const getresult = await response.json();
            setGoods(getresult)
            setInputSearchName("")
        } catch (err) { console.log('レコードを取得できませんでした:',err) }
    }

    // 全レコード取得
    const getDataFromDynamoDBAll = async () => {        
        try {
            // const API_ENDPOINT = 'APIのURL';
            const API_ENDPOINT = 'https://t455aodda5.execute-api.ap-northeast-1.amazonaws.com/default/lambda-demo-db-api';
            const response = await fetch(API_ENDPOINT, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const getresult = await response.json();
            setGoods(getresult);
        } catch (err) { console.log('レコードを取得できませんでした:',err) }
    }

    // 登録処理
    const handleAddDynamoDB = async (event) => {
        event.preventDefault();
        try {
            // const API_ENDPOINT = 'APIのURL';
            const API_ENDPOINT = 'https://0hs53kyonf.execute-api.ap-northeast-1.amazonaws.com/default/lambda-demo-db-register-api';
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: inputName,
                    description: inputDescription,
                    price: inputPrice,
                })
            });
            const getresult = await response.json();
            alert.show(getresult);
        } catch (err) { console.log('レコードを取得できませんでした:',err) }
    };

    //　削除処理
    const handleDelete = async (id, name, description, price) => {
        try {
            // const API_ENDPOINT = 'APIのURL';
            const API_ENDPOINT = 'https://z5x8e1ud5e.execute-api.ap-northeast-1.amazonaws.com/default/lambda-demo-db-delete-api';

            console.log(id)
       
            const response = await fetch(API_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: id,
                })
            });
            const getresult = await response.json();
            alert.show(getresult);
        } catch (err) { console.log('レコードを取得できませんでした:',err) }
    }

    const styles = {
        table: { width: '100%', borderCollapse: 'collapse', borderSpacing: '0' },
        todo: { marginBottom: 30 },
        center: { textAlign: 'center'},
        inputContainer: { margin: '10px' },
        button: { marginLeft: '10px' },
    };
  
    return (
        <div>
            <Navigation username={user.username} onSignOut={signOut} />
            <form style={styles.form} onSubmit={handleAddDynamoDB}>
                <div style={styles.inputContainer}>
                <label style={styles.inputLabel}>商品名:</label>
                <input
                    style={styles.input}
                    type="text"
                    placeholder="商品名"
                    value={inputName}
                    onChange={(event) => setInputName(event.target.value)}
                />
                </div>
                <div style={styles.inputContainer}>
                <label style={styles.inputLabel}>商品説明: </label>
                <input
                    style={styles.input}
                    type="text"
                    placeholder="商品説明"
                    value={inputDescription}
                    onChange={(event) => setInputDescription(event.target.value)}
                />
                </div>
                <div style={styles.inputContainer}>
                <label style={styles.inputLabel}>価格: </label>
                <input
                    style={styles.input}
                    type="text"
                    placeholder="価格"
                    value={inputPrice}
                    onChange={(event) => setInputPrice(event.target.value)}
                />
                </div>
                <button style={styles.button} type="submit">登録</button>
            </form>
            
            <div style={{ margin: '100px' }}></div>

            <form style={styles.form} onSubmit={getDataFromDynamoDB}>
                <div style={styles.inputContainer}>
                <label style={styles.inputLabel}>name:</label>
                <input
                    style={styles.input}
                    type="text"
                    placeholder="name"
                    value={inputSearchName}
                    onChange={(event) => setInputSearchName(event.target.value)}
                />
                <button style={styles.button} type="submit">検索</button>
                </div>
            </form>
            <div style={{ margin: '10px' }}></div>
            <button style={styles.button} onClick={getDataFromDynamoDBAll}>レコード一覧取得</button>
            <table style={styles.table}>
            <thead>
            <tr>
                <th style={styles.center}>id</th>
                <th style={styles.center}>name</th>
                <th style={styles.center}>Description</th>
                <th style={styles.center}>price</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
                {goods?.map((goods, index) => (
                    <tr key={goods.id ? goods.id : index} style={styles.goods}>
                        <td style={styles.center}>{goods.id}</td>
                        <td style={styles.center}>{goods.name}</td>
                        <td style={styles.center}>{goods.description}</td>
                        <td style={styles.center}>{goods.price}</td>
                        <td style={styles.center}>
                            <button onClick={() => handleDelete(goods.id, goods.name, goods.description, goods.price)}>削除</button>
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
  };
  
  export default withAuthenticator(ApiDemoPage);