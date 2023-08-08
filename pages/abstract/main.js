const content = [
  {
    logo: "images/img.png",
    title: "Using Abstract",
    description:
      "Abstract lets you manage, version, and document your designs in one place.",
    url: "#",
  },
  {
    logo: "images/img2.png",
    title: "Manage your account",
    description:
      "Configure your account settings, such as your email, profile details, and password.",
    url: "#",
  },
  {
    logo: "images/img3.png",
    title: "Manage organizations, teams, and projects",
    description:
      "Use Abstract organizations, teams, and projects to organize your people and your work.",
    url: "#",
  },
  {
    logo: "images/img4.png",
    title: "Manage billing",
    description: "Change subscriptions and payment details.",
    url: "#",
  },
  {
    logo: "images/img5.png",
    title: "Authenticate to Abstract",
    description:
      "Set up and configure SSO, SCIM, and Just-in-Time provisioning.",
    url: "#",
  },
  {
    logo: "images/img6.png",
    title: "Abstract support",
    description: "Get in touch with a human.",
    url: "#",
  },
];

const generateJson = () => {
  var main_content = document.getElementsByClassName("content-obj");

  content.map((item) => {
    $(".content-obj").append(`
    <div class="col-md-6 content-list-each">
        <div class="d-flex">
            <div class="img-1">
                <img src="${item.logo}" alt="placeholder" />
            </div>
            <div class="icerik-1">
                <h3>${item.title}</h3>
                <p class="content-text">
                ${item.description}
                </p>
                <a href="${item.url}">Learn More →</a>
            </div>
        </div>
    </div>
    `);
  });
};

window.onload = () => {
  generateJson();
};