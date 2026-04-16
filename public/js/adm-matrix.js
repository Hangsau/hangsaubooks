/* adm-matrix.js — 矩陣互動：篩選 + 展開格子 */

(function () {
  const matrix = document.getElementById('adm-matrix');
  if (!matrix) return;

  /* ── Stage filter ── */
  const filterBtns = document.querySelectorAll('.adm-filter-btn');

  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const stage = btn.dataset.stage;

      // update active button
      filterBtns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      if (stage === 'all') {
        // restore all columns
        matrix.classList.remove('is-filtered');
        matrix.querySelectorAll('.adm-head-cell, .adm-cell').forEach(function (el) {
          el.classList.remove('is-active');
        });
      } else {
        matrix.classList.add('is-filtered');
        // show only matching stage
        matrix.querySelectorAll('.adm-head-cell, .adm-cell').forEach(function (el) {
          if (el.dataset.stage === stage) {
            el.classList.add('is-active');
          } else {
            el.classList.remove('is-active');
          }
        });
      }
    });
  });

  /* ── Cell expand / collapse ── */
  matrix.querySelectorAll('.adm-cell').forEach(function (cell) {
    cell.addEventListener('click', function () {
      cell.classList.toggle('is-open');
    });
  });

})();
