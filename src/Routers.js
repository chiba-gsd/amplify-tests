import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./component/HomePage";
import AddPage from "./component/AddPage";
import TestPage from "./component/TestPage";
import Page404 from "./component/Page404";
import TestPageFigma from "./component/TestPageFigma";
import ApiDemoPage from "./component/ApiDemoPage";
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import { Authenticator, translations } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';
import { I18n } from 'aws-amplify';
Amplify.configure(awsExports);

I18n.putVocabularies(translations);
I18n.setLanguage('ja');
I18n.putVocabularies({
  ja: {
    'Sign in': 'ログインする',
    'Sign In': 'ログイン',
    'Sign Up': '会員登録する',
    'Create Account': '会員登録',
    'Email': 'メールアドレス',
    'Enter your Email': 'メールアドレスを入力してください',
    'Enter your Password': 'パスワードを入力してください',
    'Enter your Username': 'ユーザー名を入力してください',
    'Password': 'パスワード',
    'Please confirm your Password': '確認用パスワードを入力してください',
    'Nickname': 'ニックネーム',
    'Enter your Nickname': 'ニックネームを入力してください',
    'Your passwords must match': 'パスワードを合致させてください',
    'Invalid verification code provided, please try again.': '確認コードに誤りがあるため、再度お試しください',
    'Back to Sign In': 'ログイン画面に戻る',
    'Cannot reset password for the user as there is no registered/verified email or phone_number': '会員登録されていないためパスワードリセットできません',
  },
});

const Routers = () => {
    return (
        // <Authenticator.Provider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/addPage" element={<AddPage/>}/>
                    <Route path="/test" element={<TestPage/>}/>
                    <Route path="/figma" element={<TestPageFigma/>}/>
                    <Route path="/demo" element={<ApiDemoPage/>}/>
                    <Route path="/*" element={<Page404/>}/>
                </Routes>
            </BrowserRouter>
        // </Authenticator.Provider>
    )
}
export default Routers
