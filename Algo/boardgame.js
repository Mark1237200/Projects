// N * N의 크기를 가진 보드판 위에서 게임을 하려고 합니다. 게임의 룰은 다음과 같습니다.

// 좌표 왼쪽 상단(0, 0)에 말을 놓는다.
// 말은 상, 하, 좌, 우로 이동할 수 있고, 플레이어가 조작할 수 있다.
// 조작의 기회는 딱 한 번 주어진다.
// 조작할 때 U, D, L, R은 각각 상, 하, 좌, 우를 의미하며 한 줄에 띄어쓰기 없이 써야 한다.
// 예시: UDDLLRRDRR, RRRRR
// 한 번 움직일 때마다 한 칸씩 움직이게 되며, 그 칸 안의 요소인 숫자를 획득할 수 있다.
// 방문한 곳을 또 방문해도 숫자를 획득할 수 있다.
// 보드 밖을 나간 말은 OUT 처리가 된다.
// 칸 안의 숫자는 0 또는 1이다.
// 단, 좌표 왼쪽 상단(0, 0)은 항상 0이다.
// 획득한 숫자를 합산하여 숫자가 제일 큰 사람이 이기게 된다.
// 보드판이 담긴 board와 조작하려고 하는 문자열 operation이 주어질 때, 말이 해당 칸을 지나가면서 획득한 숫자의 합을 구하는 함수를 작성하세요.

function boardGame(board, operation) {
    // TODO: 여기에 코드를 작성하세요.
    // U or D 은 다음 배열 전 배열
    // L or R 은 다음 인덱스 전 인덱스
    // 해당 배열의 인덱스에 1이 있으면 count++
    // 이탈시 OUT
    let count = 0, x = 0, y = 0
  
    if(operation[0] === 'U') {
      return "OUT"
    }
    for(let i=0; i<operation.length; i++) {
      let op = operation[i]
  
      if(op === 'U') {
        x -= 1
        count += Number(board[x][y])
      } else if(op === 'D') {
        x += 1
        count += Number(board[x][y])
      } else if(op === 'R') {
        y += 1
        count += Number(board[x][y])
      } else if(op === 'L') {
        y -= 1
        count += Number(board[x][y])
      }
    }
    return count
  };