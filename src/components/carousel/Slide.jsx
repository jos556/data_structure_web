import { useState } from 'react'
import './Slide.css'

function Slide({ title, description, advantages, disadvantages, codeExample, image }) {
  const [showImage, setShowImage] = useState(false)

  return (
    <div className="slide">
      <h2>{title}</h2>
      <div className="content">
        <div className="description">
          <p>{description}</p>
          <h3>優點：</h3>
          <ul>
            {advantages.map((advantage, index) => (
              <li key={index}>{advantage}</li>
            ))}
          </ul>
          <h3>缺點：</h3>
          <ul>
            {disadvantages.map((disadvantage, index) => (
              <li key={index}>{disadvantage}</li>
            ))}
          </ul>
        </div>
        <div className="code-example">
          <pre><code>{codeExample}</code></pre>
        </div>
        <div className="visualization">
          <button 
            className="view-image-btn"
            onClick={() => setShowImage(true)}
          >
            查看視覺化圖片
          </button>
        </div>
      </div>

      {/* 彈出視窗 */}
      {showImage && (
        <div className="modal-overlay" onClick={() => setShowImage(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img src={image} alt={`${title}視覺化`} />
            <button 
              className="close-modal"
              onClick={() => setShowImage(false)}
            >
              關閉
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Slide 