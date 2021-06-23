import { useHistory } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss'

export function Home () {

    const history = useHistory();
    const {user, signInWithGoogle} = useAuth()

    async function handleCreateRoom(){
        
        if (!user) {
            await signInWithGoogle();
        }

        history.push('rooms/new');

    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Illustation showing questions and answers" />
                <strong>Create realtime Q&amp;A rooms</strong>
                <p>Clear up your audience questions</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Brand logo" />
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="Google's logo" />
                        Create room using Google
                    </button>
                    <div className="separator">Or join existent room</div>
                    <form>
                        <input 
                        type="text"
                        placeholder="Type room code" 
                        />
                        <Button type="submit">
                            Join
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}