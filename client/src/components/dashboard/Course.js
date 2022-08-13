import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteCourse } from '../../actions/profile';
import formatDate from '../../utils/formatDate';

const Course = ({ course, deleteCourse }) => {
    const courses = course.map((exp) => (
        <tr key={exp._id}>
            <td className="hide-sm">{exp.cname}</td>
            <td>
                {formatDate(exp.from)} - {exp.to ? formatDate(exp.to) : 'Now'}
            </td>
            <td>
                <button
                    onClick={() => deleteCourse(exp._id)}
                    className="btn btn-danger"
                >
                    Delete
                </button>
            </td>
        </tr>
    ));

    return (
        <Fragment>
            <h2 className="my-2">Course Credentials</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Course Name</th>
                        <th className="hide-sm">Professor name</th>
                        <th className="hide-sm">Semester/th>
                            <th />
                    </tr>
                </thead>
                <tbody>{courses}</tbody>
            </table>
        </Fragment>
    );
};

Course.propTypes = {
    course: PropTypes.array.isRequired,
    deleteCourse: PropTypes.func.isRequired
};

export default connect(null, { deleteCourse })(Course);
