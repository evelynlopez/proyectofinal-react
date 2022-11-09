import { createRoot } from 'react-dom/client'

import './styles/index.css'
import Movies from './components/Movies'

const root = document.getElementById('root')
createRoot(root).render(<Movies />)
