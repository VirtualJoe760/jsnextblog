# MDX Quick Reference Guide

MDX combines the simplicity of Markdown with the power of JSX, allowing you to write rich content with embedded components. Below are some common tasks and examples to help you get started.

## 1. Headers

You can create headers by using the `#` symbol, followed by a space. The number of `#` symbols determines the level of the header.

```md
# H1 Header
## H2 Header
### H3 Header
#### H4 Header
```

**Example:**

```md
# This is an H1 Header
## This is an H2 Header
### This is an H3 Header
```

## 2. Links

Create links by wrapping the link text in square brackets `[]` and the URL in parentheses `()`.

```md
[OpenAI](https://www.openai.com)
```

**Example:**

```md
Check out [OpenAI](https://www.openai.com) for more information.
```

## 3. Images

Insert images using `![]()` where the alt text goes inside the square brackets and the image URL goes inside the parentheses.

```md
![Alt Text](https://example.com/image.jpg)
```

**Example:**

```md
![Sample Image](https://example.com/sample-image.jpg)
```

## 4. Videos

While Markdown itself doesn't support embedding videos directly, you can use HTML within MDX to embed videos, including YouTube videos.

### Embed a Video
```html
<video width="600" controls>
  <source src="path-to-video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
```

### Embed a YouTube Video

You can embed YouTube videos using the `iframe` tag:

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

**Example:**

```html
<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```

## 5. Code Blocks

For inline code, wrap the code in single backticks `` ` ``. For code blocks, use triple backticks ``` ``` or indent the block with four spaces.

### Inline Code
```md
Here is some `inline code`.
```

### Code Blocks
```md
```javascript
const greet = () => {
  console.log("Hello, MDX!");
};
```
```

**Example:**

```javascript
const greet = () => {
  console.log("Hello, MDX!");
};
```

## 6. Lists

### Unordered Lists

Use `-`, `*`, or `+` followed by a space to create unordered lists.

```md
- Item 1
- Item 2
  - Sub-item 1
  - Sub-item 2
```

### Ordered Lists

Use numbers followed by a period to create ordered lists.

```md
1. First item
2. Second item
   1. Sub-item 1
   2. Sub-item 2
```

## 7. Embedding JSX/React Components

One of the powerful features of MDX is the ability to embed JSX directly in your Markdown. You can include custom components within your content.

```mdx
<MyCustomComponent prop="value" />
```

**Example:**

```mdx
<Greeting name="John Doe" />
```

---

You can now reference this MDX guide while working on your project to quickly recall how to create headers, links, images, videos, code blocks, and more.
