export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61f1345c603b5a845834cc62',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-6vdoehgw',
                  apiId: 'ef6cb3a4-614a-4ac4-9050-29202bc0a6e9'
                },
                {
                  buildHookId: '61f1345c2d8d55928e67dc36',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-7ei177gi',
                  apiId: '6b398af3-e561-48a1-bec8-30b8fa32d725'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fbotu/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-7ei177gi.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
