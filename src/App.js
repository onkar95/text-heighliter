import React from 'react'
import { DataProvider } from './text-Heightliter/components/Context'
import Main from './text-Heightliter/Main'

const App = () => {
    return (
        <div>
            <DataProvider>
                <Main />
            </DataProvider>
        </div>
    )
}

export default App