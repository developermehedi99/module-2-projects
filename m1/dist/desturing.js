"use strict";
{
    const user = {
        name: 'sundori',
        job: 'frontden',
        id: 23,
        address: {
            house: 'raj,bd',
            roadno: 532,
        },
        skills: {
            language: 'js',
            famework: 'react,next'
        }
    };
    // const {name, address:{house},skills:{language,famework}} = user;
    const { address } = user;
    // console.log(`she ${name} live ${house},and her skills is ${famework}`)
    console.log(`his address  ${address.house}`);
}
