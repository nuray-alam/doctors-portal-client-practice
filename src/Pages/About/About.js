import React from 'react';
import { TypeAnimation } from 'react-type-animation';


const About = () => {
    return (
        <div>
            <h1 className="text-black">This is about page</h1>
            <TypeAnimation
                sequence={[
                    'Hello there!', // Types 'One'
                    2000, // Waits 1s
                    "I'm Md. Nuray Alam Siddik", // Deletes 'One' and types 'Two'
                    2000, // Waits 2s
                    'MERN Stack Developer', // Types 'Three' without deleting 'Two'
                    2000,
                    () => {
                        console.log('Done typing!'); // Place optional callbacks anywhere in the array
                    }
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '2em', color: "gray", fontWeight: "bold" }}
            />
        </div>
    );
};

export default About;