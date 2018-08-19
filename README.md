# Curriculum Design

## QuickStart

### RESTful style URL definition

We use app.resources('routerName', 'pathMatch', 'controller') to generate CRUD structures on a path for convenience. if you prefer the RESTful style URL definition.
For example, the codes above produce a bunch of CRUD path structures for Controller app/controller/posts.js, and the only thing you should do next is to implement related functions in posts.js.

for example:

| Method Path |      Route      |   Name    |       Controller.Action       |
| ----------- | :-------------: | :-------: | :---------------------------: |
| GET         |     /posts      |   posts   |  app.controllers.posts.index  |
| GET         |   /posts/new    | new_post  |   app.controllers.posts.new   |
| GET         |   /posts/:id    |   post    |  app.controllers.posts.show   |
| GET         | /posts/:id/edit | edit_post |  app.controllers.posts.edit   |
| POST        |     /posts      |   posts   | app.controllers.posts.create  |
| PUT         |   /posts/:id    |   post    | app.controllers.posts.update  |
| DELETE      |   /posts/:id    |   post    | app.controllers.posts.destroy |

### The project structure

```
.
├── app
    ├── controller
    ├── middleware
    ├── model
    ├── public
    ├── router.js
    └── service
├── appveyor.yml
├── config
├── logs
├── node_modules
├── package.json
├── package-lock.json
├── README.md
├── run
└── test
```

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade
