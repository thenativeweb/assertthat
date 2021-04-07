type AssertthatForArray<TContent = any> = (actual: TContent[]) => {
  is: {
    equalTo: (expected: TContent[]) => void;
    sameAs: (expected: TContent[]) => void;
    sameJsonAs: (expected: TContent[]) => void;

    containing: (expected: TContent) => void;
    containingAnyOf: (expected: Iterable<TContent>) => void;
    containingAllOf: (expected: Iterable<TContent>) => void;
    atLeast: (expected: TContent[]) => void;
    atMost: (expected: TContent[]) => void;
    empty: () => void;

    not: {
      equalTo: (expected: TContent[]) => void;
      sameAs: (expected: TContent[]) => void;
      sameJsonAs: (expected: TContent[]) => void;

      containing: (expected: TContent) => void;
      containingAnyOf: (expected: Iterable<TContent>) => void;
      containingAllOf: (expected: Iterable<TContent>) => void;
      atLeast: (expected: TContent[]) => void;
      atMost: (expected: TContent[]) => void;
      empty: () => void;
    };
  };
};

const assertthatForArray = function <TContent>(actual: TContent[]): ReturnType<AssertthatForArray<TContent>> {
  return {
    is: {
      equalTo (expected: TContent[]): void {

      },
      sameAs (expected: TContent[]): void {

      },
      sameJsonAs (expected: TContent[]): void {

      },

      containing (expected: TContent): void {

      },
      containingAnyOf (expected: Iterable<TContent>): void {

      },
      containingAllOf (expected: Iterable<TContent>): void {

      },
      atLeast (expected: TContent[]): void {

      },
      atMost (expected: TContent[]): void {

      },
      empty (): void {

      },

      not: {
        equalTo (expected: TContent[]): void {

        },
        sameAs (expected: TContent[]): void {

        },
        sameJsonAs (expected: TContent[]): void {

        },

        containing (expected: TContent): void {

        },
        containingAnyOf (expected: Iterable<TContent>): void {

        },
        containingAllOf (expected: Iterable<TContent>): void {

        },
        atLeast (expected: TContent[]): void {

        },
        atMost (expected: TContent[]): void {

        },
        empty (): void {

        }
      }
    }
  };
};

export type {
  AssertthatForArray
};

export {
  assertthatForArray
};
