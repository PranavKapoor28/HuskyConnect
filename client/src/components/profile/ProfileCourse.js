import React from 'react';
import PropTypes from 'prop-types';

const ProfileCourse = ({
    course: { cname, pname, semester }
}) => (
    <div>
        <p>
            <strong>Course name: </strong> {cname}
        </p>
        <p>
            <strong>Professor name: </strong> {pname}
        </p>
        <p>
            <strong>Semester: </strong> {semester}
        </p>
    </div>
);

ProfileCourse.propTypes = {
    course: PropTypes.object.isRequired
};

export default ProfileCourse;
