/*
 * @Descripttion:
 * @version:
 * @Author: caoqinghua
 * @Date: 2019-05-20 21:25:52
 * @LastEditors: caoqinghua
 * @LastEditTime: 2019-09-17 15:55:58
 */

const tokens = {
    admin: {
        token: 'admin-token'
    },
    editor: {
        token: 'editor-token'
    }
}

const users = {
    'admin-token': {
        roles: ['admin'],
        introduction: 'I am a super administrator',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Super Admin'
    },
    'editor-token': {
        roles: ['editor'],
        introduction: 'I am an editor',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Normal Editor'
    }
}

export default [
    // user login
    {
        url: '/user/login',
        type: 'post',
        response: config => {
            const { username } = config.body
            const token = tokens[username]

            // mock error
            if (!token) {
                return {
                    code: 60204,
                    message: 'Account and password are incorrect.'
                }
            }

            return {
                returnCode: '000000',
                returnData: token
            }
        }
    },

    // get user info
    {
        url: '/user/info',
        type: 'post',
        response: config => {
            const { token } = config.body
            const info = users[token]

            // mock error
            if (!info) {
                return {
                    code: 50008,
                    message: 'Login failed, unable to get user details.'
                }
            }

            return {
                returnCode: '000000',
                returnData: info
            }
        }
    },

    // user logout
    {
        url: '/user/logout',
        type: 'post',
        response: _ => {
            return {
                returnCode: '000000',
                returnData: 'success'
            }
        }
    }
]