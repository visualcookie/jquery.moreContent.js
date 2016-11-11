# jQuery moreContent
Your client has too much content for his website and the content seems not that important (like a product description)? Say goodbye to long description content with this tiny plugin for jQuery. Oh, and hey: it's **SEO friendly** for all those who asked.

**IMPORTANT NOTE:** I'm no longer maintaining this project.

## How it works
If you implement **jQuery moreContent** correctly and call it on your preferred element the following will happen:

1. The element gets wrapped by a default wrapper with the class of ```mc-wrapper```
2. Button gets placed after your preferred element
3. Element gets a default height or your defined height and an ```overflow: hidden;```
3. Some other weird sh*t happens

## Implementation
1. You'll need [jQuery](http://jquery.com/download/) and [Velocity.js](http://julian.com/research/velocity/)
2. Get [jquery.moreContent.js](../master/jquery.morecontent.js) up on your server

The rest is pretty much self explaining.

## Configuration
Like all cool plugins, you can customize amazing stuff. Here's a short table of what's configurable with **jQuery moreContent**:

parameter | type | data-attribute | default | description
--- | --- | --- | --- | ---
height | int | ```data-height="160"``` | ```160``` | set height for element
duration | int | ```data-duration="1000"``` | ```1000``` | set duration for animation
labelopen | str | ```data-labelopen="Open"``` | ```"Open"``` | set default btn text
labelclose | str | ```data-labelclose="Close"``` | ```"Close"``` | set active btn text
labelclass | str | ```data-labelclass="btn-default"``` | ```"btn-default"``` | change btn class

## License

### The MIT License (MIT)

Copyright (c) 2014 Dean Hidri

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
