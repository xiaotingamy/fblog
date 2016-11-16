import React from 'react'
import LoginForm from './LoginForm'

export default React.createClass( {
    handleLoginSubmit(logindata) {
      $.ajax({
          url: this.props.url,
          datatype: 'json',
          type: 'post',
          data: logindata,
          success: function (data) {
              $.toast('success')
          }.bind(this),
          error: function (xhr, status, err) {
              $.toast(err);
          }.bind(this)
      })
    },
    render() {
        return (
            <div className="page-group">
                <div className="content">
                    <LoginForm  onLoginSubmit={this.handleLoginSubmit}/>
                </div>
            </div>
        )
    }
})