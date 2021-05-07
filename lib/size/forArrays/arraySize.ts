import { size } from '../typeAware/size';
import { sum } from '../../utils/sum';

const arraySize = function <TContent>(value: TContent[]): number {
  return sum(
    value.
      map(
        (item): number => size(item)
      )
  );
};

export {
  arraySize
};
