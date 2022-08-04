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

// ==================================

enum StatusCodes {
    OK = 200,
    BadRequest = 400,
    Unauthorized = 401,
    PaymentRequired = 402,
    Forbidden = 403,
    NotFound = 404,
};

// Enum aceita acesso aos valores tanto pela chave quanto pelo valor

console.log(StatusCodes.OK) // 200
console.log(StatusCodes[400]) // BadRequest
console.log(StatusCodes.BadRequest) // 400
