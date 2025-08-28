import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <div className='container'>
        <div className='content'>
          <section>LOGO</section>
        </div>
      </div>

      <div className='container-fluid'>
        <div className='container'>
          <div className='content'>
            <section>MENU</section>
          </div>
        </div>
      </div>

      <div className='container-fluid'>
        <div className='container'>
          <div className='content'>
            <section>FORM</section>
          </div>
        </div>
      </div>

      <div className='container-fluid'>
        <div className='container'>
          <div className='content'>
            <section>FOOTER</section>
          </div>
        </div>
      </div>
    </>
  );
}

//Uma forma de exportar
//export { App };

//outra forma de exportar
//export default App;
