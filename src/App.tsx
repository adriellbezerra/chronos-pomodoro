import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Olá Mundo 1
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        explicabo ducimus alias iste nam praesentium tempora dignissimos quia
        commodi cum! Architecto blanditiis adipisci provident quos laboriosam
        qui totam expedita modi.
      </p>
    </>
  );
}

//Uma forma de exportar
//export { App };

//outra forma de exportar
//export default App;
