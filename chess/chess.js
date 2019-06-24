rows = [0, 8, 7, 6, 5, 4, 3, 2, 1, 0];
cols = [0, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 0];

var $container = document.createElement('div');
$container.classList.add('container');

var $board = document.createElement('div');
$board.classList.add('board');

for (var row = 0; row < rows.length; row++) {
    var $line = document.createElement('div');
    $line.classList.add('line');

    for (var col = 0; col < cols.length; col++) {
        var $cell = document.createElement('div');
        $cell.classList.add('cell');
        if (rows[row] === 0 || cols[col] === 0) {
            $cell.classList.add('text');
        } else {
            if (row % 2 === 0 && col % 2 === 0) {
                $cell.classList.add('white');
            } else if (row % 2 !== 0 && col % 2 !== 0) {
                $cell.classList.add('white');
            } else {
                $cell.classList.add('black');
            }
        }

        if (rows[row] === 0 && cols[col] !== 0) {
            $cell.textContent = cols[col];
        } else if (rows[row] !== 0 && cols[col] === 0) {
            $cell.textContent = rows[row];
        }
        $line.appendChild($cell);
    }
    $board.appendChild($line);
}
$container.appendChild($board);
document.body.appendChild($container);