export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "627a5e7a7d4bf9115498f90e",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-s5ai4q5j",
                  apiId: "b4531551-692f-46b0-a021-9df901940f27",
                },
                {
                  buildHookId: "627a5e7b5502b80fe0a0c880",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-aw5sowno",
                  apiId: "607edb42-4a1f-4a16-b869-4c61ad8a27a0",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/klyushevad/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-aw5sowno.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
