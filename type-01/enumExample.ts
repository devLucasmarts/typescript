enum courseStatus {
    Active,
    Inactive,
    Paused,
};

let newCourseStatus: courseStatus = courseStatus.Active; // referenciamos um enum usando EnumName.Value;
console.log(newCourseStatus)