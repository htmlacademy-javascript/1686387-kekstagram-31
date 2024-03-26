function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      // console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const randomId = createRandomIdFromRangeGenerator(1, 25);
const randomUrl = createRandomIdFromRangeGenerator(1, 25);
const randomCommentId = getRandomInteger(0, 30);
const MESSAGE_ARRAY = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAME_ARRAY = [
  'Степан', 'Оксана', 'Мария', 'Антон'
];

const getDescription = () => {
  const randomAvatar = getRandomInteger(1, 6);
  const randomLikes = getRandomInteger(25, 200);

  return {
    id: randomId(),
    url: `photos/${randomUrl()}.jpg`,
    description: 'оч хорошая фотка',
    likes: randomLikes,
    comments: [{
      id: randomCommentId,
      avatar: `img/avatar-${randomAvatar}.svg`,
      message: MESSAGE_ARRAY[getRandomInteger(0, 2)],
      name: NAME_ARRAY[getRandomInteger(0, NAME_ARRAY.length - 1)],
    }]
  };
};


const similarDescription = Array.from({length: 25}, getDescription);

console.log(similarDescription);
