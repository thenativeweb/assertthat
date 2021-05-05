import { size } from '../typeAware/size';
import { sum } from '../../utils/sum';

const objectSize = function (value: object): number {
  return sum([ ...Object.values(value) ].map(
    (item: any): number => size(item)
  ));
};

export {
  objectSize
};
