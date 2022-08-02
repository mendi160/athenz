import { _ } from 'lodash';
import { expiry } from '../../config/config.test';
import { LOAD_PENDING_MEMBERS } from '../../../redux/actions/user';
import { user } from '../../../redux/reducers/user';

describe('User Reducer', () => {
    it('should load the user pending members', () => {
        const initialState = {};
        let userPendingMembers = {
            'domuser.user2role1': {
                category: 'role',
                domainName: 'dom',
                memberName: 'user.user2',
                memberNameFull: null,
                roleName: 'role1',
                userComment: 'test',
                auditRef: '',
                requestPrincipal: 'user.user3',
                requestPrincipalFull: null,
                requestTime: '2022-07-17T14:37:48.248Z',
                expiryDate: null,
            },
            'domuser.user3role1': {
                category: 'role',
                domainName: 'dom',
                memberName: 'user.user3',
                memberNameFull: null,
                roleName: 'role1',
                userComment: 'test',
                auditRef: '',
                requestPrincipal: 'user.user3',
                requestPrincipalFull: null,
                requestTime: '2022-07-17T14:37:20.725Z',
                expiryDate: null,
            },
            'domuser.user4role1': {
                category: 'role',
                domainName: 'dom',
                memberName: 'user.user4',
                memberNameFull: null,
                roleName: 'role1',
                userComment: 'test',
                auditRef: '',
                requestPrincipal: 'user.user3',
                requestPrincipalFull: null,
                requestTime: '2022-07-17T14:37:34.665Z',
                expiryDate: null,
            },
            'dom.dom2user.user2role2': {
                category: 'role',
                domainName: 'dom.dom2',
                memberName: 'user.user2',
                memberNameFull: null,
                roleName: 'role2',
                userComment: 'added using Athenz UI',
                auditRef: '',
                requestPrincipal: 'user.user1',
                requestPrincipalFull: null,
                requestTime: '2022-07-12T14:29:08.384Z',
                expiryDate: '2022-09-25T14:29:08.374Z',
            },
        };
        const action = {
            type: LOAD_PENDING_MEMBERS,
            payload: {
                pendingMembers: userPendingMembers,
                expiry: expiry,
            },
        };
        const expectedState = {
            pendingMembers: userPendingMembers,
            expiry: expiry,
        };
        const newState = user(initialState, action);
        expect(_.isEqual(newState, expectedState)).toBeTruthy();
    });
});
