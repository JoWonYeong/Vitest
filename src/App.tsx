import './App.css';
import { Counter } from './components/Counter';
import { Input } from './components/Input';

function App() {
  return (
    <>
      커밋 테스트
      <Counter />
      <Input label={'라벨'} name='input1' />
    </>
  );
}

export default App;
