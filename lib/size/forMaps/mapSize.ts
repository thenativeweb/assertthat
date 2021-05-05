import { size } from '../typeAware/size';
import { sum } from '../../utils/sum';

const mapSize = function <TKey, TValue>(value: Map<TKey, TValue>): number {
  return sum(
    [ ...value.values() ].map(
      (item): number => size(item)
    )
  );
};

export {
  mapSize
};
