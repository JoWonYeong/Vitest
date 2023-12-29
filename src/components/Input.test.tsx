import { describe, expect, it } from 'vitest';
import { Input } from './Input';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

/**
 * describe()
 * 테스트 스위트를 그룹화하고 각 테스트 케이스 정의
 */
/**
 * it()
 * 실제 테스트를 정의하는 함수
 */
describe('Input', async () => {
  // <Input /> 컴포넌트가 올바르게 렌더링되었는지 확인
  it('Input 컴포넌트 렌더링', () => {
    // render() : <Input /> 렌더링
    render(
      <Input
        name='email'
        type='email'
        error={undefined}
        placeholder='Email'
        label='Email Address'
      />
    );
    // 'Email Address' 텍스트를 포함한 요소가 화면에 존재하는지 검증
    expect(screen.getByText('Email Address')).toBeInTheDocument();
    // 'email address'라는 라벨을 가진 텍스트박스(role이 textbox인 요소)가 화면에 존재하는지를 검증
    // toBeInTheDocument() : 특정 요소가 문서 안에 존재하는지를 테스트
    expect(
      screen.getByRole('textbox', {
        name: /email address/i,
      })
    ).toBeInTheDocument();
  });

  // 특정 입력 요소의 값을 변경하는지를 테스트
  it('Input 값 변경', async () => {
    render(
      <Input
        name='email'
        type='email'
        error={undefined}
        placeholder='Email'
        label='Email Address'
      />
    );

    // 호출하여 테스트 중인 화면에 대한 테스트 플레이그라운드 URL을 출력
    // 테스트 중에 렌더링된 화면을 시각적으로 확인 가능
    // screen.logTestingPlaygroundURL();

    const input = screen.getByRole('textbox', {
      name: /email address/i,
    });

    // userEvent.type()을 사용하여 input 요소에 '1234' 값 입력
    await userEvent.type(input, '1234');
    // 해당 input 요소의 값이 '1234'인지 확인
    expect(input).toHaveValue('1234');
  });

  // <Input /> 컴포넌트가 에러 상태일 때 올바르게 렌더링되었는지 확인
  it('Input 에러 상태일 때 alert', () => {
    render(
      <Input
        name='email'
        type='email'
        placeholder='Email'
        label='Email Address'
        error='Please enter your email'
      />
    );
    expect(
      screen.getByRole('textbox', {
        name: /email address/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByRole('alert')).toHaveTextContent(
      'Please enter your email'
    );
  });
});
