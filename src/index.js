
import ReactDOM from 'react-dom/client'
import './index.css'
import one from './assets/images.jpg'
import two from './assets/images1.jpg'
import three from './assets/images2.jpg'
import four from './assets/images3.jpg'
import five from './assets/cover.jpg'
import six from './assets/cover1.jpg'
import { CiSearch } from "react-icons/ci";
import { IoMdStar } from "react-icons/io";


const ChatList = [
  {
    d_pic: one, name: 'Sindhu', msg: 'Hey! How are you?'
  },

  {
    d_pic: two, name: 'Vicky', msg: 'Haha!! LOL'
  },

  {
    d_pic: three, name: 'Adhi', msg: 'Idiot......'
  },

  {
    d_pic: four, name: 'Sugan', msg: 'Are you sure?'
  },
  {
    d_pic: five, name: 'Siva', msg: 'Bye....'
  },

  {
    d_pic: six, name: 'Rani', msg: 'Gd morn......'
  }
]

function CurrentTime() {
  const options = { hour: '2-digit', minute: '2-digit', hour12: true };
  return new Date().toLocaleTimeString(undefined, options)
}


function Chat(props) {
  return (
    <div className='chat'>
      <img src={props.d_pic} alt='images' />
      <div className='text'>
        <h1>{props.name}</h1>
        <p>{props.msg}</p>
      </div>
      <div className='time'>
        <p> <CurrentTime /></p>
        <IoMdStar style={{ color: 'green', fontSize: '20px' }} />
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <div className='chatbox'>

    <input className='search' placeholder='Search...' type='search' />
    <div style={{ position: 'absolute', top: '34px', right: '4%' }}>
      <CiSearch style={{ cursor: 'pointer' }} size={25} />

    </div>

    {ChatList.map((chat) => (
      <Chat
        d_pic={chat.d_pic}
        name={chat.name}
        msg={chat.msg} />
    ))}

  </div>

);
