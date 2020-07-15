import React, { memo, useState, useCallback } from 'react'
import axios from 'axios'

export default memo(({ postId }) => {
  const [content, setContent] = useState('')

  const onSubmit = useCallback(async (event) => {
    event.preventDefault()

    await axios.post(`http://posts.com/posts/${postId}/comments`, {
      content
    })

    setContent('')
  }, [postId, content])

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            value={content}
            onChange={e => setContent(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
})
