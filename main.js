

export default{
    data() {
      return {
        title: "Monir",
        firstName: "Monir",
        lastName: "Hossain",
        email: "monirbd.me@gmail.com",
        gender: "male",
        picture: "https://randomuser.me/api/portraits/men/75.jpg",
      };
    },
    methods: {
      async getUser() {
          const res = await fetch('https://randomuser.me/api')
          const {results} = await res.json()
  
        this.title = results[0].name.title;
        this.firstName = results[0].name.first;
        this.lastName = results[0].name.last;
        this.email = results[0].email;
        this.gender = results[0].gender;
        this.picture = results[0].picture.large;
      },
    },
  };
  app.mount("#app");
  