import { useHistory } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss'
import { FormEvent } from 'react';
import { useState } from 'react';
import { database } from '../services/firebase';

export function Home () {

    const history = useHistory();
    const {user, signInWithGoogle} = useAuth()
    const [roomCode, setRoomCode] = useState('');

    async function handleCreateRoom(){
        
        if (!user) {
            await signInWithGoogle();
        }

        history.push('rooms/new');

    }

    async function handleJoinRoom(event: FormEvent){

        event.preventDefault();

        if (roomCode.trim() === ''){
            return;
        }

        const roomRef = await database.ref(`rooms/${roomCode}`).get();

        if (!roomRef.exists()){
            window.alert('Room does not exist.');
            return;
        }

        if (roomRef.val().endedAt){
            alert('This room has already ended');
            return;
        }

        history.push(`/rooms/${roomCode}`);
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
                    <form onSubmit={handleJoinRoom}>
                        <input 
                        type="text"
                        placeholder="Type room code" 
                        onChange={event => setRoomCode(event.target.value)}
                        value={roomCode}
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