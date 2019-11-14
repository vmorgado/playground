import { mockedBoard } from './mocks/marble.board.mock';
import { getBlownMarbles } from '../src/boilerplate/duel/rules/get.blown.marbles';

describe('get blown marbles' , () => {
  test('blowing a marble gets us an array adjacent blown marbles ', (done) => {
    expect(getBlownMarbles(mockedBoard, '7-3')).toBe({'7-3': 3, '7-4': 3, '7-5': 3});
    expect(getBlownMarbles(mockedBoard, '2-3')).toBe({'2-1': 1, '2-2': 1, '2-3': 1, '2-4': 1});
    expect(getBlownMarbles(mockedBoard, '7-5')).toBe({'7-3': 3, '7-4': 3, '7-5': 3});
  });
});
