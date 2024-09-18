import { useContext } from 'react'
import MyContext from './UseContext'

const UseContextHelper = () => {
    const content = useContext(MyContext);
    return (
        <div>
            Content is from useContext: <strong>{content}</strong>
        </div >
    )
}

export default UseContextHelper
