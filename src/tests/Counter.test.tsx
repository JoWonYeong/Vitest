import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from '../components/Counter';

describe('Counter', async () => {
  it('초기값 0으로 컴포넌트 렌더링', () => {
    render(<Counter />);
    expect(screen.getByText('결과값: 0')).toBeInTheDocument();
  });

  it('증가 버튼 누르면 값 1로 변경', async () => {
    render(<Counter />);
    const incrementButton = screen.getByText('증가');

    userEvent.click(incrementButton);
    /**
     * expect(screen.getByText('결과값: 1')).toBeInTheDocument();
     * 버튼 클릭을 통해 값을 변경하는 것과 동시에 텍스트 찾음
     * 테스트가 실행되는 시점에서는 '결과값: 0'이기 때문에 '결과값: 1' 요소를 못찾음
     */
    /**
     * 버튼 클릭 후 결과값이 1로 증가하는 것을 확인하려면
     * 결과값이 1로 변경되는 시점에서 텍스트 확인해야함
     * await 통해 결과값이 1로 변한 시점에 해당 텍스트를 찾아 테스트
     */
    // await screen.findByText('결과값: 1');
    expect(await screen.findByText('결과값: 1')).toBeInTheDocument();

    /**
     * getByText()
     * 동기적으로 작동
     * 요소가 바로 화면에 나타날 것으로 예상할 때 사용
     * DOM에서 특정 텍스트를 포함한 요소를 찾아 반환, 만약 해당 요소 없으면 에러
     * 요소가 존재할 때까지 기다리거나 대기하지 않고, 요소를 찾지 못하면 바로 에러 던짐
     *
     * findByText()
     * 비동기적으로 작동
     * 요소를 기다려야 할 때 사용
     * DOM에서 특정 텍스트를 포함한 요소를 찾아 반환, 만약 요소 없으면 일정 시간동안 기다린 후, 요소를 찾거나 타임아웃될 때까지 대기(기본 타임아웃: 1000ms)
     * 요소를 찾을 때까지 대기하며, 요소를 찾게 되면 프로미스를 resolve하고 반환
     */
  });

  it('감소 버튼 누르면 값 -1로 변경', async () => {
    render(<Counter />);
    const decrementButton = screen.getByText('감소');

    userEvent.click(decrementButton);
    await screen.findByText('결과값: -1');
  });

  it('증가 4번, 감소 2번 누르면 값 2로 변경', async () => {
    render(<Counter />);
    const incrementButton = screen.getByText('증가');
    const decrementButton = screen.getByText('감소');

    userEvent.click(incrementButton);
    userEvent.click(incrementButton);
    userEvent.click(incrementButton);
    userEvent.click(incrementButton);
    userEvent.click(decrementButton);
    userEvent.click(decrementButton);

    await screen.findByText('결과값: 2');
  });
});
