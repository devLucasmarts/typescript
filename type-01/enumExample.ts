// enum courseStatus {
//     Active,
//     Inactive,
//     Paused,
// };

// let newCourseStatus: courseStatus = courseStatus.Active; // referenciamos um enum usando EnumName.Value;
// console.log(newCourseStatus)

// Alterando a enum para refletir os resultados seguindo dados externos

enum courseStatus {
    Active = 1,
    Inactive,
    Paused,
};

let newCourseStatus: courseStatus = courseStatus.Active; // referenciamos um enum usando EnumName.Value;
console.log(newCourseStatus)