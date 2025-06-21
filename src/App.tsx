import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';

export function App() {
  return (
    <>
      <Heading attr1={123} attr2='String'>
        Olá Mundo 1
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
