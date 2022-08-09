import { Header } from './components/Header';
import { Post } from './components/Post'

import styles from './App.module.css' 

import './global.css';
import { Sidebar } from './components/Sidebar';



const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Odin042.png',
      name: 'Guilherme Fernandes',
      role: 'Front-End Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-08-05 19:32:41'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/muriloao.png',
      name: 'Murilo Oliveira',
      role: 'Tech Lead Mobile'
    },
    content: [
      { type: 'paragraph', content: 'Aoba 👋' },
      { type: 'paragraph', content: 'Povos, lembrem de atualizar o status das tasks 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-08-06 12:55:15'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/araujoCRS.png',
      name: 'Carlos Roberto',
      role: 'Developer Sênior'
    },
    content: [
      { type: 'paragraph', content: 'E aiiiiiiiiiiiiiiii 👋' },
      { type: 'paragraph', content: 'Gente, terminei o deploy agora 00:34' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-08-07 23:40:22'),
  },
];

function App() {
  return (
    <div className="App">
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
          return(
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
           />
            )
           })}
        </main>
      </div>
    </div>
  )
}

export default App;


