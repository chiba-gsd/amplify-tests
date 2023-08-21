import {HeroLayout3, SideBar, NavBar} from '../ui-components';

import { withAuthenticator } from '@aws-amplify/ui-react';

const TestPage = ({ user }) => {
    
    return (
        <div>
            <NavBar username={user.username}/>
            <div style={{ display: 'flex' }}>
                <SideBar />
                <HeroLayout3 width={"50vw"}/>
            </div>
        </div>
    );

};
  
export default withAuthenticator(TestPage);