// 필요한 모듈 불러오기
// require("readline"): Node.js에서 제공하는 내장 모듈 중 하나인 'readline' 모듈을 불러오는 것
// 이 모듈은 사용자와 상호작용하면서 터미널에서 입력을 받거나 출력하는 기능!!
const readline = require("readline");

// 이 함수는 길이가 3인 배열을 반환하고 0부터 9 사이의 서로 다른 난수 생성힘
// 중복x
// const numbers = [] : 빈 배열 numbers를 선언하는 것, 이 배열에는 생성될 서로 다른 3개의 난수가 저장됨
// while (numbers.length < 3) { : 배열 numbers의 길이가 3보다 작을 때까지 반복, 즉 배열이 3개의 요소로 채워질 때까지 반복함
// const randomNum = Math.floor(Nath.random() * 10) : 0부터 1사이의 난수를 생성하고 10을 곱해서 0에서 9사이의 실수로 변환한 뒤 Math.floor를 사용하여 소수점 이하를 버림. 결과적으론 randomNum은 0부터 9까지의 정수가 출력됨
// if (!numbers.includes(randomNum)) { : 생성한 난수가 이미 배열에 포함되어 있지 않은 경우에만 아래 동작 수행함
// !numbers.includes(randomNum) : 배열 numbers에 randomNum이 없을 때를 의미함
// return numbers: 배열이 세 개의 서로 다른 난수로 채워진 후에 numbers(배열)을 반환함
function generateRandomNumbers() {
  const numbers = [];
  while (numbers.length < 3) {
    const randomNum = Math.floor(Math.random() * 10);
    if (!numbers.includes(randomNum)) {
      numbers.push(randomNum);
    }
  }
  return numbers;
}

// 스트라이크와 볼 개수 계산 함수
// let strikes = 0 : 스트라이크 개수를 저장하는 변수 strikes를 초기화
// let balls = 0 : 볼 개수를 저장하는 변수 balls를 초기화
// userInput.forEach((digit, index) => { : userInput 배열의 각 요소에 대해 반복함. digit은 현재 숫자를 의미하고 index는 현재 자릿수를 의미함
// strikes++ : 만약 숫자와 위치가 일치하면 strikes 변수를 증가
// else if (secreatNumbers.includes(digit)) { : 만약 위치는 다르지만 숫자가 일치한다면
// balls++ : 볼을 증가시킴
// return { strikes, balls } : strikes, balls 개수를 객체로 만들어 반환함. 객체로서 두 개의 프로퍼티를 가지고 있으니까 객체 전체를 반환하며 {}(중괄호)를 쓰게 됨!
function countStrikesAndBalls(userInput, secretNumbers) {
  let strikes = 0;
  let balls = 0;

  userInput.forEach((digit, index) => {
    if (digit === secretNumbers[index]) {
      strikes++;
    } else if (secretNumbers.includes(digit)) {
      balls++;
    }
  });

  return { strikes, balls };
}

// 게임을 시작하고 사용자에게 3자리 숫자를 입력받아 스트라이크와 볼을 계산하며 개임이 종료될 때까지 반복!!
// secretNumbers 함수를 호출하여 3자리의 무작위 숫자 배열을 생성
// const secretNumbers = generateRandomNumbers() : 생성된 무작위 숫자 배열을 secretNumbers 변수에 저장함
// ㅣet attempts = 0: 시도 횟수를 저장하는 변수 attempts를 초기화하고 사용자의 몇번째 시도인지 추적(?)함
// const r1 = readline.createInterface({ input: process.stdin, output: process.stdout }) : 사용자와의 상호 직용할 인터페이스를 만듬. 사용자에게 입력을 받고, 결과를 출력하는데 사용됨
// rl.setPrompt("세 자리 숫자를 입력하세요: ") : 사용자에게 입력을 요청하는 프롬프트 메시지 설정
// rl.prompt() : 프롬프트를 표시해서 사용자에게 입력을 기다리도록 함
// rl.on('line', (userInput) => { : 사용자가 입력한 내용을 받아오는 이벤트 리스너 등록
// if (!isValidInput(userInput)) { console.log("세 자리 숫자를 정확하게 입력하세요."); rl.prompt(); return; }: 사용자의 입력이 유효한지 검사하고 유효하지 않으면 오류 메시지를 출력하고 다시 입력을 기다림
// attempts++ : 사용자가 유효한 입력을 했으니 시도 횟수를 증가시킴
// const userDigits = userInput.split("").map(Number) : 사용자의 입력을 각 자리 숫자로 분리하여 숫자 배열로 변환함
// const result = countStrikesAndBalls(userDigits, secretNumbers) : 사용자의 입력과 비밀 숫자를 비교하여 스트라이크와 볼을 계산함
// console.log(`${attempts}번째 시도: ${userInput}`) : 현재 시도 횟수와 사용자의 입력을 출력
// console.log(`${result.balls}B${result.strikes}S`) : 계산된 스트라이크와 볼 개수를 추력
// if (result.strikes === 3) { console.log(${attempts}번만에 맞췄습니다. 게임 종료.); rl.close(); } : 만약 3자리 숫자를 모두 맞추면 축하 메시지를 출력하고 게임을 종료
// else { rl.prompt(); } : 3자리 숫자를 모두 맞추지 못했으면 다음 입력을 기다리도록 프롬프트를 다시 표시
// rl.on("close", () => { process.exit(0); }) : 사용자가 입력을 종료하면 프로그램을 종료
function playGame() {
  // 비밀 숫자 생성
  const secretNumbers = generateRandomNumbers();
  let attempts = 0; // 시도 횟수 초기화

  // 사용자 입력을 받기 위한 인터페이스 생성
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.setPrompt("세 자리 숫자를 입력하세요: ");
  rl.prompt();

  rl.on("line", (userInput) => {
    // 입력이 유효한지 확인
    if (!isValidInput(userInput)) {
      console.log("세 자리 숫자를 정확하게 입력하세요.");
      rl.prompt();
      return;
    }

    attempts++; // 시도 횟수 증가

    // 사용자 입력을 숫자 배열로 변환
    const userDigits = userInput.split("").map(Number);

    // 스트라이크와 볼 계산
    const result = countStrikesAndBalls(userDigits, secretNumbers);

    // 결과 출력
    console.log(`${attempts}번째 시도: ${userInput}`);
    console.log(`${result.balls}B${result.strikes}S`);

    // 게임 종료 여부 확인
    if (result.strikes === 3) {
      console.log(`${attempts}번만에 맞췄습니다. 게임 종료.`);
      rl.close();
    } else {
      rl.prompt();
    }
  });

  rl.on("close", () => {
    process.exit(0);
  });
}

// 사용자 입력이 유효한지 확인하는 함수
// 길이가 3이면서
// 숫자로만 이루어져 있어야 유효함
// ex) "123", '456'은 유효하며, 'abc', '12a'는 유효하지 않음
// 유효성 검사를 통과한 경우 true를 반환하고 그렇지 않으면 falsefmf 반환함
// 이 함수를 통해 게임 코드에서 올바른 입력 가능함
function isValidInput(userInput) {
  return userInput.length === 3 && /^\d+$/.test(userInput);
}

// 게임 시작
playGame();
