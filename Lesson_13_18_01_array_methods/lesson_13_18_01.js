const users = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618',
      },
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains',
    },
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    address: {
      street: 'Douglas Extension',
      suite: 'Suite 847',
      city: 'McKenziehaven',
      zipcode: '59590-4157',
      geo: {
        lat: '-68.6102',
        lng: '-47.0653',
      },
    },
    phone: '1-463-123-4447',
    website: 'ramiro.info',
    company: {
      name: 'Romaguera-Jacobson',
      catchPhrase: 'Face to face bifurcated interface',
      bs: 'e-enable strategic applications',
    },
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    address: {
      street: 'Hoeger Mall',
      suite: 'Apt. 692',
      city: 'South Elvis',
      zipcode: '53919-4257',
      geo: {
        lat: '29.4572',
        lng: '-164.2990',
      },
    },
    phone: '493-170-9623 x156',
    website: 'kale.biz',
    company: {
      name: 'Robel-Corkery',
      catchPhrase: 'Multi-tiered zero tolerance productivity',
      bs: 'transition cutting-edge web services',
    },
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    address: {
      street: 'Skiles Walks',
      suite: 'Suite 351',
      city: 'Roscoeview',
      zipcode: '33263',
      geo: {
        lat: '-31.8129',
        lng: '62.5342',
      },
    },
    phone: '(254)954-1289',
    website: 'demarco.info',
    company: {
      name: 'Keebler LLC',
      catchPhrase: 'User-centric fault-tolerant solution',
      bs: 'revolutionize end-to-end systems',
    },
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    address: {
      street: 'Norberto Crossing',
      suite: 'Apt. 950',
      city: 'South Christy',
      zipcode: '23505-1337',
      geo: {
        lat: '-71.4197',
        lng: '71.7478',
      },
    },
    phone: '1-477-935-8478 x6430',
    website: 'ola.org',
    company: {
      name: 'Considine-Lockman',
      catchPhrase: 'Synchronised bottom-line interface',
      bs: 'e-enable innovative applications',
    },
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    address: {
      street: 'Rex Trail',
      suite: 'Suite 280',
      city: 'Howemouth',
      zipcode: '58804-1099',
      geo: {
        lat: '24.8918',
        lng: '21.8984',
      },
    },
    phone: '210.067.6132',
    website: 'elvis.io',
    company: {
      name: 'Johns Group',
      catchPhrase: 'Configurable multimedia task-force',
      bs: 'generate enterprise e-tailers',
    },
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    address: {
      street: 'Ellsworth Summit',
      suite: 'Suite 729',
      city: 'Aliyaview',
      zipcode: '45169',
      geo: {
        lat: '-14.3990',
        lng: '-120.7677',
      },
    },
    phone: '586.493.6943 x140',
    website: 'jacynthe.com',
    company: {
      name: 'Abernathy Group',
      catchPhrase: 'Implemented secondary concept',
      bs: 'e-enable extensible e-tailers',
    },
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    address: {
      street: 'Dayna Park',
      suite: 'Suite 449',
      city: 'Bartholomebury',
      zipcode: '76495-3109',
      geo: {
        lat: '24.6463',
        lng: '-168.8889',
      },
    },
    phone: '(775)976-6794 x41206',
    website: 'conrad.com',
    company: {
      name: 'Yost and Sons',
      catchPhrase: 'Switchable contextually-based project',
      bs: 'aggregate real-time technologies',
    },
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
      street: 'Kattie Turnpike',
      suite: 'Suite 198',
      city: 'Lebsackbury',
      zipcode: '31428-2261',
      geo: {
        lat: '-38.2386',
        lng: '57.2232',
      },
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
      name: 'Hoeger LLC',
      catchPhrase: 'Centralized empowering task-force',
      bs: 'target end-to-end models',
    },
  },
];

// *************************** Task 1 ******************************

// 1. Создать новый массив, состоящий из name и username. Записать строку/элемент в массив в формате '<Имя Фамилия>, <юзернэйм>'

// console.log(users.map((elem) => `${elem.name}, ${elem.username}`));

// **************************** Task 2 ***************************

// 2. Создать новый массив, в который попадут первые три элемента массива users

// let newArray = users.filter((elem) => elem.id <= 3);
// console.log(newArray);

// 2 Solution

// let newArray2 = users.slice(0, 3);
// console.log(newArray2);

// 3 Solution

// let newArray3 = users.filter((elem, index) => index <= 2);
// console.log(newArray3);

// ***************************** Task 3 ***************************

// 3. Сформировать массив из строк, состоящих из username пользователя. Username должен начинаться с маленькой буквы.

// let newArray = users.map(
//   (elem) => elem.username[0].toLowerCase() + elem.username.slice(1)
// );

// console.log(newArray);

// **************************** Task 4 *****************************

// 4. Сформировать массив из адресов пользователей в формате '<suite>, <street>, <city> <zipcode>'

// let newArray = users.map(
//   (elem) =>
//     `${elem.address.suite}, ${elem.address.street}, ${elem.address.city}, ${elem.address.zipcode}`
// );
// console.log(newArray);

// 2 Solution destruktarizacija

// const newArray = users.map(
//   ({ address }) =>
//     `${address.suite}, ${address.street}, ${address.city}, ${address.zipcode}`
// );
// console.log(newArray);

// 3 Solution bolse ukoracivajem s destruktorizacijej

// const newArray = users.map(({ address }) => {
//   const { suite, street, city, zipcode } = address;
//   return `${suite}, ${street}, ${city}, ${zipcode}`;
// });
// console.log(newArray);

// **************************** Task 5 *****************************

// 5. Сформировать новый массив, в который попадут юзеры/объекты, чье имя начинается на букву C

// let newArray = users.filter((elem) => elem.name[0] === "C");
// console.log(newArray);

// 2 Solution

// let newArray = users.filter((elem) => elem.name.startsWith("C"));
// console.log(newArray);

// ************************** Homework *****************************

// *********************** Task 1 **********************************
// 1. Сформировать массив из пользователей, чей никнэйм начинается на букву K

const usernameArrayOfK = users.filter(elem => elem.username.startsWith('K'));
console.log(usernameArrayOfK);

// *********************** Task 2 **********************************

// 2. Сформировать массив из строк, описывающей каждого юзера в формате: <Имя Фамилия>, <номер телефона> (<город>, <индекс>)

const ArrayOfString = users.map(
  ({ name, phone, address }) =>
    `${name}, ${phone} (${address.city} ${address.zipcode})`
);
console.log(ArrayOfString);

// ************************ Task 3 **********************************
// 3. Сформировать массив из веб-сайтов каждого пользователя

const webSitesArray = users.map(elem => elem.website);
console.log(webSitesArray);

// ************************* Task 4 *********************************
// 4. Сформировать массив из объектов с информацией о компаниях, в которых работают юзеры

const companies = users.map(elem => elem.company);

console.log(companies);

// ************************* Task 5 *********************************
// 5. Сформировать массив из юзеров, чьи номера телефона начинается с единицы

const userPhonesStart1 = users.filter(elem => elem.phone.startsWith('1'));

console.log(userPhonesStart1);
