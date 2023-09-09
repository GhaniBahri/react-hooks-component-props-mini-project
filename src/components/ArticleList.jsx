import React from 'react'
import Article from './Article'

function ArticleList({posts}) {
  return (
    <main>
        {posts.map(p=><Article key={p.id} title={p.title} date={p.date} preview={p.preview} mins={p.minutes} />)}
    </main>
  )
}

export default ArticleList