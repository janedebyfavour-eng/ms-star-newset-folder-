let cur = '0', expr = '', justEvaled = false;

function setDisplay() {
  const el = document.getElementById('main');
  el.textContent = cur.length > 12 ? parseFloat(cur).toExponential(4) : cur;
  document.getElementById('expr').textContent = expr;
}

function calcNum(n) {
  if (justEvaled) { cur = n; expr = ''; justEvaled = false; }
  else cur = cur === '0' ? n : cur + n;
  if (cur.length > 15) cur = cur.slice(0, 15);
  setDisplay();
}

function calcDot() {
  if (justEvaled) { cur = '0.'; expr = ''; justEvaled = false; setDisplay(); return; }
  if (!cur.includes('.')) cur += '.';
  setDisplay();
}

function calcOp(op) {
  justEvaled = false;
  expr = cur + ' ' + op;
  cur = '0';
  setDisplay();
}

function calcEq() {
  if (!expr) return;
  const parts = expr.trim().split(' ');
  const a = parseFloat(parts[0]);
  const o = parts[1];
  const b = parseFloat(cur);
  let res;
  if (o === '+') res = a + b;
  else if (o === '−') res = a - b;
  else if (o === '×') res = a * b;
  else if (o === '÷') res = b !== 0 ? a / b : 'Error';

  expr = parts[0] + ' ' + o + ' ' + cur + ' =';
  cur = res === 'Error' ? 'Error' : String(parseFloat(res.toFixed(10)));
  justEvaled = true;
  setDisplay();
}

function calcAC() {
  cur = '0'; expr = ''; justEvaled = false;
  setDisplay();
}

function calcDel() {
  if (justEvaled) { calcAC(); return; }
  cur = cur.length > 1 ? cur.slice(0, -1) : '0';
  setDisplay();
}

function calcPct() {
  cur = String(parseFloat(cur) / 100);
  setDisplay();
}