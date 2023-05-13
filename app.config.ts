export default defineAppConfig({
  docus: {
    title: "Entromatica",
    description: "A library for constructing, simulating and analyzing markov chains.",
    url: "https://www.entromatica.com",
    socials: {
      github: "DanielMeiborg/entromatica"
    },
    aside: {
      level: 0,
      exclude: []
    },
    header: {
      logo: false
    },
    footer: {
      iconLinks: [
        {
          href: "https://crates.io/crates/entromatica",
          icon: "vscode-icons:file-type-cargo"
        },
        {
          href: "https://docs.rs/entromatica",
          icon: "simple-icons:docsdotrs"
        }
      ]
    }
  }
})
