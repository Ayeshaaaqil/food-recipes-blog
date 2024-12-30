'use client'

import { useState } from 'react'

interface Comment {
  id: number
  text: string
  author: string
}

export default function CommentSection({ postId }: { postId: number }) {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState({ text: '', author: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.text && newComment.author) {
      setComments([...comments, { ...newComment, id: Date.now() }])
      setNewComment({ text: '', author: '' })
    }
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <ul className="space-y-4 mb-4">
        {comments.map((comment) => (
          <li key={comment.id} className="bg-gray-100 p-4 rounded">
            <p className="font-semibold">{comment.author}</p>
            <p>{comment.text}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="author" className="block mb-2">Name:</label>
          <input
            type="text"
            id="author"
            value={newComment.author}
            onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="comment" className="block mb-2">Comment:</label>
          <textarea
            id="comment"
            value={newComment.text}
            onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
            className="w-full p-2 border rounded"
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Submit Comment
        </button>
      </form>
    </div>
  )
}

