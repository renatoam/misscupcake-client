export default function (plop) {
  plop.setGenerator('atom', {
      description: '[Atom] Create Atomic Component',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'atom name'
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
          path: 'src/components/atoms/{{name}}/index.ts',
          templateFile: 'templates/index.hbs'
        },
        {
          type: 'add',
          path: 'src/components/atoms/{{name}}/{{name}}.tsx',
          templateFile: 'templates/component.hbs'
        },
        {
          type: 'add',
          path: 'src/components/atoms/{{name}}/{{name}}.module.scss',
          templateFile: 'templates/styles.hbs'
        },
        {
          type: 'add',
          path: 'src/components/atoms/{{name}}/{{name}}Props.ts',
          templateFile: 'templates/props.hbs'
        },
        {
          type: 'add',
          path: 'src/components/atoms/{{name}}/{{name}}.test.tsx',
          templateFile: 'templates/tests.hbs'
        },
      ]
  });
};