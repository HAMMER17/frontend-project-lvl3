import onChange from 'on-change';

export const object = {
  foo: false,
  a: {
    b: [
      {
        c: false,
      },
    ],
  },
};

let index = 0;
const watchedObject = onChange(object, function (path, value, previousValue, applyData) {
  console.log('Object changed:', ++index);
  console.log('this:', this);
  console.log('path:', path);
  console.log('value:', value);
  console.log('previousValue:', previousValue);
  console.log('applyData:', applyData);
});

watchedObject.foo = true;
