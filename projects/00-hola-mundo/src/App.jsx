import './App.css'

export function App() {
 return (
    <article className='tw-followCard'>
    <header className='tw-followCard-header'>
      <img src="https://unavatar.io/midudev" alt="El avatar de midudev" className='tw-followCard-avatar'/>
      <div className='tw-followCard-info'>
        <strong className='tw-followCard-name'>Álvaro Campos Sánchez</strong>
        <span className='tw-followCard-userName'>@alvarocam</span>
      </div>
    </header>

    <aside>
      <button className='tw-followCard-button'>
        Seguir
      </button>
    </aside>
  </article>
 )
}
