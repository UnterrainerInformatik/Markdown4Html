# Markdown4Html
This code can be used to import .md files to your web-page, specifically your blogger.com blog.

In order to understand what's happening here, visit this blog post [http://dvdotsenko.blogspot.co.at/2012/08/markdown-with-blogspotcom-and-bloggercom.html](http://dvdotsenko.blogspot.co.at/2012/08/markdown-with-blogspotcom-and-bloggercom.html).

The code in this repo helps setting this method up correctly.

## Setup
### - Open the template for HTML-editing in blogger (or open the source of your web-page) you want this method to work on.
### - Search your end-body tag and copy the 4 script imports in there (just like in the example.html in the root of this repo; use that file to copy-paste the whole code & example md-script-tags).
```html
<!-- Imports right above your end-body tag. -->
<script src='https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js'
  type='text/javascript'/>
<script src='https://rawgit.com/UnterrainerInformatik/Markdown4Html/master/libs/markdown.min.js'
  type='text/javascript'/>
<script src='https://rawgit.com/UnterrainerInformatik/Markdown4Html/master/libs/script.js'
  type='text/javascript'/>
<script src='https://rawgit.com/UnterrainerInformatik/Markdown4Html/master/libs/prettify.js'
  type='text/javascript' defer='defer'/>
```
### - Insert a script-tag with type="text/x-markdown" where you want your markdown to be displayed.

#### Either directly writing into the script tag:
```html
<!-- Add markdown directly entering text: -->
  <script type="text/x-markdown">
    # This is a text
    Written directly on your page within the script-tag marked with 'type="text/x-markdown"'.
  </script>
```
#### Or importing a .md file:
```html
<!-- Add markdown importing from github: -->  
  <script src="https://rawgit.com/UnterrainerInformatik/Markdown4Html/master/testImportFile.md"
    type="text/x-markdown"></script>
```

## Additional Info
This version is enhanced.  
You cannot import .md files from another site with the original code.  
In order to achieve that, I'm just reading the 'src' attribute of the appropriate 'script' tag and then I do an ajax-request for the source file before rendering it.  

When importing .md files from github, you have to change the URL to point to rawgit.com instead of raw.github.com because github changed their policy about media-types originating from that URL. On rawgit you'll get the right one automatically.
Don't worry. The rawgit site works automatically as a CDN for your github repos. You don't have to do anything on your own.

## Caveats
There are limitations to this method of importing and rendering markdown.  
To be on the safe side, I'm quoting the original post on that matter, just in case you're too lazy to read the original blog-post ;)

> You simply cannot have script tags as parts of preformatted code snippets. Markdown does not convert raw-looking HTML tags into HTML-escaped versions. Yet, when you pre-HTML-escape the contents of Markdown tempalte, it ends up being escaped again by Markdown and literally displays the escaped string, not underlying character.
> The other problem is: Putting Markdown into script tag makes it unidexable by the search engine.
