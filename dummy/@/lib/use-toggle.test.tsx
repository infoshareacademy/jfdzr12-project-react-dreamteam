import {describe, expect, it} from 'vitest';
import {useToggle} from './use-toggle';
import { renderHook, act } from '@testing-library/react'


describe('useToggle', () => {
    it('should return initial value', () => {
			const { result } = renderHook(() => useToggle(false));
		
      const [state] = result.current
      expect(state).toBe(false); 
    });

		it('should return toggled value', () => {
			const { result } = renderHook(() => useToggle(false));
			const [,toggle ] = result.current;

		
			act(() => toggle())
			const [state] = result.current;
			expect(state).toBe(true);
		});
});

 