import React from 'react'

export default function TextForm() {
  return (
    <div>
      <div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" 
  id="floatingTextarea" rows={20 } cols={20}></textarea>
  <label for="floatingTextarea">Comments</label>
</div>
    </div>
  )
}
