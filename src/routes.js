import Dashboard from 'layouts/dashboard';
import Notifications from 'layouts/notifications';
import Profile from 'layouts/profile';
import SignIn from 'layouts/authentication/sign-in';

import Branch from 'layouts/branch/index';

import RoomAvailability from 'layouts/roomAvailibity';
import BulkImport from 'layouts/bulkImport';
import Expenses from 'layouts/expenses';

import Icon from '@mui/material/Icon';
import PaymentModules from 'layouts/payments';
import Tracker from 'layouts/roomavailabilitytracker';

const routes = [
	{
		type: 'collapse',
		name: 'Dashboard',
		key: 'dashboard',
		icon: <Icon fontSize="small">dashboard</Icon>,
		route: '/dashboard',
		component: <Dashboard />
	},
	{
		type: 'collapse',
		name: 'Room Availability Tracker',
		key: 'tracker',
		icon: <Icon fontSize="small">booking</Icon>,
		route: '/tracker',
		component: <Tracker />
	},
	{
		type: 'collapse',
		name: 'Guest Onboarding',
		key: 'profile',
		icon: <Icon fontSize="small">person</Icon>,
		route: '/profile',
		component: <Profile />
	},
	{
		type: 'collapse',
		name: 'Rooms Details',
		key: 'room_Details',
		icon: <Icon fontSize="small">person</Icon>,
		route: '/room_Details',
		component: <RoomAvailability />
	},
	{
		type: 'collapse',
		name: 'Reports',
		key: 'reports',
		icon: <Icon fontSize="small">receipt_long</Icon>,
		route: '/reports',
		component: <Notifications />
	},
	{
		type: 'collapse',
		name: 'Branch & Employees',
		key: 'branch',
		icon: <Icon fontSize="small">Leader Board</Icon>,
		route: '/branch',
		component: <Branch />
	},
	{
		type: 'collapse',
		name: 'BulkImport',
		key: 'bulk_Import',
		icon: <Icon fontSize="small">person_add</Icon>,
		route: '/bulk_Import',
		component: <BulkImport />
	},
	{
		type: 'collapse',
		name: 'Expenses',
		key: 'expenses',
		icon: <Icon fontSize="small">S</Icon>,
		route: '/expenses',
		component: <Expenses />
	},

	{
		type: 'collapse',
		name: 'Payments',
		key: 'payments',
		icon: <Icon fontSize="small">payment</Icon>,
		route: '/payments',
		component: <PaymentModules />
	},
	{
		type: 'collapse',
		name: 'Inventory',
		key: 'inventory',
		icon: <Icon fontSize="small">store</Icon>,
		route: '/inventory',
		component: <inventory />
	},
	{
		type: 'collapse',
		name: 'Issues',
		key: 'issues',
		icon: <Icon fontSize="small">receipt</Icon>,
		route: '/issues',
		component: <issues />
	},
	{
		type: 'collapse',
		name: 'Announcements',
		key: 'announcements',
		icon: <Icon fontSize="small">assignment</Icon>,
		route: '/announcements',
		component: <announcements />
	},

	{
		type: 'collapse',
		name: 'Sign Out',
		key: 'sign-out',
		icon: <Icon fontSize="small">logout</Icon>,
		route: '/authentication/sign-in',
		component: <SignIn />
	}
];
export default routes;
