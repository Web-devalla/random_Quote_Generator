let button = document.querySelector("button");
let quoteShow = document.querySelector('#quote');
let authorShow = document.querySelector('#author');

button.addEventListener('click', () => {
    let quotes = {
        "- Пьер Буаст" : '"Если у человека нет цели, то жизнь его есть не что иное, как продолжительная смерть."',
        "- Пауло Коэльо" : '"Дойдя до конца, люди смеются над страхами, мучившими их вначале."',
        "- Чак Паланик" : '"Если ты не знаешь, чего хочешь, ты в итоге останешься с тем, чего точно не хочешь."',
        "- Оноре де Бальзак" : '"Чтобы дойти до цели, надо идти."',
        "- Махатма Ганди" : '"Мы сами должны стать теми переменами, которые хотим видеть в мире."',
        "- Генри Форд" : '"Препятствия – это те страшные вещи, которые вы видите, когда отводите глаза от цели."',
        "- Тони Роббинс" : '"Постановка целей является первым шагом на пути превращения мечты в реальность."',
        "- Джим Рон" : '"Когда вы знаете, чего хотите, и вы хотите этого достаточно сильно, вы найдете способ получить это."',
        "- Дональд Трамп" : '"Чтобы достичь поставленных целей, нужны терпение и энтузиазм. Мыслите глобально – но будьте реалистами."',
        "- Дуглас Бадлер" : '"Никогда, никогда не позволяйте другим убедить вас, что что-то сложно или невозможно."',
        "- Тони Шей" : '"Чтобы достичь успеха, перестаньте гнаться за деньгами, гонитесь за мечтой."',
        "- Роберт Кольер" : '"Успех — это сумма небольших усилий, повторяющихся изо дня в день."',
        "- Билл Косби" : '"Я не знаю, что является ключом к успеху, но ключ к неудаче — это желание всем угодить."',
        "- Конфуций" : '"Выбери профессию, которую ты любишь, — и тебе не придется работать ни дня в твоей жизни."',
        "- Сократ" : '"Кто хочет – ищет возможности. Кто не хочет – ищет причины."',
        "- Ральф Уолдо Эмерсон" : '"Мы находим в жизни только то, что сами вкладываем в нее."',
    }
    let authors = Object.keys(quotes);

    let author = authors[Math.floor(Math.random()*authors.length)];

    let quote = quotes[author];

    quoteShow.innerHTML = quote;
    authorShow.innerHTML = author;
});

