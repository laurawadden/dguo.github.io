# Danny Guo's personal website

[![Build Status](https://travis-ci.org/dguo/dguo.github.io.svg?branch=master)](https://travis-ci.org/dguo/dguo.github.io) [![Netlify Status](https://api.netlify.com/api/v1/badges/2288054d-de7c-458b-bbf4-21a1c3fcfeee/deploy-status)](https://app.netlify.com/sites/dannyguo/deploys)

Hello! My website is available at https://dannyguo.com.

## Tech Stack

* [Algolia](https://algolia.com/) for search functionality
* [Disqus](https://disqus.com/) for comments in posts
* [Google Analytics](https://www.google.com/analytics) for analytics
* [Google Fonts](https://fonts.google.com/) for the [Open Sans](https://fonts.google.com/specimen/Open+Sans) font
* [Hugo](https://gohugo.io/) for generating the static site
* [Imgur](https://imgur.com/) for image hosting
    * This allows me to avoid committing images to Git
* [Netlify](https://netlify.com/) for hosting
* [Repl.it](https://repl.it/) for interactive code snippets
* [Travis CI](https://travis-ci.org/) for continuous integration

## Features

Many of these were easy to add because of Hugo.

* [animated link underlines](https://github.com/dguo/dguo.github.io/commit/14e51391329163fa414ac55d77fdf6da521ab644)
* [comments](https://github.com/dguo/dguo.github.io/commit/8bbd1e12cf145844e384b1858f169d96fd70b45c)
* [copy to clipboard buttons for code blocks](https://github.com/dguo/dguo.github.io/commit/6953658a361112c3d3f7c348a537a200d24c8c63)
* [custom text selection colors](https://github.com/dguo/dguo.github.io/commit/b6426c17c4fc7c1d53131c626f93481762919fc8)
* ["edit on GitHub" links](https://github.com/dguo/dguo.github.io/commit/a28a14aef5846cefe714b24a2cd67081398c71b7)
* [estimated reading times and word counts](https://github.com/dguo/dguo.github.io/commit/8471241935cc21e84b8e51f51d20b59226698551)
* [pagination links to the previous and next posts](https://github.com/dguo/dguo.github.io/commit/5e8f017598f5afe430398c45c3808f4968c8eee4)
* [RSS feed for blog posts](https://github.com/dguo/dguo.github.io/commit/2001465e76c58e409c60ff688dd779298ab5b1f4)
* [static anchor links](https://github.com/dguo/dguo.github.io/commit/d8f81fa4573ccdf90030cb8f1252ec27f330493f)
* [static copyright year](https://github.com/dguo/dguo.github.io/commit/a8a3e1acac919f759253f07ad8a466be8ba4fcfb)
* [static syntax highlighting](https://github.com/dguo/dguo.github.io/commit/3f02ffcd82883de75ac68151b1b518b045fb390b)
* ["Updated on" dates](https://github.com/dguo/dguo.github.io/commit/86db8a3831508876bd8836573af3e752300e07c1) for blog posts when applicable
* unlisted posts that are only publicly available through a direct link

## Content

* [blog](https://www.dannyguo.com/blog/)
* [books](https://www.dannyguo.com/books/)
* [concerts that I've attended](https://www.dannyguo.com/about/#music)
* [food choices](https://www.dannyguo.com/food/)
* [GPG key](https://www.dannyguo.com/keys/)
* [public profiles](https://www.dannyguo.com/about/#public-profiles)
* [problems that I've noticed](https://www.dannyguo.com/problems/)
* [projects](https://www.dannyguo.com/projects)
* [mini blog of issues I've run into while programming](https://www.dannyguo.com/friction/)
* [referral links](https://wwww.dannyguo.com/referrals/)

## Checklist for Publishing an Unlisted Post

Follow this checklist to make a post publicly available, but only through a
direct link. Nothing on the site should link to it. This concept is the same as
an [unlisted YouTube video](https://support.google.com/youtube/answer/157177) or
[unlisted Medium
post](https://help.medium.com/hc/en-us/articles/215552778-Unlisted-publishing).

1. Remove the `draft` flag from the front matter
2. Add an `unlisted` flag with a value of `true`
3. Leave the `date`, `categories`, and `tags` fields empty
4. Commit, and push to deploy

## Checklist for Publishing a Final Post

1. Upload any images to the dedicated [Imgur album](https://imgur.com/a/mA7JRWp)
2. Update the front matter
    * Remove the `draft` or `unlisted` flag
    * Set the `date`, `categories`, and `tags` fields
3. Back up images in Google Drive
4. [Import](https://medium.com/p/import) the post into [Medium](https://medium.com/@dannyguo)
    * Convert code blocks into [GitHub gists](https://gist.github.com/) and embed them
    * Embed any [Repl.it](https://repl.it/repls) snippets
    * Set the [content licensing](https://help.medium.com/hc/en-us/articles/214741758-Content-licenses)
      to "Attribution, non-commercial, share alike"
5. Import the post into [dev.to](https://dev.to/)
    * To get around dev.to's [issue](https://github.com/thepracticaldev/dev.to/issues/575) with line break handling in Markdown, use `:%s/\(\S\)\n\(\S\)/\1 \2/ ` in Vim to join lines within paragraphs (afterwards, fix lists, code blocks, etc. as appropriate)
    * Add `canonical_url` to the front matter
    * Add any GIFs manually
    * Add a canonical link and an edit on GitHub link to the bottom of the post
6. Publicize the post, as appropriate, and update the post with links
    * [Hacker News](https://news.ycombinator.com/)
    * [Lobsters](https://lobste.rs/)
    * [Reddit](https://www.reddit.com/)
    * [Twitter](https://twitter.com/)

## Checklist for Updating a Post

Only do this for substantial changes, not small ones like fixing typos or links.

1. Add the `lastmod` variable to the post's [front
   matter](https://gohugo.io/content-management/front-matter/#front-matter-variables)
2. Update the post content
3. Publish it
4. If applicable, update the Medium post and/or the dev.to post
    * Make sure to check embedded content, like code examples

## License

The content of this project (in the `content` directory) is licensed under the
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International
license](http://creativecommons.org/licenses/by-nc-sa/4.0/), and the underlying
source code used to format and display this content is licensed under the [MIT
license](https://github.com/dguo/dguo.github.io/blob/master/LICENSE.txt).
