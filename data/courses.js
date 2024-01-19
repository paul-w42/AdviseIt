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
            course2: 'SDEV201',
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
            requires: false
        },
        {
            course1: 'SDEV219',
            course2: 'CS141',
            requires: 'SDEV218'
        },
        {
            course1: 'SDEV121',
            requires: false
        },
        {
            course1: 'SDEV220',
            course2: 'CS145',
            requires: 'SDEV219'
        },
        {
            course1: 'SDEV280',
            requires: false
        },
    ]    
};

/*
 * Contains the two branches of core classes in BAS program
 */
let core = {
    branch1: [
        {
            class: 'SDEV301',
            requires: false,
        },
        {
            class: 'SDEV333',
            requires: 'SDEV301',
        },
        {
            class: 'SDEV334',
            requires: 'SDEV333',
        }
    ],

    branch2: [
        {
            class: 'SDEV305',
            requires: false,
        },
        {
            class: 'SDEV328',
            requires: 'SDEV305',
        },
        {
            class: 'SDEV355',
            requires: 'SDEV328',
        },
        {
            class: 'SDEV485',
            requires: 'SDEV355',
        },
        {
            class: 'SDEV486',
            requiers: 'SDEV485',
        }
    ]
}

/*
* Indicates number of required electives, and possible elective classes
*/
let electives = {
    required: 2,
    classes: [
        {
            class: 'SDEV372',
        },
        {
            class: 'SDEV426',
        },
        {
            class: 'SDEV450',
        }
    ]
};