import validator from '../validator';

const formData = { username: 'jack' };

describe('validator 函数', () => {
  it('检测规则不存在', (done) => {
    const fields = [
      {
        type: 'username',
        label: '用户名',
        input: { type: 'text' }
      }
    ];
    validator(formData, fields).then((validateMessageGroup) => {
      expect(validateMessageGroup).toBeInstanceOf(Object);
      expect(validateMessageGroup.username).toBeInstanceOf(Array);
      expect(validateMessageGroup.username.length).toEqual(0);
      done();
    });
  });
  it('设置检测规则', (done) => {
    const formData = { username: '', password: '123123' };
    const fields = [
      {
        type: 'username',
        label: '用户名',
        input: { type: 'text' },
        rules: [
          {
            type: 'required',
            match: true,
            message: '不能为空'
          },
          {
            type: 'minLength',
            match: 6,
            message: '不能少于 6 个字'
          },
          {
            type: 'maxLength',
            match: 12,
            message: '不能多于 12 个字'
          },
          {
            type: 'pattern',
            match: /[A-Z]+/,
            message: '不符合规则'
          }
        ]
      },
      {
        type: 'password',
        label: '密码',
        input: { type: 'password' },
        rules: [
          {
            type: 'required',
            match: true,
            messageType: 'warning',
            message: '不能为空'
          },
          {
            type: 'minLength',
            match: 3,
            messageType: 'warning',
            message: '不能少于 3 个字'
          },
          {
            type: 'maxLength',
            match: 4,
            message: '不能多于 4 个字'
          },
          {
            type: 'pattern',
            match: /[0-9]+/,
            message: '不符合规则'
          },
          {
            type: 'custom',
            match: () => true,
            message: '错误'
          },
          {
            type: 'custom',
            match: () => false,
            message: '错误'
          },
          {
            type: 'custom',
            match: () => {
              return new Promise((resolve) => resolve());
            },
            message: 'Promise'
          },
          {
            type: 'custom',
            match: () => {
              return new Promise((resolve, reject) => reject());
            },
            message: 'Promise'
          },
          {
            type: 'xxx',
            match: true,
            message: '错误'
          }
        ]
      }
    ];
    validator(formData, fields).then((validateMessageGroup) => {
      expect(validateMessageGroup.username.length).toEqual(3);
      expect(validateMessageGroup.password.length).toEqual(4);
      done();
    });
  });
});
