interface LessShittyError {
  message: string;
}

const makeErrorLessShitty = function <TError extends Error>({ error }: {
  error: TError;
}): TError {
  return {
    ...error,
    message: error.message
  };
};

export type {
  LessShittyError
};

export {
  makeErrorLessShitty
};
