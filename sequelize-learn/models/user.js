module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'users',
    {
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
      },
      age: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      married: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('now()'),
      },
    },
    {
      timestamps: false,
      underscored: false,
    },
  );
};

//  User
//  name
//  age
//  married
//  createdAt

// sequelize.define('테이블 이름' , { 테이블 스키마 } , {옵션 객체})

// 테이블 스키마
// 칼럼 이름 : {
// type : 자료형 STRING| INTEGER | FLOAT | TEXT | DATE | BOOLEAN
// allowNull : --> null 값 가능한가?
// defaultValue: --> 기본값
// unique:  --> 고유한지 여부
// comment: --> 설명하는 부분
// primaryKey:
// }
//옵션
// timestamps : boolean -> 자동적으로 created_at 생성
// underscored : boolean -> true 이면 스네이크 케이스로 설정
