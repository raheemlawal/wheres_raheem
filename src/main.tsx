/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { PuzzleWalletProvider } from '@puzzlehq/sdk';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className='h-screen w-screen'>
    <PuzzleWalletProvider
      dAppName="Where's Raheem?"
      dAppDescription='Inspired by Sesame Street '
      dAppUrl='https://wheres-raheem.vercel.app/'
      dAppIconURL='https://wheres-raheem.vercel.app//alex_head.png'
    >
      <App />
    </PuzzleWalletProvider>
  </div>
);
