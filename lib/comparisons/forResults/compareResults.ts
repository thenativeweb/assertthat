import { Result } from "defekt";
import { ResultDiff } from "lib/diffs/forResults/ResultDiff";

const compareResults = function (
    actual: Result<any, Error>,
    expected: Result<any, Error>
): ResultDiff {

    return {} as any;

}

export {
    compareResults
};
