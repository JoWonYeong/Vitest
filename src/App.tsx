import './App.css';
import { Counter } from './components/Counter';
import { Input } from './components/Input';

function App() {
  return (
    <>
      <Counter />
      <Input label={'라벨'} name='input1' />
    </>
  );
}

export default App;
