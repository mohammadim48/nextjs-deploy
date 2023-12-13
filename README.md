# Irnic Landingpage

توضیح کوتاهی از پروژه خود بنویسید.


### پیش‌نیازها

- Node.js
- npm

### نصب

1. ابتدا پروژه را کلون کنید.

```bash
git clone https://glab.sanayco.ir/irnic/landing


## Prerequisites

You will need [Node.js](https://nodejs.org) version 8.0 or greater installed on your system.

## Setup

Get the code by either cloning this repository using git

```
git clone https://glab.sanayco.ir/irnic/landing
```

... or [downloading source code](https://glab.sanayco.ir/irnic/landing) code as a zip archive.

Once downloaded, open the terminal in the project directory, and install dependencies with:

```
npm install
```

If you're running your own Sanity project with the example movie dataset, go to `lib/sanity.js` and change the following lines:

```
  projectId: 'YOUR_PROJECT_ID',
  dataset: 'NAME_OF_YOUR_DATASET',
```

```
sanity cors add http://localhost:3000
```

Then start the example app with:

```
npm run dev
```

The app should now be up and running at http://localhost:3000 🚀