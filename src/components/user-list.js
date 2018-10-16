import React from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions/index';

class UsersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users:[]
        };
    }

    componentDidMount()
    {
        this.props.fetchUsers();
    }

    renderUsers = () => {
        if(this.props.users.length == 0) {
            return (
                <tr><td className="text-center" colSpan="5">Loading..</td></tr>
            );
        }
        else {
        return this.props.users.map((u =>
            u.data.map(( user =>
            <tr key={user.id}>
                <td>{user.login}</td>
                <td>{user.node_id}</td>
                <td>{user.organizations_url}</td>
                <td>{user.html_url}</td>
                <td>{user.type}</td>
            </tr>
            ))
        ));
    }
    }

    render() {
    return (
            <table className="table table-hover">
            <thead>
                <tr className="text-uppercase">
                    <th>Login</th>
                    <th>Node ID</th>
                    <th>Organization URL</th>
                    <th>HTML URL</th>
                    <th>User Type</th>
                </tr>
            </thead>
            <tbody>
                {this.renderUsers()}
            </tbody>
            </table>
        );
}
}

function mapStateToProps(state)
{
    return {
        users : state.users
    }
}
export default connect(mapStateToProps, { fetchUsers })(UsersList);