/*
* Contains the required classes prior to admittance into the BAS program.
* Array cells where two classes are listed, the requirement is to take one 
* or the other, not both
*/
let requiredPrereqs = {
    classes: [
        {
            course1: 'IT201',
            course2: 'SDEV201',
        },
        {
            course1: 'SDEV106',
        },
        {
            course1: 'SDEV117',
        },
        {
            course1: 'SDEV219',
            course2: 'CS141',
        },
        {
            course1: 'SDEV220',
            course2: 'CS145',
        }
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