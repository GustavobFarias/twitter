import { GlobalCss } from './styles'
import Home from './Home'

const App = () => {
    return (
        <div>
        <GlobalCss />
        <div className="container">
            <Home />
        </div>
        </div>
    )
}

export default App