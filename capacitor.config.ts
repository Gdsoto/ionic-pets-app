import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
	appId: 'com.example.app',
	appName: 'CocktailApp',
	webDir: 'build',
	bundledWebRuntime: false,
	server: {
		androidScheme: 'http',
		allowNavigation: ['https://www.thecocktaildb.com/api/json/v1/1'],
	},
};

export default config;
