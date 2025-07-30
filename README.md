# AlexMarc.us Astro

This site is designed to capture both my professional and personal projects across a wide variety of disciplines. It is partially intended to provide prospective employers a place to view my accomplishments, and partially to provide myself a place to track my efforts.

## Information Design

I know myself to be a jack-of-all-trades-type person, with a penchant for trying new things. This results in many situations where I learn a new skill to an adequate level to accomplish a project, and then shelve that skill until I want to use it again. I love this pattern, as it lets me try my hand at many different things, but I also struggle with tracking my list of skills and projects. 

With that in mind, the information design of AlexMarc.us has the following elements:
- Projects
    - Summary of a long-form effort in a specific discipline to deliver a discrete product.
    - Contents:
        - How I got involved in the project
        - The project goals
        - If finished, the outcome of the project
        - Any posts associated with the project
    - Metadata:
        - Skill association
        - Category association
        - Start date
        - End date (optional)
- Posts
    - Short-form updates on any given topic.
    - Metadata:
        - Project association (optional)
        - Skill association
        - Category association
        - Date
- Categories
    - High-level grouping for posts and projects
    - Should encompass a context that someone might want to view my activity in
- Skills
    - Skills utilized in projects and posts
    - Flat list of skills - no nesting
    - Each skill can be high or low level, depending on the post/project needs
    - Skill tags on projects + posts will be counted up for display as "skill list" ordered by count

## Content Design

To accompany the information design of this site, the following pages are intended to contain relevant display of the information.

### Home

The landing page, providing a high-level introduction to me and the site's contents. It should contain:
- Photo of me
- Introduction
- Skill list
- Latest post/project updates

### Resume

My online, dynamic resume. Gives me an opportunity to expand on my professional experience by sprinkling in personal projects, volunteer efforts, links, and examples in the Project and Posts.

### Projects



### Posts


## 🛠️ Commands

All commands are run from the root of the project:

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview your build locally |
| `npm run astro ...` | Run CLI commands like `astro add` |
| `npm run check` | Check TypeScript types |
| `npm run lint` | Run ESLint |

[![Built with Astro](https://astro.badg.es/v2/built-with-astro/small.svg)](https://astro.build)

Based on the [volks-typo](https://github.com/jdrhyne/volks-typo) Astro theme.
