database.ref('expenses')
.once('value')
.then((snapshot) => {
  const expenses = [];
  snapshot.forEach((childSnapshot) => {
    expenses.push({
      id: childSnapshot.key,
      ...childSnapshot.val()
    });
  });
  console.log(expenses);
});

database.ref('expenses').on('value', (snapshot) => {
const expenses = [];
snapshot.forEach((childSnapshot) => {
  expenses.push({
    id: childSnapshot.key,
    ...childSnapshot.val()
  });
});
console.log(expenses);
});

setTimeout(() => {
database.ref('expenses/-KzI3I-fhMtTEpOkuGHq/description').set('not beer money');
}, 3500)

database.ref('expenses').on('child_removed', (snapshot) => {
console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').push({
description: 'beer money',
note: 'money for beer',
amount: 500,
createdAt: 50
});

database.ref('expenses').push({
description: 'even more beer money',
note: 'money for beer',
amount: 500000,
createdAt: 53
});

database.ref('expenses').push({
description: 'more beer money',
note: 'money for beer',
amount: 5000,
createdAt: 52
});

database.ref('notes').push({
title: 'todo 2',
body: 'do different stuff!'
});

database.ref().on('value', (snapshot) => {
console.log(snapshot.val());
});

setTimeout(() => {
database.ref('age').set(25);
}, 3500);

database.ref('location/city')
.once('value')
.then((snapshot) => {
  const val = snapshot.val();
  console.log(val);
}).catch((e) => {
  console.log(err);
});

database.ref().set({
name: 'Brady',
age: 23,
isAwesome: true,
location: {
  city: 'imperial',
  state: 'missouri'
}
}).then(() => {
console.log('data saved!');
}).catch((err) => {
console.log(err);
});

database.ref('age').set(24);
database.ref('location/city').set('arnold');

database.ref('attributes').set({
height: 75,
weight: 150
}).then(() => {
console.log('data saved');
}).catch((err) => {
console.log(err);
});

database.ref().update({
'location/city': 'arnold'
}).then(() => {
console.log('update successful');
}).catch((err) => {
console.log(err);
});

database.ref()
.remove()
.then(() => {
  console.log('succesfully deleted');
}).catch((err) => {
  console.log(err);
});

database.ref('isAwesome').set(null)
.then(() => {
console.log('isAwesome deleted');
}).catch((err) => {
console.log(err);
});
