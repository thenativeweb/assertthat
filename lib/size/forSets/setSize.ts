import { size } from '../typeAware/size';
import { sum } from '../../utils/sum';

const setSize = function <TContent>(value: Set<TContent>): number {
  return sum(
    [ ...value.values() ].map(
      (item): number => size(item)
    )
  );
};

export {
  setSize
};
