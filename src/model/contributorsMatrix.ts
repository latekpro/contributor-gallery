import signatures, { Contributor } from "./contributors";

const COLUMNS = 30;
const ROWS = 20;

export interface MatrixCell {
  isActive?: boolean;
  contributor: Contributor | null;
  login?: string | null;
}

const matrix: MatrixCell[] = [];
for (let x = 0; x < COLUMNS; x++) {
  for (let y = 0; y < ROWS; y++) {
    const contributor = signatures.shift() || null;
    const login = contributor ? contributor.login : null;
    matrix.push({ contributor, login });
  }
}

export default matrix;
