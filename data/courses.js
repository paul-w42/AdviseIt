/*
* Contains the required classes prior to admittance into the BAS program.
* Array cells where two classes are listed, the requirement is to take one 
* or the other, not both
*/
let requiredCourses = {
    classes: [
        {
            course1: 'MATH97',
            requires: false
        },
        {
            course1: 'ENG101',
            requires: false
        },
        {
            course1: 'ENG126',
            requires: false
        },
        {
            course1: 'MATH141',
            requires: false
        },
        {
            course1: 'MATH146',
            requires: false
        },
        {
            course1: 'CMST210',
            requires: false
        },
        {
            course1: 'LABSCIENCE',
            requires: false
        },
        {
            course1: 'SDEV101',
            requires: false
        },
        {
            course1: 'IT201',
            requires: false
        },
        {
            course1: 'SDEV218',
            requires: 'MATH97'
        },
        {
            course1: 'CS108',
            requires: 'MATH97'
        },
        {
            course1: 'SDEV106',
            requires: false
        },
        {
            course1: 'SDEV117',
            requires: 'SDEV106'
        },
        {
            course1: 'SDEV219',
            requires: 'SDEV218'
        },
        {
            course1: 'SDEV121',
            requires: 'CS108'
        },
        {
            course1: 'SDEV220',
            requires: 'SDEV219'
        },
        {
            course1: 'SDEV280',
            requires: false
        },
    ]    
};
