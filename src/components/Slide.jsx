import './Slide.css'

function Slide({ title, description, advantages, disadvantages, codeExample, image }) {
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
          <img src={image} alt={`${title}視覺化`} />
        </div>
      </div>
    </div>
  )
}

export default Slide 