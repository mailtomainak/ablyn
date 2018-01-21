module.exports = {
  default: (request, reply) => {
    //if session is there then show logged in users TimeLine
    // else just redirect to login page

    reply.view('index');
    // reply({
    //   data: {
    //     message: "Hello"
    //   },
    //   page: 'default'
    // });
  },
  login: (request, reply) => {
    //show login view and ensure login is done.
    reply.view('login');
  },
  logout: (request, reply) => {
    //show logout view and clear session
    reply.view('logout');
  },
  register: (request, reply) => {
    reply.view('register');
  },
  timeline: (request, reply) => {
    reply.view('user');
    //pattern is /userName  -> shows the timeline of the user
  }

}
