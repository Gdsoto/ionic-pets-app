import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'com.example.app',
	appName: 'PetsApp',
	webDir: 'build',
	bundledWebRuntime: false,
	server: {
		androidScheme: 'http',
		allowNavigation: ['http://186.154.135.199:19994/api'],
		cleartext: true,
	},
};

export default config;
