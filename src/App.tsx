import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';

export function App() {
  console.log('Oi');
  return (
    <>
      <Heading>Olá Mundo 1</Heading>
      <Heading>Olá Mundo 2</Heading>
      <Heading>Olá Mundo 3</Heading>
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
