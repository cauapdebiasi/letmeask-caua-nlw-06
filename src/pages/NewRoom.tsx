import { Link } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

import '../styles/auth.scss'

export function NewRoom () {

    // const { user } = useAuth();

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
                    <h2>Create a new room</h2>
                    <form>
                        <input 
                        type="text"
                        placeholder="Type room name" 
                        />
                        <Button type="submit">
                            Create room
                        </Button>
                    </form>
                    <p>
                        Want to join an existing room? <Link to="/">click here</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}