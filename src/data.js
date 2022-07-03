
export default {
	
	auth: { 
		user: { 
			uid: 'sabrina',
			provider: 'auth.com' 
		}
	},
	users: {
		sabrina: {
			name: 'Sabrina',
			mail: 'sabrina34@mail.com',
			groupId: 2
		},
		juanmarco: {
			name: 'Juan Marco',
			mail: 'juan.marco@mail.com',
			groupId: 2
		},
		diego: {
			name: 'Diego Armando',
			mail: 'diego10@mail.com',
			groupId: 3
		}
	},
	groups: {
		1 : { desc: 'Anonymous' },
		2 : { desc: 'Editorial-Team' },
		3 : { desc: 'Administrators' }
	},
	roles: {
		Administrator: [3],
		Publisher: [3,2],
		Editor: [3,2],
		Designer: [3,2],
		Viewer: [3,2,1],
	}
}