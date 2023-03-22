export default function (plop) {
  plop.setGenerator('component', {
      description: 'Create Atomic Component',
      prompts: [
        {
          type: 'list',
          name: 'type',
          message: 'Atomic type',
          choices: ['atoms', 'molecules', 'organisms', 'templates', 'pages']
        },
        {
          type: 'input',
          name: 'name',
          message: 'component name'
        },
        {
          type: 'input',
          name: 'wrapper',
          message: 'HTML element to be the wrapper element',
          default: 'section'
        },
      ],
      actions: [
        {
          type: 'add',
          path: 'src/components/{{lowerCase type}}/{{name}}/index.ts',
          templateFile: 'templates/index.hbs'
        },
        {
          type: 'add',
          path: 'src/components/{{lowerCase type}}/{{name}}/{{name}}.tsx',
          templateFile: 'templates/component.hbs'
        },
        {
          type: 'add',
          path: 'src/components/{{lowerCase type}}/{{name}}/{{name}}.module.scss',
          templateFile: 'templates/styles.hbs'
        },
        {
          type: 'add',
          path: 'src/components/{{lowerCase type}}/{{name}}/{{name}}Props.ts',
          templateFile: 'templates/props.hbs'
        },
        {
          type: 'add',
          path: 'src/components/{{lowerCase type}}/{{name}}/{{name}}.test.tsx',
          templateFile: 'templates/tests.hbs'
        },
      ]
  });
};