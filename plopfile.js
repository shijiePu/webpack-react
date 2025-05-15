module.exports = function (plop) {
	// create your generators here
	plop.setGenerator('component', {
		description: 'this is a skeleton plopfile',
		prompts: [{
			type: 'input',
			name: 'name',
			message: '请输入组件名称'
		}],
		actions: [
			{
			type: 'add',
			path: 'plop/{{name}}/index.jsx',
			templateFile: 'plop-templates/controller.hbs'
		}
	]
	});

	plop.setGenerator('page', {
		description: '该命令可以在项目中创建一个页面文件，并在路由中配置他',
		prompts: [{
			type: 'input',
			name: 'name',
			message: '请输入组件名称'
		}],
		actions: [{
			type: 'modify',
			path: 'src/config/router.tsx',
			pattern: /(\/\/ plop占位)/,
			templateFile: 'plop-templates/router.hbs'
		},
		{
			type: 'modify',
			path: 'src/config/router.tsx',
			pattern: /(\/\/ esm-plop占位)/,
			templateFile: 'plop-templates/router_esm.hbs'
		},
		{
			type: 'add',
			path: 'src/pages/{{name}}/index.jsx',
			templateFile: 'plop-templates/controller.hbs'
		},

		{
			type: 'add',
			path: 'src/pages/{{name}}',
		},

		{
			type: 'add',
			path: 'src/pages/{{name}}/index.jsx',
			templateFile: 'plop-templates/controller.hbs'
		},
		{
			type: 'modify',
			path: 'src/config/navConfig.ts',
			pattern: /(\/\/ plop占位)/,
			templateFile: 'plop-templates/router.hbs'
		}
		]
	});

};