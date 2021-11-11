const quotes = [{
        quote: "포기해야겠다는 생각이 들 때야 말로 성공에 가까워진 때이다.",
        author: "Bob Parsons",
    },
    {
        quote: "꿈을 기록하는 것이 목표였던 적은 없다. 꿈을 실현하는 것이 나의 목표다.",
        author: "Man-lay",
    },
    {
        quote: "최고의 경쟁력은 열정이다.",
        author: "Jack Welch",
    },
    {
        quote: "가장 나답게 인생을 뛰어넘어야 한다.그것이 내 삶의 주인으로 사는 법이다.",
        author: "Takuya Senda",
    },
    {
        quote: "나는 10번 시도하면 9번 실패했다. 그래서 10 번씩 시도했다.",
        author: "George Bernard Shaw",
    },
    {
        quote: "우리가 진정으로 소유하는 것은 시간 뿐이다. 가진 것이 달리 아무 것도 없는 이에게도 시간은 있다.",
        author: "Baltasar Gracian",
    },
    {
        quote: "네 자신의 생활을 즐기라. 자신의 생활을 남과 견주어 보지 마라.",
        author: "Marquis de Condorcet",
    },
    {
        quote: "내일은 우리가 어제로부터 무엇인가 배웠기를 바란다.",
        author: "John Wayne",
    },
    {
        quote: "앞서 가는 방법의 비밀은 시작하는 것이다.",
        author: "Mark Twain",
    },
    {
        quote: "행운은 100퍼센트 노력한 뒤에 남는 것이다.",
        author: "Langston Coleman",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;