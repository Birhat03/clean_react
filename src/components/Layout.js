export default function Layout ({children}){
    return (
        <div className="container">
        <header>
                <h1>Nyheter.no</h1>
                <nav>
                    <li>Om oss</li>
                    <li>Siste nytt</li>
                    <li>Tips oss</li>
                </nav>
        </header>            
        <main>
            {children}
        </main>
        <footer>
            <span>Ikoner..</span>
        </footer>
        </div>

    )
}